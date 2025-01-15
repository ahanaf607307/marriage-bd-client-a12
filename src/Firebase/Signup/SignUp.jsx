import { Button, FloatingLabel } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/UseAxiosPublic";
import GoogleLogin from "../../Shared/GoogleLogin";
import useAuth from "../UseAuth/useAuth";

function SignUp() {
  const axiosPublic = useAxiosPublic();
  const { signUpNewUser, setLoading, setUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const photoUrl = data.photoUrl;
    const signUpInfo = {
      email,
      password,
    };

    signUpNewUser(email, password)
      .then((res) => {
        updateUserProfile(name, photoUrl).then((res) => {
          const userInfo = {
            name,
            email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log('user added successfully in database',res.data)
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "SignUp Successfull",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        });

        console.log("signup user -> ", res.user);
        setUser(res.user);

        setLoading(false);
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("error from login user --->", error.message);
      });

    console.log("signup", signUpInfo);
  };

  return (
    <div className="bg-pink-300 min-h-screen ">
      <h1 className="text-5xl text-pink-500 text-center pt-10">Sign Up</h1>

      {/* signup form */}
      <div className="flex flex-col justify-center items-center max-w-lg mx-auto bg-white p-10 rounded-xl mt-14">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 "
        >
          <FloatingLabel
            {...register("name", { required: true })}
            type="text"
            name="name"
            className="w-full"
            variant="standard"
            label="Name"
          />

          <FloatingLabel
            {...register("photoUrl", { required: true })}
            type="url"
            name="photoUrl"
            className="w-full"
            variant="standard"
            label="Photo url"
          />

          <FloatingLabel
            {...register("email", { required: true })}
            type="email"
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

          <Button type="submit">SignUp</Button>
        </form>
        <GoogleLogin/>
        <p className="text-md block text-start mt-5 ">Already have an account ?<Link className="underline text-red-500" to='/login'>Login </Link>Now </p>
      </div>
    </div>
  );
}

export default SignUp;
