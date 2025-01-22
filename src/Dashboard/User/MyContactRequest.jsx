import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import React from "react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Title from "../../Shared/Title";
import { Helmet } from "react-helmet-async";

function MyContactRequest() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: contacts = [], refetch } = useQuery({
    queryKey: ["contacts"],
    enabled: !!user?.email && !!localStorage.getItem(`access-token`),
    queryFn: async () => {
      const res = await axiosSecure.get(`/contact-request/${user.email}`);
      return res.data;
    },
  });


  const handleDeleteContact = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
      .delete(`/contact-request/${_id}`)
      .then((res) => {
        console.log("delete form contact ", res.data);
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
        console.log("error form delete contact ---> ", err);
      });
      }
    });
   
  };

  console.log(contacts);
  return (
    <div className="font-bannerFont  mx-2">
       <Helmet>
                    <title>My Contact  | marriageBd</title>
                  </Helmet>
      <Title heading={`My Contact Request`} />
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Biodata Id</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Mobile No</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell> Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {contacts.map((contact, index) => (
              <Table.Row
                key={contact?._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{contact?.bioDataOwnerName}</Table.Cell>
                <Table.Cell>{contact?.biodataIds}</Table.Cell>
                <Table.Cell>{contact?.status}</Table.Cell>
                <Table.Cell>
                  {
                    contact?.status === "approved" ? <>
                    {contact?.mobileNumbers}
                    </> : 'pending request'
                  }
                </Table.Cell>
                <Table.Cell>
                {
                    contact?.status === "approved" ? <>
                   {contact?.bioDataOwnerEmail}
                    </> : 'pending request'
                  }
                </Table.Cell>

                <Table.Cell>
                {
                    contact?.status === "approved" ? <>
                   <FaCheckCircle className="text-lime-500 text-2xl" />
                    </> : <Button
                    onClick={() => handleDeleteContact(contact?._id)}
                    className="bg-pink-700 "
                    size="md"
                  >
                    {" "}
                    <FaTrash />{" "}
                  </Button>
                  }
                  
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default MyContactRequest;
