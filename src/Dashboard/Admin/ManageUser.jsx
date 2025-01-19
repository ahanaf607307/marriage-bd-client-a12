import { useQuery } from "@tanstack/react-query";
import { Button, FloatingLabel, Table } from "flowbite-react";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import TitleDashboard from "../../Shared/TitleDashboard";

function ManageUser() {
  const axiosSecure = useAxiosSecure();
  const { loading } = useAuth();
  const [search, setSearch] = useState("");

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", search],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?search=${search}`);
      return res.data;
    },
  });
  console.log(users);

  const handleMakeAdmin = (id) => {
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
        axiosSecure
          .patch(`/users/admin/${id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              console.log(res.data);
              Swal.fire({
                title: "Done!",
                text: "Make Admin Successfull",
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
    <div className=" md:px-10 bg-banner1 bg-cover bg-center min-h-screen">
      <div className="py-10">
        <TitleDashboard heading={`Manage User `} />
      </div>
      <section>
        <FloatingLabel
          onKeyUp={(e) => setSearch(e.target.value)}
          className="w-full"
          variant="filled"
          label="Search"
        />
      </section>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>User name</Table.HeadCell>
            <Table.HeadCell>User email</Table.HeadCell>
            <Table.HeadCell> Admin</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users?.map((user, index) => (
              <Table.Row
                key={user?._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user?.name}
                </Table.Cell>
                <Table.Cell>{user?.email}</Table.Cell>
                <Table.Cell>
                  {user?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <Button onClick={() => handleMakeAdmin(user?._id)}>
                      Make Admin
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

export default ManageUser;
