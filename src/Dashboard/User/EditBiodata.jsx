import { Button, FloatingLabel, Select } from "flowbite-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import BannarAll from "../../Shared/BannarAll";


function EditBiodata() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic()
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
    };

    axiosPublic.post('/biodatas' , bioDataInfo)
    .then(res => {
      console.log("bio data post form edit bio data",res.data)
      if(res.data.insertedId ){
        Swal.fire({
          title: "Biodata Publish Successfully !",
          icon: "success",
          draggable: true
        });
        reset()
      }
    })
    .catch(err => {
      console.log('error from edit bio data --->' , err)
    })

    console.log(bioDataInfo);
  };

  return (
    <div>
      <BannarAll bannerHeading={`"Build Your Matrimonial Profile"`} />

      <div className=" max-w-[90%]  xl:max-w-[80%] mx-auto my-10 bg-pink-400 p-5 md:p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-white/80 font-semibold font-bannerFont"
        >
          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <FloatingLabel
              {...register("name", { required: true })}
              name="name"
                type="text"
              className="text-white/80"
              variant="standard"
              label="Name"
            />
            <FloatingLabel
              {...register("imageLink", { required: true })}
              name="imageLink"
                type="url"
              className="text-white/80"
              variant="standard"
              label="Profile Image Link"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0 ">
           
          <DatePicker
          className="border px-3 text-black/90  py-2 rounded-xl w-full cursor-pointer "
          type='date'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

            <Select
              {...register("genderType", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Select Gender Type
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <FloatingLabel
              {...register("height", { required: true })}
              name="height"
                type="text"
              className="text-white/80"
              variant="standard"
              label="Height"
            />
            <FloatingLabel
              {...register("weight", { required: true })}
              name="weight"
                type="number"
              className="text-white/80"
              variant="standard"
              label="Weight"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <FloatingLabel
              {...register("age", { required: true })}
              name="age"
                type="number"
              className="text-white/80"
              variant="standard"
              label="Age"
            />
            <FloatingLabel
              {...register("occupation", { required: true })}
              name="occupation"
                type="text"
              className="text-white/80"
              variant="standard"
              label="Occupation"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <FloatingLabel
              {...register("skinColor", { required: true })}
              name="skinColor"
              type="text"
              className="text-white/80"
              variant="standard"
              label="Skin color"
            />
            <FloatingLabel
              {...register("fathersName", { required: true })}
              name="fathersName"
              type="text"
              className="text-white/80"
              variant="standard"
              label="Fathers Name"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <FloatingLabel
              {...register("partnerAge", { required: true })}
              name="partnerAge"
              type="number"
              className="text-white/80"
              variant="standard"
              label="Expected Partner Age"
            />
            <FloatingLabel
              {...register("mothersName", { required: true })}
              name="mothersName"
              type="text"
              className="text-white/80"
              variant="standard"
              label="Mothers Name"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <FloatingLabel
              {...register("partnerHeight", { required: true })}
              name="partnerHeight"
              type="text"
              className="text-white/80"
              variant="standard"
              label="Expected Partner Height"
            />
            <FloatingLabel
              {...register("partnerWeight", { required: true })}
              name="partnerWeight"
              type="number"
              className="text-white/80"
              variant="standard"
              label="Expected Partner Weight"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0 ">
            <Select
              {...register("permanentDivision", { required: true })}
              name="permanentDivision"
              id="countries"
              defaultValue=""
              required
            >
              <option disabled value="">
                Permanent Division name
              </option>
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
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5 my-7 gap-y-7 lg:gap-y-0">
            <FloatingLabel
              {...register("mobileNumber", { required: true })}
              name="mobileNumber"
              type="number"
              className="text-white/80"
              variant="standard"
              label="Mobile Number"
            />
            <FloatingLabel
              {...register("email", { required: true })}
              name="email"
              className="text-white/80"
              variant="standard"
              defaultValue={user?.email}
              readOnly
              label="Email"
            />
          </section>
          <Button type="submit" className="w-full bg-pink-500 text-white my-5 ">
          Publish Now
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditBiodata;
