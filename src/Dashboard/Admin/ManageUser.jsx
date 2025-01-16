import { useQuery } from '@tanstack/react-query';
import { Button, Table } from "flowbite-react";
import React from 'react';
import Swal from 'sweetalert2';
import useAdmin from '../../Hook/useAdmin';
import useAxiosSecure from '../../Hook/useAxiosSecure';

function ManageUser() {
const [isAdmin]= useAdmin()
    const axiosSecure = useAxiosSecure()
    const {data : users = [] , refetch} = useQuery({
        queryKey : ['users'],
        queryFn : async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    }) 
console.log(users)

const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`)
    .then(res => {
        refetch()
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
             if(res.data.modifiedCount > 0){
                console.log(res.data)
                Swal.fire({
                    title: "Done!",
                    text: "Make Admin Successfull",
                    icon: "success"
                  });
             }
            }
          });
    })
}
  return (
    <div className='mt-10'>
     <h1 className="text-5xl text-center my-5">Users : {users?.length}</h1>

     <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>
          </Table.HeadCell>
          <Table.HeadCell>User name
          </Table.HeadCell>
          <Table.HeadCell>User email
          </Table.HeadCell>
          <Table.HeadCell> Admin</Table.HeadCell>
          <Table.HeadCell>Premium
          </Table.HeadCell>
       
        </Table.Head>
        <Table.Body className="divide-y">
         {
            users.map((user,index) =>  <Table.Row key={user?._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
               <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                 {user?.name}
                </Table.Cell>
                <Table.Cell>{user?.email}</Table.Cell>
                <Table.Cell>
                   {
                    isAdmin ? 'Admin' :  <Button onClick={()=>handleMakeAdmin(user?._id)}>Make Admin</Button>
                   }
                </Table.Cell>
                <Table.Cell>
                <Button>Make Premium</Button>
                </Table.Cell>
               
              </Table.Row>)
         }
         
        </Table.Body>
      </Table>
    </div>
    </div>
  )
}

export default ManageUser
