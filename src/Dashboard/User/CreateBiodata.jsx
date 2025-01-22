import { Button, FloatingLabel, Label, Select } from "flowbite-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Firebase/UseAuth/useAuth";

import useAxiosSecure from "../../Hook/useAxiosSecure";
import BannarAll from "../../Shared/BannarAll";

function CreateBiodata() {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const imageLink = data.imageLink;
    const date = startDate;
    const genderType = data.genderType;
    const height = data.height;
    const weight = data.weight;
    const age = parseInt(data.age);
    const occupation = data.occupation;
    const skinColor = data.skinColor;
    const fathersName = data.fathersName;
    const partnerAge = data.partnerAge;
    const mothersName = data.mothersName;
    const partnerHeight = data.partnerHeight;
    const partnerWeight = data.partnerWeight;
    const permanentDivision = data.permanentDivision;
    const presentDivision = data.presentDivision;
    const mobileNumber = data.mobileNumber;
    const email = data.email;
    const userRole = "normalUser";
    const bioDataRole = "normal";
    const bioDataInfo = {
      name,
      imageLink,
      date,
      genderType,
      height,
      weight,
      age,
      occupation,
      skinColor,
      fathersName,
      partnerAge,
      mothersName,
      partnerHeight,
      partnerWeight,
      permanentDivision,
      presentDivision,
      mobileNumber,
      email,
      userRole,
      bioDataRole,
    };

    axiosSecure
      .post("/biodatas", bioDataInfo)
      .then((res) => {
        console.log("bio data post form edit bio data", res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Biodata Publish Successfully !",
            icon: "success",
            draggable: true,
          });
          reset();
        }
      })
      .catch((err) => {
        console.log("error from edit bio data --->", err);
      });

    console.log(bioDataInfo);
  };

  return (
    <div>
      <div>
        <BannarAll bannerHeading={`"Build Your Matrimonial Profile"`} />

        <div className=" max-w-[90%]  xl:max-w-[80%] mx-auto my-10 bg-pink-400 p-5 md:p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-black/90  font-semibold "
          >
            <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
              <FloatingLabel
                {...register("name", { required: true })}
                name="name"
                type="text"
                className="text-black/90 "
                variant="filled"
                label="Name"
              />
              <FloatingLabel
                {...register("imageLink", { required: true })}
                name="imageLink"
                type="url"
                className="text-black/90 "
                variant="filled"
                label="Profile Image Link"
              />
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0 ">
              <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Date Of Birth"
                  />
                </div>
                <DatePicker
                  className=" border-b-2 border-b-white border-t-0 border-l-0 border-r-0 bg-transparent text-white/90 "
                  type="date"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>


              <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Gender Type"
                  />
                </div>
                <Select
                className="block w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
                {...register("genderType", { required: true })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Gender Type
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
              </div>
              
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Your Height"
                  />
                </div>
                <Select
                className="block w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
                {...register("height", { required: true })}
                name="height"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your height
                </option>
                <option value="5">5</option>
                <option value="5.1">5.1</option>
                <option value="5.2 ">5.2 </option>
                <option value="5.3">5.3</option>
                <option value="5.4">5.4</option>
                <option value="5.5">5.5</option>
                <option value="5.6">5.6</option>
                <option value="5.7">5.7</option>
                <option value="5.8">5.8</option>
                <option value="5.9">5.9</option>
                <option value="5.10">5.10</option>
                <option value="5.11">5.11</option>
                <option value="6">6</option>
              </Select>
              </div>
              
              


              <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Your Weight"
                  />
                </div>
               <Select
                className="block w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
                {...register("weight", { required: true })}
                name="weight"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your weight
                </option>
                <option value="40">40</option>
                <option value="42">42</option>
                <option value="44">44</option>
                <option value="46">46</option>
                <option value="48">48</option>
                <option value="50 ">50 </option>
                <option value="52 ">52</option>
                <option value="54 ">54 </option>
                <option value="58 ">58 </option>
                <option value="60">60</option>
                <option value="75">75</option>
                <option value="80">80</option>
              </Select>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
              
              <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Your Age"
                  />
                </div>
                <Select
                className="block w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
                {...register("age", { required: true })}
                name="age"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Your Age
                </option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="22">22</option>
                <option value="24">24</option>
                <option value="26">26</option>
                <option value="28">28 </option>
                <option value="30">30</option>
                <option value="32">32 </option>
                <option value="34">34 </option>
                <option value="38">38</option>
                <option value="40">40</option>
              </Select>


              </div>

              

              <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Occupation"
                  />
                </div>
                <Select
                className="block w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
                {...register("occupation", { required: true })}
                name="occupation"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Your occupation
                </option>
                <option value="Job Holder">Job Holder</option>
                <option value="Studeng">Studeng</option>
                <option value="Engneer">Engneer</option>
                <option value="Doctor">Doctor</option>
                <option value="Developer">Developer</option>
                <option value="Softwere Engineer">Softwere Engineer</option>
              </Select>

                
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
              <FloatingLabel
                {...register("fathersName", { required: true })}
                name="fathersName"
                type="text"
                className="text-black/90  "
                variant="filled"
                label="Fathers Name"
              />
              <FloatingLabel
                {...register("mothersName", { required: true })}
                name="mothersName"
                type="text"
                className="text-black/90 "
                variant="filled"
                label="Mothers Name"
              />
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
             

              <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Partner Age You Expect"
                  />
                </div>
                 <Select
                className="block w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
                {...register("partnerAge", { required: true })}
                name="partnerAge"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Partner Age You Expect
                </option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="22">22</option>
                <option value="24">24</option>
                <option value="26">26</option>
                <option value="28">28 </option>
                <option value="30">30</option>
                <option value="32">32 </option>
                <option value="34">34 </option>
                <option value="38">38</option>
                <option value="40">40</option>
              </Select>

                
              </div>

              
              <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Your Skin Color "
                  />
                </div>
                <Select
                className="block w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
                {...register("skinColor", { required: true })}
                name="skinColor"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Your Skin Color
                </option>
                <option value="Fair">Fair</option>
                <option value="Medium">Medium</option>
                <option value="Olive ">Olive </option>
                <option value="Dark">Dark</option>
              </Select>

                
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
              
              <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Partner Height You Expect"
                  />
                </div>
                <Select
                className="block w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
                {...register("partnerHeight", { required: true })}
                name="partnerHeight"
                defaultValue=""
              >
                <option value="" disabled>
                  Expected Partner Height You Expect
                </option>
                <option value="5">5</option>
              <option value="5.1">5.1</option>
              <option value="5.2 ">5.2 </option>
              <option value="5.3">5.3</option>
              <option value="5.4">5.4</option>
              <option value="5.5">5.5</option>
              <option value="5.6">5.6</option>
              <option value="5.7">5.7</option>
              <option value="5.8">5.8</option>
              <option value="5.9">5.9</option>
              <option value="5.10">5.10</option>
              <option value="5.11">5.11</option>
              <option value="6">6</option>
              </Select>

                
              </div>

              

              <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Partner Weight You Expect"
                  />
                </div>
                <Select
                className="block w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
                {...register("partnerWeight", { required: true })}
                name="partnerWeight"
                defaultValue=""
              >
                <option value="" disabled>
                  Expected Partner Weight You Expect
                </option>
                <option value="40">40</option>
                <option value="42">42</option>
                <option value="44">44</option>
                <option value="46">46</option>
                <option value="48">48</option>
                <option value="50 ">50 </option>
                <option value="52 ">52</option>
                <option value="54 ">54 </option>
                <option value="58 ">58 </option>
                <option value="60">60</option>
                <option value="75">75</option>
                <option value="80">80</option>
              </Select>

                
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0 ">
              
              <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Your Permanent Division"
                  />
                </div>
                <Select
                className="block w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
                {...register("permanentDivision", { required: true })}
                name="permanentDivision"
                id="countries"
                defaultValue=""
                required
              >
                <option disabled value="">
                  Permanent  Division name
                </option>
                <option>Dhaka</option>
                <option>Chattagram</option>
                <option>Rangpur</option>
                <option>Barisal</option>
                <option>Khulna</option>
                <option>Mymensingh</option>
                <option>Sylhet</option>
              </Select>

                
              </div>

           

              <div className="w-full">
                <div className="mb-2">
                  <Label
                    htmlFor="countries"
                    className="text-white/90"
                    value="Select Your Present Division"
                  />
                </div>
                   <Select
                className="block w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
                {...register("presentDivision", { required: true })}
                name="presentDivision"
                id="countries"
                defaultValue=" "
                required
              >
                <option disabled value="">
                  Present Division name
                </option>
                <option>Dhaka</option>
                <option>Chattagram</option>
                <option>Rangpur</option>
                <option>Barisal</option>
                <option>Khulna</option>
                <option>Mymensingh</option>
                <option>Sylhet</option>
              </Select>

                
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
              <FloatingLabel
                {...register("mobileNumber", { required: true })}
                name="mobileNumber"
                type="number"
                className="text-black/90 "
                variant="filled"
                label="Mobile Number"
              />
              <FloatingLabel
                {...register("email", { required: true })}
                name="email"
                className="text-black/90 "
                variant="filled"
                defaultValue={user?.email}
                readOnly
                label="Email"
              />
            </section>
            <Button
              type="submit"
              className="w-full bg-pink-500 text-white my-5 "
            >
              Publish Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBiodata;
