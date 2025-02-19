import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Helmet } from 'react-helmet-async'

import useAuth from '../../Firebase/UseAuth/useAuth'
import useAxiosSecure from '../../Hook/useAxiosSecure'
import Loading from '../../Loading/Loading'
import DashboardGraph from './components/DashboardGraph/DashboardGraph'
import TotalMoneyCharts from './components/TotalMoney/TotalMoney'

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
    return <Loading/>
  }


  // total Earn money using contact request





  return (
    <div className='min-h-screen  bg-white/80 dark:bg-gray-700'>
      <Helmet>
                          <title>Admin Dashboard | Admin | marriageBd</title>
                        </Helmet>
     <div className='flex flex-col justify-center items-center  pt-10'>
     <h1 className='text-black/90 dark:text-white text-3xl font-bannerFont md:text-4xl lg:text-5xl mb-2'>Admin Dashboard</h1>
     <p className={`text-black/90 dark:text-white `}>Here Admin Can See Total Anatics</p>
     </div>

     {/* total card starts */}
     <div className="pt-10 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {[
    { title: "Total Revenue", value: `${adminDashboard?.revenue} $` },
    { title: "Total Premium", value: adminDashboard?.totalPremium },
    { title: "Total Biodata", value: adminDashboard?.totalBiodata },
    { title: "Total Male", value: adminDashboard?.totalMale },
    { title: "Total Female", value: adminDashboard?.totalFemale },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white text-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-200"
    >
      <h5 className="text-lg font-semibold">{item.title}</h5>
      <p className="text-3xl font-bold mt-2">{item.value}</p>
    </div>
  ))}
</div>

{/* total card ends */}
     {/* graph and charts */}
     <DashboardGraph adminDashboard={adminDashboard} />
     <TotalMoneyCharts />
    {/* graph and charts ends */}
    </div>
  )
}

export default AdminDashboard
