import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAuth from '../../Firebase/UseAuth/useAuth';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import TitleDashboard from '../../Shared/TitleDashboard';

function ContactRequest() {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: contacts = [], refetch } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/contact-request`);
      return res.data;
    },
  });

   const handleApproveRequest = (_id) => {
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approve"
      }).then((result) => {
        if (result.isConfirmed) {
         axiosPublic
        .patch(`/contact-request/${_id}`)
        .then((res) => {
          console.log("Approved Request ", res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Approved Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          console.log("error form approved contact request contact ---> ", err);
        });
        }
      });
      
    };
  
  return (
    <div className="font-bannerFont  mx-2">
    <div className='py-10'>
    <TitleDashboard heading={`Approved contact request`} />
    </div>
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Requester Name</Table.HeadCell>
          <Table.HeadCell>Requester Email</Table.HeadCell>
          <Table.HeadCell>Biodata Id</Table.HeadCell>
          <Table.HeadCell> Status</Table.HeadCell>
          <Table.HeadCell> Approved contact request</Table.HeadCell>

        </Table.Head>
        <Table.Body className="divide-y">
          {contacts.map((contact, index) => (
            <Table.Row
              key={contact?._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{contact?.requesterName}</Table.Cell>
              <Table.Cell>{contact?.requesterEmail}</Table.Cell>
              <Table.Cell>{contact?.biodataIds}</Table.Cell>
              <Table.Cell>{contact?.status}</Table.Cell>
              <Table.Cell>
                {
                  contact?.status === "approved" ? <>
                   <FaCheckCircle display={true} className="text-lime-500 text-2xl" />
                  </> : <button
                  onClick={() => handleApproveRequest(contact?._id)}
                  className=" text-white/90 font-semibold hover:scale-110 bg-pink-500 rounded-xl px-3 py-2 duration-100"
                  size="md"
                >
                  {" "}
                  Approve Request
                </button>
                }
              </Table.Cell>
            
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  </div>
  )
}

export default ContactRequest
