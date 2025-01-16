import { useQuery } from "@tanstack/react-query";
import { Button, HR, Table } from "flowbite-react";
import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import BannarAll from "../../Shared/BannarAll";
import Title from "../../Shared/Title";
import BioDataCard from "./BioDataCard";

function BioDataDetails() {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();
  const { id } = useParams();
  const { data: details = [] } = useQuery({
    queryKey: ["details"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/details/${id}`);
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
    email,
    biodataId,
  } = details;

  const handleFavorite = (id) => {
   
    

    console.log("favorite --> ", id);
    const favUserEmail = user.email
    const favoriteInfo = {
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
      biodataId,
      favUserEmail ,
    };
    axiosPublic
      .post("/favorite", favoriteInfo)
      .then((res) => {
        console.log("post favorite --->", res.data);
        
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add to favorite",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log("error from favorite ->", err));
  };

  const handleRequestContact = (id) => {
    const contactUserEmail = user.email
    const contactStatus = 'pending'
    const contactInfo = {
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
      biodataId,
      contactUserEmail,
contactStatus,
    };
    console.log("request contact -----> ", id);
    axiosPublic.post('/contact-request' ,contactInfo )
    .then(res => {
      console.log('contact request from ,' , res.data)
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Request Sent",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }).catch(err=>console.log('error from contact req ->' , err))
  };
  return (
    <div className="font-bannerFont ">
      <BannarAll bannerHeading={`BioData Details`} />
      <div className="my-10 border-2 py-10 max-w-7xl mx-auto bg-pink-200 rounded-xl">
        <section className="flex flex-col justify-center items-center my-2  max-w-sm py-5 mx-auto bg-pink-400 rounded-tr-full  rounded-bl-full rounded-br-full shadow-2xl shadow-pink-600">
          <img className="w-56 h-56 rounded-xl " src={imageLink} alt="" />
        </section>
        {/* image section ends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center  gap-5 p-2 md:p-5">
          {/* left */}
          <div className="bg-pink-400 rounded-lg py-5 p-2 md:px-5 ">
            <h1 className="text-2xl my-3 text-center text-pink-950">
              Bio data id : {biodataId}
            </h1>
            <HR />
            <div className="overflow-x-auto">
              <Table hoverable>
                <Table.Body className="divide-y">
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Biodata Type</Table.Cell>
                    <Table.Cell>{genderType} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Name</Table.Cell>
                    <Table.Cell> {name} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Date of birth</Table.Cell>
                    <Table.Cell> {date} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Height</Table.Cell>
                    <Table.Cell> {height} " </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Weight</Table.Cell>
                    <Table.Cell> {weight} KG </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Age</Table.Cell>
                    <Table.Cell> {age} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Occupation</Table.Cell>
                    <Table.Cell> {occupation} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Skin color</Table.Cell>
                    <Table.Cell> {skinColor} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Father's Name</Table.Cell>
                    <Table.Cell> {fathersName} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Mother's Name</Table.Cell>
                    <Table.Cell> {mothersName} Name</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>

          {/* right */}
          <div className="bg-pink-300 rounded-lg py-5 p-2 md:px-5 ">
            <div className="overflow-x-auto">
              <Table hoverable>
                <Table.Body className="divide-y">
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Expected Partner Age</Table.Cell>
                    <Table.Cell>{partnerAge}</Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">
                      Expected Partner Height
                    </Table.Cell>
                    <Table.Cell> {partnerHeight} "</Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">
                      Expected Partner Weight
                    </Table.Cell>
                    <Table.Cell> {partnerWeight} KG </Table.Cell>
                  </Table.Row>

                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Permanent Division</Table.Cell>
                    <Table.Cell> {permanentDivision} </Table.Cell>
                  </Table.Row>

                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Present Division</Table.Cell>
                    <Table.Cell> {presentDivision} </Table.Cell>
                  </Table.Row>

                  {/* contact info */}
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Contact Email</Table.Cell>
                    <Table.Cell> {email} </Table.Cell>
                  </Table.Row>

                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Mobile Number</Table.Cell>
                    <Table.Cell>+88 {mobileNumber} </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
            <div className="flex justify-center items-center my-5 gap-x-5">
              {
                user?.email === email ? '' : <Button
                onClick={() => handleFavorite(_id)}
                className="bg-pink-500"
              >
                Add to favorite
              </Button>
              }
              {
                 user?.email === email ? <p className="border-2 border-pink-500 px-3 py-1 rounded-xl">'You Created This Biodata 😍 Thank You !'</p> :<Button
                onClick={() => handleRequestContact(_id)}
                className="bg-pink-500"
              >
                {" "}
                Request Contact Information{" "}
              </Button>
              }
              
            </div>
          </div>
        </div>
      </div>
      {/* similar biodata */}
      <div className="my-16 px-5">
        <Title heading={`Similar Biodata`} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <BioDataCard />
          <BioDataCard />
          <BioDataCard />
        </div>
      </div>
    </div>
  );
}

export default BioDataDetails;
