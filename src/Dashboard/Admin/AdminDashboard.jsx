import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../Hook/useAxiosSecure'

function AdminDashboard() {
  const axiosSecure = useAxiosSecure()
  const {data : adminDashboard = [] , isLoading} = useQuery({
    queryKey : ['adminDashboard'],
    queryFn : async() => {
      const res = await axiosSecure.get("/biodatas/admin")
      return res.data
    }
  })

  if(isLoading) {
    return <h1 className='text-5xl text-pink-500'>Loading.........</h1>
  }

  console.log(adminDashboard)
  return (
    <div className='h-screen bg-banner1 bg-center bg-cover'>
     <div className='flex flex-col justify-center items-center  pt-10'>
     <h1 className='text-white/90 text-3xl font-bannerFont md:text-4xl lg:text-5xl mb-2'>Admin Dashboard</h1>
     <p className={`text-white/90 `}>Here Admin Can See Total Anatics</p>
     </div>
     <div className='pt-10 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-2 '>
      {/* card -1 */}
     <div  className="md:max-w-[230px]  bg-card1 bg-center bg-cover rounded-xl  hover:scale-95  duration-100 ">
      <section className='p-6  rounded-xl  hover:scale-95  duration-100 backdrop-blur-lg flex flex-col justify-center items-center'>
      <h5 className="mb-2 text-3xl md:text-2xl lg:text-lg font-bold text-white/90  ">Total Revenue</h5>
      <p className="text-center text-white/90 text-4xl font-semibold">
      {adminDashboard?.revenue} $
      </p>
      </section>
    </div>
    {/* card 1 ends */}
      {/* card -2 */}
     <div  className="md:max-w-[230px]  bg-card1 bg-center bg-cover rounded-xl  hover:scale-95  duration-100 ">
      <section className='p-6  rounded-xl  hover:scale-95  duration-100 backdrop-blur-lg flex flex-col justify-center items-center'>
      <h5 className="mb-2 text-3xl md:text-2xl lg:text-lg font-bold text-white/90  "> Total Biodata</h5>
      <p className="text-center text-white/90 text-4xl font-semibold">
      {adminDashboard?.totalBiodata}
      </p>
      </section>
    </div>
    {/* card 2 ends */}
      {/* card -3 */}
     <div  className="md:max-w-[230px]  bg-card1 bg-center bg-cover rounded-xl  hover:scale-95  duration-100 ">
      <section className='p-6  rounded-xl  hover:scale-95  duration-100 backdrop-blur-lg flex flex-col justify-center items-center'>
      <h5 className="mb-2 text-3xl md:text-2xl lg:text-lg font-bold text-white/90  ">Total Male</h5>
      <p className="text-center text-white/90 text-4xl font-semibold">
      {adminDashboard?.totalMale}
      </p>
      </section>
    </div>
    {/* card 3 ends */}
      {/* card -3 */}
     <div  className="md:max-w-[230px]  bg-card1 bg-center bg-cover rounded-xl  hover:scale-95  duration-100 ">
      <section className='p-6  rounded-xl  hover:scale-95  duration-100 backdrop-blur-lg flex flex-col justify-center items-center'>
      <h5 className="mb-2 text-3xl md:text-2xl lg:text-lg font-bold text-white/90  ">Total Female</h5>
      <p className="text-center text-white/90 text-4xl font-semibold">
      {adminDashboard?.totalFemale}
      </p>
      </section>
    </div>
    {/* card 3 ends */}
     
     </div>
    </div>
  )
}

export default AdminDashboard
