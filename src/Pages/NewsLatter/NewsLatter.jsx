import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const NewsLatter = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit  = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully to Newsletter"
    });
reset()
  }
  return (
    <div className=" py-44  p-2 md:p-0">
     <div >
     <section id="newsLetter" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center rounded-xl p-4 md:p-10 lg:p-20 ">
        <div>
          <h4 className=" text-2xl lg:text-4xl font-serif dark:text-white">Sign Up For Newsletter</h4>
          <p className="font-semibold pt-4 text-sm lg:text-md dark:text-white">
            Get E-mail updates about our latest shop and{" "}
            <span className="text-pink-500 font-serif">special offers</span>
          </p>
        </div>
        <form  onSubmit={handleSubmit(onSubmit)} className=" flex h-14 w-full">
        <input {...register("email")} name="email" type="email" className="w-8/12 text-pink-600 font-semibold rounded-l-xl  border border-gray-500 " placeholder="Enter Your email" required />
        <button   type='submit' className="w-4/12 font-semibold  bg-pink-500 rounded-r-xl px-3 py-2 duration-100 text-white">Submit</button>
        </form>
      </section>
     </div>
    </div>
  );
};

export default NewsLatter;
