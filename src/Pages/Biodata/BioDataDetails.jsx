import { Button, HR, Table } from "flowbite-react";
import React from "react";
import { GrFavorite } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import AllBioDataCard from "../../Shared/AllBioDataCard";
import BannarAll from "../../Shared/BannarAll";
import Title from "../../Shared/Title";


function BioDataDetails({bio}) {
console.log(bio)
  const { 
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
    biodataId} = bio
  return (
    <div className="font-bannerFont ">
      <BannarAll bannerHeading={`BioData Details`} />
      <div className="my-10 border-2 py-10 max-w-7xl mx-auto bg-pink-200 rounded-xl">
        <section className="flex flex-col justify-center items-center my-2  max-w-sm py-5 mx-auto bg-pink-400 rounded-tr-full  rounded-bl-full rounded-br-full shadow-2xl shadow-pink-600">
          <img
            className="w-56 h-56 rounded-xl "
            src={bio?.imageLink}
            alt=""
          />
        </section>
        {/* image section ends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center  gap-5 p-5">
          {/* left */}
          <div className="bg-pink-400 rounded-lg py-5 px-5 md:px-20">
            <h1 className="text-2xl my-3 text-center text-pink-950">
              Bio data id : {bio?.biodataId}
            </h1>
            <HR />
            <div className="overflow-x-auto">
              <Table hoverable>
                <Table.Body className="divide-y">
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Biodata Type</Table.Cell>
                    <Table.Cell>{bio?.genderType} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Name</Table.Cell>
                    <Table.Cell> {bio?.name} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Date of birth</Table.Cell>
                    <Table.Cell> {bio?.date} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Height</Table.Cell>
                    <Table.Cell> {bio?.height} " </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Weight</Table.Cell>
                    <Table.Cell> {bio?.weight} KG </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Age</Table.Cell>
                    <Table.Cell> {bio?.age} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Occupation</Table.Cell>
                    <Table.Cell> {bio?.occupation} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Skin color</Table.Cell>
                    <Table.Cell> {bio?.skinColor} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Father's Name</Table.Cell>
                    <Table.Cell> {bio?.fathersName} </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
                    <Table.Cell className=" ">Mother's Name</Table.Cell>
                    <Table.Cell> {bio?.mothersName} Name</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>

          {/* right */}
          <div className="bg-pink-300 rounded-lg py-5 px-5 md:px-20">

          <Table hoverable>
        <Table.Body className="divide-y">
          <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
            <Table.Cell className=" ">
            Expected Partner Age 
            </Table.Cell>
            <Table.Cell>{bio?.partnerAge}</Table.Cell>
          </Table.Row>
          <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
            <Table.Cell className=" ">
            Expected Partner Height 
            </Table.Cell>
            <Table.Cell> {bio?.partnerHeight} "</Table.Cell>
          </Table.Row>
          <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
            <Table.Cell className=" ">
            Expected Partner Weight 
            </Table.Cell>
            <Table.Cell> {bio?.partnerWeight}  KG </Table.Cell>
          </Table.Row>

          <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
            <Table.Cell className=" ">
            Permanent Division
            </Table.Cell>
            <Table.Cell> {bio?.permanentDivision}  </Table.Cell>
          </Table.Row>

          <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
            <Table.Cell className=" ">
           Present Division 
            </Table.Cell>
            <Table.Cell> {bio?.presentDivision}  </Table.Cell>
          </Table.Row>

 {/* contact info */}
          <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
            <Table.Cell className=" ">
            Contact Email 
            </Table.Cell>
            <Table.Cell> {bio?.email} </Table.Cell>
          </Table.Row>

          <Table.Row className=" hover:bg-transparent text-pink-900 font-medium text-lg">
            <Table.Cell className=" ">
            Mobile Number
            </Table.Cell>
            <Table.Cell>+88 {bio?.mobileNumber} </Table.Cell>
          </Table.Row>


        </Table.Body>
      </Table>



<div className="flex justify-center items-center my-5">
<Button.Group outline>
        <Button color="gray">
          <GrFavorite className="mr-3 h-4 w-4" />
         Add To Favorite
        </Button>
        <Button color="gray">
          <MdContactPhone className="mr-3 h-4 w-4" />
          Request Contact
        </Button>
       
      </Button.Group>
</div>
  

          </div>
        </div>
      </div>
         {/* similar biodata */}
         <div className="my-16 px-5">
            <Title heading={`Similar Biodata`}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
<AllBioDataCard/>
<AllBioDataCard/>
<AllBioDataCard/>
      </div>
         </div>
         
    </div>
  );
}

export default BioDataDetails;
