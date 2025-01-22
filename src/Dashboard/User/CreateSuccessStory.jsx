import { FloatingLabel, Textarea } from "flowbite-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Title from "../../Shared/Title";

function CreateSuccessStory() {
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const selfBiodataId = data.selfBiodataId;
    const partnerBiodataId = data.partnerBiodataId;
    const coupleImageLink = data.coupleImageLink;
    const marriageDate = startDate;
    const rating = data.rating;
    const storyDetails = data.storyDetails;
    const storyInfo = {
      selfBiodataId,
      partnerBiodataId,
      coupleImageLink,
      marriageDate,
      rating,
      storyDetails,
    };

    console.log("success stroy", storyInfo);

    axiosSecure
      .post("/successStory", storyInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Thank You !",
            text: "Story Added Successfully",
            icon: "success",
          });
          reset()
        }
      })
      .catch((error) => {
        console.log("error from success stroy", error);
      });
  };
  return (
    <div>
      <Title heading={`Create Success Story`} title={``} />
      <div>
        <div className="flex flex-col justify-center items-center w-full md:min-w-[500px] max-w-xl mx-auto backdrop-blur-xl bg-pink-600/20 p-4 md:p-10 rounded-xl mt-8 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-4 "
          >
            <FloatingLabel
              {...register("selfBiodataId", { required: true })}
              name="selfBiodataId"
              type="number"
              className="w-full"
              variant="filled"
              label="Self Self Biodata Id"
            />

            <FloatingLabel
              {...register("partnerBiodataId", { required: true })}
              type="number"
              name="partnerBiodataId"
              className="w-full"
              variant="filled"
              label="Partner Biodata id"
            />

            <FloatingLabel
              {...register("coupleImageLink", { required: true })}
              type="url"
              name="coupleImageLink"
              className="w-full"
              variant="filled"
              label="Couple Image Link"
            />
            <FloatingLabel
              {...register("rating", { required: true })}
              type="number"
              name="rating"
              className="w-full"
              variant="filled"
              label="Rate us Out of 5"
            />
            <DatePicker
              className=" border-b-2 border-b-white border-t-0 border-l-0 border-r-0 bg-transparent text-white/90 "
              type="date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />

            <Textarea
              {...register("storyDetails", { required: true })}
              name="storyDetails"
              className="w-full"
              placeholder="Your Story Details..."
              required
              rows={4}
            />

            <button
              className="text-white/90 font-semibold hover:scale-105 bg-pink-500 rounded-xl px-4 py-3 duration-100"
              type="submit"
            >
              Add Story{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateSuccessStory;
