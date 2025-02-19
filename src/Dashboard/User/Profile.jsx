import React from 'react';
import useAuth from '../../Firebase/UseAuth/useAuth';

const Profile = () => {
    const {user} = useAuth()
    return (
        <div className="bg-gray-100 min-h-screen md:pl-16">
  <div className=" mx-auto bg-white rounded-lg shadow-lg min-h-screen  overflow-hidden">
    {/* Profile Header */}
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
      <div className="flex items-center space-x-4">
        {/* Profile Picture */}
        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* User Info */}
        <div>
          <h1 className="text-2xl font-bold text-white">{user?.displayName}</h1>
          <p className="text-gray-200">Software Engineer</p>
          <p className="text-gray-200"> Rangpur , Bangladesh</p>
        </div>
      </div>
    </div>

    {/* Profile Details */}
    <div className="p-6 ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">About Me</h2>
      <p className="text-gray-600 mb-6">
        Hi, I'm <span className='font-semibold'>{user?.displayName}</span>  I'm a passionate software engineer with over 5 years of experience in building scalable web applications. I love exploring new technologies and contributing to open-source projects.
      </p>

      {/* Personal Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Personal Details</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><span className="font-medium">Gender:</span> Male</li>
           
            <li><span className="font-medium">Religion:</span> Bangladesh</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Contact Information</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><span className="font-medium">Email:</span> {user?.email}</li>
            <li><span className="font-medium">Phone:</span> +1 (123) 456-7890</li>
            <li><span className="font-medium">Address:</span> 123 Main St, New York, USA</li>
          </ul>
        </div>
      </div>

      
    </div>

   
  </div>
</div>
    );
};

export default Profile;