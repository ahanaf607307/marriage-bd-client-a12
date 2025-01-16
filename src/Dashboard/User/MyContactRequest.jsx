import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import React from "react";
import { FaCheckCircle, FaTimes, FaTimesCircle, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosPublic from "../../Hook/UseAxiosPublic";
import Title from "../../Shared/Title";
import { FaDiagramSuccessor } from "react-icons/fa6";

function MyContactRequest() {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: contacts = [], refetch } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/contact-request/${user.email}`);
      return res.data;
    },
  });


  const handleDeleteContact = (_id) => {
    console.log(_id);
    axiosPublic
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
  };

  console.log(contacts);
  return (
    <div className="font-bannerFont  mx-2">
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
                <Table.Cell>{contact?.name}</Table.Cell>
                <Table.Cell>{contact?.biodataId}</Table.Cell>
                <Table.Cell>{contact?.contactStatus}</Table.Cell>
                <Table.Cell>
                  {
                    contact?.contactStatus === "approved" ? <>
                    {contact?.mobileNumber}
                    </> : 'pending request'
                  }
                </Table.Cell>
                <Table.Cell>
                {
                    contact?.contactStatus === "approved" ? <>
                   {contact?.email}
                    </> : 'pending request'
                  }
                </Table.Cell>

                <Table.Cell>
                {
                    contact?.contactStatus === "approved" ? <>
                   <FaCheckCircle className="text-lime-500 text-xl" />
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
