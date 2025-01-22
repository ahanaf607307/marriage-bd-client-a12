import { FloatingLabel } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/UseAxiosPublic";
import GoogleLogin from "../../Shared/GoogleLogin";
import TitleDashboard from "../../Shared/TitleDashboard";
import useAuth from "../UseAuth/useAuth";
import { Helmet } from "react-helmet-async";

function SignUp() {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();

  const { signUpNewUser, setLoading, setUser, updateUserProfile } = useAuth();
  const [errorFound, setErrorFound] = useState("");
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
            console.log("user added successfully in database", res.data);
          });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "SignUp Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          setUser(res.user);
        });
        console.log("signup user -> ", res.user);
        reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("error from login user --->", error.message);
        setErrorFound(error.message);
      });

    console.log("signup", signUpInfo);
  };

  return (
    <div className="bg-login bg-cover bg-center object-cover min-h-screen flex flex-col justify-center items-center ">
      <Helmet>
              <title>Sign up | marriageBd</title>
            </Helmet>
      <section className="pt-10 ">
        <TitleDashboard heading={`Signup Now`} />
      </section>

      {/* signup form */}
      <div className="flex flex-col justify-center items-center w-screen md:min-w-[500px] max-w-xl mx-auto backdrop-blur-xl bg-white/10 p-4 md:p-10 rounded-xl mt-8 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 "
        >
          <FloatingLabel
            {...register("name", { required: true })}
            type="text"
            name="name"
            className="w-full"
            variant="filled"
            label="Name"
          />

          <FloatingLabel
            {...register("photoUrl", { required: true })}
            type="url"
            name="photoUrl"
            className="w-full"
            variant="filled"
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

          <button
            className="text-white/90 font-semibold hover:scale-105 bg-pink-500 rounded-xl px-3 py-2 duration-100"
            type="submit"
          >
            SignUp
          </button>
        </form>
        <GoogleLogin />
        <p className="text-md block text-start mt-5 text-white">
          Already have an account ?
          <Link
            className="underline font-bannerFont text-xl text-red-500 px-2"
            to="/login"
          >
            Login{" "}
          </Link>
          Now{" "}
        </p>
        <p className="text-lg  font-bannerFont text-center text-pink-600 bg-white/70 px-3 py-2 rounded-xl  mt-6">
          {errorFound}
        </p>
      </div>
    </div>
  );
}

export default SignUp;
