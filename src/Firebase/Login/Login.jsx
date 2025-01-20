import { FloatingLabel } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleLogin from "../../Shared/GoogleLogin";
import TitleDashboard from "../../Shared/TitleDashboard";
import useAuth from "../UseAuth/useAuth";

function Login() {
  const { loginOldUser, setUser } = useAuth();
  const [errorFound , setErrorFound] = useState('')
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
setErrorFound(error.message)
    })
  };
  return (
    <div className="bg-login bg-cover bg-center object-cover min-h-screen flex flex-col justify-center items-center ">
   <section className="pt-10 ">
   <TitleDashboard heading={`Login Now`}/>
   </section>

      {/* Login form */}
      <div className="flex flex-col justify-center items-center w-screen md:min-w-[500px] max-w-xl mx-auto backdrop-blur-xl bg-white/10 p-4 md:p-10 rounded-xl mt-8 ">
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

          <button className="text-white/90 font-semibold hover:scale-105 bg-pink-500 rounded-xl px-3 py-2 duration-100" type="submit">Login</button>
        </form>
        <GoogleLogin/>
        <p className="text-md block text-start mt-5 text-white">New user ?<Link className="underline text-red-500 font-bannerFont px-2" to='/signUp'>Signup </Link>Now </p>
        <p className="text-lg  font-bannerFont text-center text-pink-600 bg-white/70 px-3 py-2 rounded-xl  mt-6">
          {errorFound}
        </p>
      </div>
      
     
    </div>
  );
}

export default Login;
