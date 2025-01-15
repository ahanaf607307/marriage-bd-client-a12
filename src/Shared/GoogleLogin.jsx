import { Button } from "flowbite-react";
import React from "react";
import { IoLogoGoogleplus } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Firebase/UseAuth/useAuth";
import useAxiosPublic from "../Hook/UseAxiosPublic";

function GoogleLogin() {
  const { setUser, setLoading, googleLoginUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLoginUser()
      .then((res) => {
        const name = res.user?.displayName;
        const email = res.user?.email;
        const userInfo = {
          name,
          email,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(
              "Error Caught From Google Login Post Api-->",
              err.message
            );
          });
        setUser({
          ...res.user,
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log("error form google login ", err.message);
      });
  };
  return (
    <div>
      <Button onClick={handleGoogleLogin} className="btn mt-5  bg-pink-500">
        <IoLogoGoogleplus className="text-lime-500 text-xl mr-2" /> Login With
        Google
      </Button>
    </div>
  );
}

export default GoogleLogin;
