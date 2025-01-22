


import { Button, FloatingLabel, Label, Select } from "flowbite-react";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Firebase/UseAuth/useAuth";

import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import BannarAll from "../../Shared/BannarAll";

function UpdateBiodata() {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());

  const { data: bioData = [], refetch } = useQuery({
    queryKey: ["bioData"],
    enabled: !!user?.email && !!localStorage.getItem(`access-token`),
    queryFn: async () => {
      const res = await axiosSecure.get(`/bioDatas/${user.email}`);
      return res.data;
    },
  });
  const {
    _id,
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
  } = bioData;
  console.log("update biodata", bioData);


 

  // update form 
  const {
    register,
    handleSubmit,
   setValue,
    formState: { errors },
  } = useForm({
    defaultValues : bioData,
  });
  const onSubmit = (data) => {
    const name = data.name;
    const imageLink = data.imageLink;
    const date = startDate;
    const genderType = data.genderType;
    const height = data.height;
    const weight = data.weight;
    const age = data.age;
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
      _id,
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
      .patch(`/biodatas-update/${_id}`, bioDataInfo)
      .then((res) => {
        console.log("hello");
        console.log("bio data update form edit bio data", res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Biodata Updated Successfully !",
            icon: "success",
            draggable: true,
          });
          refetch();
        }
      })
      .catch((err) => {
        console.log("error from update bio data --->", err);
      });

    console.log(bioDataInfo);
  };

  useEffect(() => {
    if (bioData) {
      setValue("name", bioData.name || "");
      setValue("imageLink", bioData.imageLink || "");
      setValue("genderType", bioData.genderType || "Male");
      setValue("height", bioData.height || "");
      setValue("weight", bioData.weight || "");
      setValue("age", bioData.age || "");
      setValue("occupation", bioData.occupation || "");
      setValue("skinColor", bioData.skinColor || "");
      setValue("fathersName", bioData.fathersName || "");
      setValue("mothersName", bioData.mothersName || "");
      setValue("partnerAge", bioData.partnerAge || "");
      setValue("partnerHeight", bioData.partnerHeight || "");
      setValue("partnerWeight", bioData.partnerWeight || "");
      setValue("permanentDivision", bioData.permanentDivision || "Dhaka");
      setValue("presentDivision", bioData.presentDivision || "Dhaka");
      setValue("mobileNumber", bioData.mobileNumber || "");
      setValue("email", user?.email || "");
    }
  }, [bioData, setValue, user?.email]);

  return (
    <div>
      <Helmet>
        <title>Update Biodata</title>
      </Helmet>
      <BannarAll bannerHeading={`"Update Your Matrimonial Profile"`} />

      <div className=" max-w-[90%]  xl:max-w-[80%] mx-auto my-10 bg-pink-400 p-5 md:p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-black/80 font-semibold font-bannerFont"
        >
          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <FloatingLabel
              {...register("name" )}
              name="name"
              // defaultValue={bioData?.name}
              type="text"
              className="text-black/80"
              variant="filled"
              label="Name"
            />

            <FloatingLabel
              {...register("imageLink" )}
              name="imageLink"
              // defaultValue={bioData?.imageLink}
              type="url"
              className="text-black/80"
              variant="filled"
              label="Profile Image Link"
            />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0 ">
            <div className="w-full">
              <div className="mb-2">
                <Label htmlFor="countries" className="text-white/90" value="Select Date Of Birth" />
              </div>
              <DatePicker
                className=" border-b-2 border-t-0 border-r-0 border-l-0 border-b-white/90  px-3 text-white/90  py-2  w-[100%] cursor-pointer bg-transparent "
                // defaultValue={bioData?.date}
                type="date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="w-full">
              <div className="mb-2">
                <Label htmlFor="countries" className="text-white/90" value="Select Your Gender Type" />
              </div>
              <Select
              {...register("genderType" )}
              // defaultValue={bioData?.genderType}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
            </div>

            
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
          <div className="w-full">
              <div className="mb-2">
                <Label htmlFor="countries" className="text-white/90" value="Select Your Height" />
              </div>
              <Select
              {...register("height" )}
              name="height"
              // defaultValue={bioData?.height}
            >
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
                <Label htmlFor="countries" className="text-white/90" value="Select Your Weight" />
              </div>
             <Select
              {...register("weight" )}
              name="weight"
              // defaultValue={bioData?.weight}
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
                <Label htmlFor="countries" className="text-white/90" value="Select Your Age" />
              </div>
              <Select
              {...register("age" )}
              name="age"
              // defaultValue={bioData?.age}
            >
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
                <Label htmlFor="countries" className="text-white/90" value="Select Your Occupation" />
              </div>
              <Select
              {...register("occupation" )}
              name="occupation"
              // defaultValue={bioData?.occupation}
            >
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
              {...register("fathersName" )}
              name="fathersName"
              // defaultValue={bioData?.fathersName}
              type="text"
              className="text-black/80"
              variant="filled"
              label="Fathers Name"
            />

            <FloatingLabel
              {...register("mothersName" )}
              name="mothersName"
              // defaultValue={bioData?.mothersName}
              type="text"
              className="text-black/80"
              variant="filled"
              label="Mothers Name"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            
            <div className="w-full">
              <div className="mb-2">
                <Label htmlFor="countries" className="text-white/90" value="Select Partner Age You Expect" />
              </div>
              <Select
              {...register("partnerAge" )}
              name="partnerAge"
              // defaultValue={bioData?.partnerAge}
            >
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
                <Label htmlFor="countries" className="text-white/90" value="Select Your Skin Color" />
              </div>
             <Select
              {...register("skinColor" )}
              name="skinColor"
              // defaultValue={bioData?.skinColor}
            >
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
                <Label htmlFor="countries" className="text-white/90" value="Select Partner Height You Expect" />
              </div>
              <Select
              {...register("partnerHeight" )}
              name="partnerHeight"
              // defaultValue={bioData?.partnerHeight}
            >
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
                <Label htmlFor="countries" className="text-white/90" value="Select Partner Weight You Expect" />
              </div>
              <Select
              {...register("partnerWeight" )}
              name="partnerWeight"
              // defaultValue={bioData?.partnerWeight}
            >
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
                <Label htmlFor="countries" className="text-white/90" value="Select Your Permanent Division" />
              </div>
               <Select
              {...register("permanentDivision" )}
              name="permanentDivision"
              id="countries"
              // defaultValue={bioData?.permanentDivision}
            >
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
                <Label htmlFor="countries" className="text-white/90" value="Select Your Present Division " />
              </div>
              <Select
              {...register("presentDivision" )}
              name="presentDivision"
              id="countries"
              // defaultValue={bioData?.presentDivision}
            >
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
              {...register("mobileNumber" )}
              name="mobileNumber"
              // defaultValue={bioData?.mobileNumber}
              type="number"
              className="text-black/80"
              variant="filled"
              label="Mobile Number"
            />
            <FloatingLabel
              {...register("email" )}
              name="email"
              className="text-black/80"
              variant="filled"
              // defaultValue={user?.email}
              readOnly
              label="Email"
            />
          </section>
          <Button type="submit" className="w-full bg-pink-500 text-white my-5 ">
            Update Now
          </Button>
        </form>
      </div>
    </div>
  );
}

export default UpdateBiodata;
