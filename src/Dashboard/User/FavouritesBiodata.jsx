import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import React from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../Firebase/UseAuth/useAuth";

import useAxiosSecure from "../../Hook/useAxiosSecure";
import BannarAll from "../../Shared/BannarAll";
import { Helmet } from "react-helmet-async";

function FavouritesBiodata() {
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();
  const { data: favorite = [], refetch } = useQuery({
    queryKey: ["favorites"],
    enabled: !!user?.email && !!localStorage.getItem(`access-token`),
    queryFn: async () => {
      const res = await axiosSecure.get(`/favorite/${user.email}`);
      return res.data;
    },
  });
  console.log("favorite user -->", favorite);

  const handleDeleteFavorite = (_id) => {
    console.log("fav del id ---> ", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/favorite/${_id}`)
          .then((res) => {
            console.log("delete form favorite ", res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Delete Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          
          })
          .catch((err) => {
            console.log("error form delete favorite ---> ", err);
          });
      }
    });
  };

  return (
    <div>
       <Helmet>
                    <title>Favorite Biodata | marriageBd</title>
                  </Helmet>
      <BannarAll bannerHeading={`See your favorite !`} />
      <div className="overflow-x-auto my-10 px-5 md:px-10">
        <Table>
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Candidate Name</Table.HeadCell>
            <Table.HeadCell>Biodata Id</Table.HeadCell>
            <Table.HeadCell>Permanent Address</Table.HeadCell>
            <Table.HeadCell>Occupation</Table.HeadCell>
            <Table.HeadCell>Delete Favorite</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {favorite?.map((fav , index) => (
              <Table.Row
                key={fav?._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{fav?.name}</Table.Cell>
                <Table.Cell>{fav?.biodataId}</Table.Cell>
                <Table.Cell>{fav?.permanentDivision}</Table.Cell>
                <Table.Cell>{fav?.occupation}</Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => handleDeleteFavorite(fav?._id)}
                    className="bg-pink-700 "
                    size="md"
                  >
                    {" "}
                    <FaTrash />{" "}
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default FavouritesBiodata;
