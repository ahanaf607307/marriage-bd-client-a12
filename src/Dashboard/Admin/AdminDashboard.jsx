import { useQuery } from '@tanstack/react-query'
import { Progress } from 'flowbite-react'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import useAuth from '../../Firebase/UseAuth/useAuth'
import useAxiosSecure from '../../Hook/useAxiosSecure'

function AdminDashboard() {
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const {data : adminDashboard = [] , isLoading} = useQuery({
    queryKey : ['adminDashboard'],
    enabled: !!user?.email && !!localStorage.getItem(`access-token`),
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
    <div className='min-h-screen bg-banner1 bg-center bg-cover'>
      <Helmet>
                          <title>Admin Dashboard | Admin | marriageBd</title>
                        </Helmet>
     <div className='flex flex-col justify-center items-center  pt-10'>
     <h1 className='text-white/90 text-3xl font-bannerFont md:text-4xl lg:text-5xl mb-2'>Admin Dashboard</h1>
     <p className={`text-white/90 `}>Here Admin Can See Total Anatics</p>
     </div>
     <div className='pt-10 p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-2 '>
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
      {/* card  totalPremium : totalPremium, */}
     <div  className="md:max-w-[230px]  bg-card1 bg-center bg-cover rounded-xl  hover:scale-95  duration-100 ">
      <section className='p-6  rounded-xl  hover:scale-95  duration-100 backdrop-blur-lg flex flex-col justify-center items-center'>
      <h5 className="mb-2 text-3xl md:text-2xl lg:text-lg font-bold text-white/90  "> Total Premium</h5>
      <p className="text-center text-white/90 text-4xl font-semibold">
      {adminDashboard?.totalPremium}
      </p>
      </section>
    </div>
    {/* card  totalPremium : totalPremium, */}
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
     
     <div className="flex flex-col gap-2 bg-pink-400 p-10 max-w-xl mx-auto my-12 rounded-xl mx-2">
      <h1 className='text-white/90 font-bannerFont text-2xl'>See As Progress </h1>
      <div className="text-base font-medium text-purple-700">Total Revenue $</div>
      <Progress progress= {adminDashboard?.revenue} color="purple" />
      <div className="text-base font-medium text-blue-700">Total Biodata</div>
      <Progress progress= {adminDashboard?.totalBiodata} color="blue" />
      <div className="text-base font-medium text-red-700">Total Male</div>
      <Progress progress= {adminDashboard?.totalMale} color="red" />
      <div className="text-base font-medium text-green-700">Total Female</div>
      <Progress progress= {adminDashboard?.totalFemale} color="green" />
    </div>
    </div>
  )
}

export default AdminDashboard
