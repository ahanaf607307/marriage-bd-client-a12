import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Title from "../../Shared/Title";


import { Rating } from "@mui/material";
import '@smastrom/react-rating/style.css';
import { Select } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Loading from "../../Loading/Loading";

function ShowAllSuccessStory() {

  const axiosPublic = useAxiosPublic()
  const [sortOrder, setSortOrder] = useState("Ascending");
  const { data: successAll = [] , isLoading } = useQuery({
    queryKey: ["successAll"],
    queryFn: async () => {
      const res = await axiosPublic.get("/successStory");
      return res.data;
    },
  });



  const storiesWithDate = successAll.map((story) => ({
    ...story,
    dateOnly: new Date(story?.marriageDate).toISOString().split("T")[0],
  }));

  const sortedStory = storiesWithDate.sort((a, b) => {
    const dateA = new Date(a.dateOnly);
    const dateB = new Date(b.dateOnly);

    return sortOrder === "Ascending"
      ? dateA - dateB
      : dateB - dateA;
  });
 
  console.log("successStory------", successAll);
  return (
  <>
 <div className="dark:bg-gray-900 bg-white transition-all duration-300">
  <Helmet>
    <title>All Success Story | MarriageBD</title>
  </Helmet>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-bannerFont">
    
    {/* Header Section */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
        💖 Success Stories That Inspire
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
        Every match is a new journey of <span className="text-pink-500 font-semibold">love, trust</span>, and togetherness. Here are a few beautiful stories made possible by <span className="text-blue-500 font-semibold">MarriageBD</span>.
      </p>
    </div>

    {/* Sort Section */}
    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-8">
      <h3 className="text-lg font-medium dark:text-white">
        Sort by <span className="text-pink-500 font-semibold">"Marriage Date"</span>
      </h3>
      <Select
        defaultValue="Ascending"
        onChange={(e) => setSortOrder(e.target.value)}
        className="w-48"
      >
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </Select>
    </div>

    {/* Grid Cards */}
    {isLoading ? (
      <Loading />
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedStory?.map((suc) => (
          <Link
            to={`/successStoryDetails/${suc?._id}`}
            key={suc?._id}
            className="group relative overflow-hidden rounded-3xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <img
              className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              src={suc?.coupleImageLink}
              alt="couple"
            />
            
            {/* Date Badge */}
            <span className="absolute top-3 right-3 bg-pink-600 text-white text-sm px-3 py-1 rounded-full shadow-md font-semibold z-10">
              {suc?.marriageDate.slice(0, 10)}
            </span>

            {/* Content */}
            <div className="p-5 space-y-3">
              {/* Rating */}
              <div className="flex items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={suc?.rating}
                  precision={0.5}
                  readOnly
                />
              </div>

              {/* Story Snippet */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {suc?.storyDetails.slice(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    )}
  </div>
</div>

<section className="bg-gradient-to-r from-pink-500 to-purple-600 py-20 text-white text-center mb-20">
  <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
  <p className="text-lg mb-6">Join thousands of happy members who’ve found their soulmate.</p>
<Link to='/dashboard/editBiodata'> <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all">
    Create Your Profile
  </button></Link>
</section>

  </>
  );
}

export default ShowAllSuccessStory;
