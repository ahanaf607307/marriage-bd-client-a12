import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useAuth from '../../../../Firebase/UseAuth/useAuth';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';


const TotalMoneyChart = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: contacts = [] } = useQuery({
    queryKey: ["contacts"],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosPublic.get(`/contact-request`);
      return res.data || []; 
    },
  });

  const totalMoney = contacts.length * 5;

  // Prepare data for the chart
  const chartData = [
    {
      name: 'Total Money',
      value: totalMoney,
    },
  ];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h2 className='text-4xl py-8 text-center'>Total Money: ${totalMoney}</h2>
      <ResponsiveContainer>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalMoneyChart;