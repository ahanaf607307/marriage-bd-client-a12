import { Button, FloatingLabel, Select } from "flowbite-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";

import { useQuery } from "@tanstack/react-query";
import BannarAll from "../../Shared/BannarAll";

function UpdateBiodata() {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [startDate, setStartDate] = useState(new Date());


  const { data: bioData = [] , refetch } = useQuery({
    queryKey: ["bioData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bioDatas/${user.email}`);
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
  console.log('update biodata',bioData)
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

    axiosPublic
      .patch(`/biodatas-update/${_id}`, bioDataInfo)
      .then((res) => {
        console.log('hello')
        console.log("bio data update form edit bio data", res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Biodata Updated Successfully !",
            icon: "success",
            draggable: true,
          });
          refetch()
        }
      })
      .catch((err) => {
        console.log("error from update bio data --->", err);
      });

    console.log(bioDataInfo);
  };

  return (
    // Edit Biodata

    <div>
      <BannarAll bannerHeading={`"Update Your Matrimonial Profile"`} />

      <div className=" max-w-[90%]  xl:max-w-[80%] mx-auto my-10 bg-pink-400 p-5 md:p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-black/80 font-semibold font-bannerFont"
        >
          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <FloatingLabel
              {...register("name", { required: true })}
              name="name"
              defaultValue={name}
              type="text"
              className="text-black/80"
              variant="filled"
              label="Name"
            />
            <FloatingLabel
              {...register("imageLink", { required: true })}
              name="imageLink"
              defaultValue={imageLink}
              type="url"
              className="text-black/80"
              variant="filled"
              label="Profile Image Link"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0 ">
            <DatePicker
              className="border px-3 text-black/90  py-2 rounded-xl w-full cursor-pointer "
              defaultValue={date}
              type="date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />

            <Select
              {...register("genderType", { required: true })}

              defaultValue={genderType}
            >
              
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <Select
              {...register("height", { required: true })}
              name="height"
              defaultValue={height}
              
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
            <Select
              {...register("weight", { required: true })}
              name="weight"
              defaultValue={weight}
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
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <Select
              {...register("age", { required: true })}
              name="age"
              defaultValue={age}
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

            <Select
              {...register("occupation", { required: true })}
              name="occupation"
              defaultValue={occupation}
            >
              
              <option value="Job Holder">Job Holder</option>
              <option value="Studeng">Studeng</option>
              <option value="Engneer">Engneer</option>
              <option value="Doctor">Doctor</option>
              <option value="Developer">Developer</option>
              <option value="Softwere Engineer">Softwere Engineer</option>
            </Select>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <Select
              {...register("skinColor", { required: true })}
              name="skinColor"
              defaultValue={skinColor}
            >
             
              <option value="Fair">Fair</option>
              <option value="Medium">Medium</option>
              <option value="Olive ">Olive </option>
              <option value="Dark">Dark</option>
            </Select>
            <FloatingLabel
              {...register("fathersName", { required: true })}
              name="fathersName"
              defaultValue={fathersName}
              type="text"
              className="text-black/80"
              variant="filled"
              label="Fathers Name"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <Select
              {...register("partnerAge", { required: true })}
              name="partnerAge"
              defaultValue={partnerAge}
              
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

            <FloatingLabel
              {...register("mothersName", { required: true })}
              name="mothersName"
              defaultValue={mothersName}
              type="text"
              className="text-black/80"
              variant="filled"
              label="Mothers Name"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <Select
              {...register("partnerHeight", { required: true })}
              name="partnerHeight"
              defaultValue={partnerHeight}
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

            <Select
              {...register("partnerWeight", { required: true })}
              name="partnerWeight"
              defaultValue={partnerWeight}
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
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0 ">
            <Select
              {...register("permanentDivision", { required: true })}
              name="permanentDivision"
              id="countries"
              defaultValue={permanentDivision}
            >
              
              <option>Dhaka</option>
              <option>Chattagram</option>
              <option>Rangpur</option>
              <option>Barisal</option>
              <option>Khulna</option>
              <option>Mymensingh</option>
              <option>Sylhet</option>
            </Select>
            <Select
              {...register("presentDivision", { required: true })}
              name="presentDivision"
              id="countries"
              defaultValue={presentDivision}
            >
              
              <option>Dhaka</option>
              <option>Chattagram</option>
              <option>Rangpur</option>
              <option>Barisal</option>
              <option>Khulna</option>
              <option>Mymensingh</option>
              <option>Sylhet</option>
            </Select>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <FloatingLabel
              {...register("mobileNumber", { required: true })}
              name="mobileNumber"
              defaultValue={mobileNumber}
              type="number"
              className="text-black/80"
              variant="filled"
              label="Mobile Number"
            />
            <FloatingLabel
              {...register("email", { required: true })}
              name="email"
              className="text-black/80"
              variant="filled"
              defaultValue={user?.email}
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
