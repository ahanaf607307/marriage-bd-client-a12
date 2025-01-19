import { Button, FloatingLabel } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleLogin from "../../Shared/GoogleLogin";
import useAuth from "../UseAuth/useAuth";

function Login() {
  const { loginOldUser, setUser, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    loginOldUser(email, password)
    .then((res) => {
      setUser(res.user);
      setLoading(false);
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500
        });
      navigate(location?.state ? location.state : "/");
    })
    .catch(error => {
console.log('error from login user --->' , error.message)
    })
  };
  return (
    <div className="bg-pink-300 min-h-screen ">
      <h1 className="text-5xl text-pink-500 text-center pt-10">Login Now</h1>

      {/* Login form */}
      <div className="flex flex-col justify-center items-center max-w-lg mx-auto bg-white p-10 rounded-xl mt-14">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 "
        >
          <FloatingLabel
            {...register("email", { required: true })}
            name="email"
            className="w-full"
            variant="filled"
            label="Email"
          />

          <FloatingLabel
            {...register("password", { required: true })}
            type="password"
            name="password"
            className="w-full"
            variant="filled"
            label="Password"
          />

          <Button className="bg-transparent bg-pink-500" type="submit">Login</Button>
        </form>
        <GoogleLogin/>
        <p className="text-md block text-start mt-5">New user ?<Link className="underline text-red-500" to='/signUp'>Signup </Link>Now </p>
      </div>
      
     
    </div>
  );
}

export default Login;
