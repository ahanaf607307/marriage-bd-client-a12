import { FloatingLabel } from "flowbite-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import TitleDashboard from "../../Shared/TitleDashboard";
import useAuth from "../UseAuth/useAuth";

const NormalUser = () => {
    const { loginOldUser, setUser } = useAuth();
  const [errorFound, setErrorFound] = useState("");
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
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("error from login user --->", error.message);
        setErrorFound(error.message);
      });
  };
    return (
        <div className="bg-login bg-cover bg-center object-cover min-h-screen flex flex-col justify-center items-center ">
      <Helmet>
        <title>AdminLogin | marriageBd</title>
      </Helmet>
      <section className="pt-10 ">
        <TitleDashboard heading={`Login Now As Admin`} />
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
            value={'normalUser@gmail.com'}
            disabled
          />

          <FloatingLabel
            {...register("password", { required: true })}
            type="password"
            name="password"
            className="w-full"
            variant="filled"
            label="Password"
            value={'normalUser'}
            disabled
          />

          <button
            className="text-white/90 font-semibold hover:scale-105 bg-pink-500 rounded-xl px-3 py-2 duration-100"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    );
};

export default NormalUser;