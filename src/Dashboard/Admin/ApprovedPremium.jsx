import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Title from "../../Shared/Title";

function ApprovedPremium() {
  const axiosSecure = useAxiosSecure();

  const { data: premiums = [] } = useQuery({
    queryKey: ["premiums"],
    queryFn: async () => {
      const res = await axiosSecure.get("/premiums");
      return res.data;
    },
  });
  const { data: users = [] ,refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log("approvedPremium ", users);

  const handleMakePremium = (id) => {
    console.log(id);
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
        console.log("hello");
        axiosSecure
          .patch(`/users/premium/${id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              console.log(res.data);
              Swal.fire({
                title: "Done!",
                text: "Make Premium Successfull",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((err) => {
            console.log("error from make admin manage user ==> ", err);
          });
      }
    });
  };

  return (
    <div className="px-2 md:px-10">
      <Title heading={`Approved Premium`} />

      <div className="overflow-x-auto ">
        <Table hoverable >
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>User name</Table.HeadCell>
            <Table.HeadCell>User email</Table.HeadCell>
            <Table.HeadCell>Biodata Id</Table.HeadCell>
            <Table.HeadCell>Premium</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {premiums.map((premium, index) => (
              <Table.Row
                key={premium?._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {premium?.name}
                </Table.Cell>
                <Table.Cell>{premium?.requestedUser}</Table.Cell>
                <Table.Cell>{premium?.biodataId}</Table.Cell>
                <Table.Cell>
                  {users.some(
                    (user) =>
                      user?.email === premium?.requestedUser &&
                      user?.role === "premium"
                  ) ? (
                    "Premium"
                  ) : (
                    <Button
                      onClick={() =>
                        handleMakePremium(premium?.requestedUserId)
                      }
                    >
                      Make Premium
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default ApprovedPremium;
