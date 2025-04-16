import { FloatingLabel, Textarea } from 'flowbite-react'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdAttachEmail } from 'react-icons/md'
import Swal from 'sweetalert2'

function Contact() {

  const  handleContact= (e) => {
    e.preventDefault()
     Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thank You ! Please Wait Sometime ✨",
              showConfirmButton: false,
              timer: 1500
            });
  }
  return (
  //   <div className='min-h-[calc(100vh-148px)] '>
  //  <div className='w-full bg-pink-500/30 dark:bg-gray-800 backdrop-blur-sm min-h-[calc(100vh-148px)]'>
  //  <div className=' mx-auto   max-w-4xl'>
  //    <div className='text-center font-bannerFont'>
  //     <h1 className=' text-white/90 text-3xl pt-14 md:text-4xl lg:text-5xl mb-2'>
  //       “We’re Here to Help”
  //     </h1>
  //     <p className={`text-white/90 pt-3 px-4 md:px-20 lg:px-56 `}>“Feel free to reach out to us for any questions, support, or feedback. Our team is always ready to assist you.”</p>
  //   </div>
  //   <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center py-20 px-4'>
  //     {/* left */}
  //     <div className='text-white/90'>
  //       <div className='flex  items-center gap-x-3 my-8'>
  //       <FaPhone className='text-3xl mr-2'/> 
  //       <div>
  //         <h1 className='text-2xl text-pink-300 font-bannerFont'>Phone :</h1>
  //       <p className='text-lg font-bannerFont'> +88 01000000000</p>
  //       </div>
  //        </div>


  //       <div className='flex  items-center gap-x-3 my-8'>
  //       <MdAttachEmail  className='text-3xl mr-2'/>
  //       <div>
  //         <h1 className='text-2xl text-pink-300 font-bannerFont'>Email :</h1>
  //         <p className='text-lg font-bannerFont'> marriagebd@gmail.com</p>
  //       </div>
  //        </div>


  //       <div className='flex  items-center gap-x-3 my-8'>
  //       <FaLocationDot   className='text-3xl mr-2'/>
  //       <div>
  //         <h1 className='text-2xl text-pink-300 font-bannerFont'>Address :</h1>
  //         <p className='text-lg font-bannerFont'> Rangpur , Bangladesh</p>
  //       </div>
  //        </div>
  //     </div>
  //     {/* right side */}
  //     <div className=''>
  //       <form onSubmit={handleContact}   className='flex flex-col justify-center gap-y-3'>
  //       <FloatingLabel variant="filled" label="Full Name" required/>
  //       <FloatingLabel variant="filled" label="Email " required/>
  //     <Textarea id="comment" placeholder="Leave your message..." required rows={4} />
  //     <button type='submit' className='text-white/90 font-semibold hover:scale-105  bg-pink-500 rounded-xl px-3 py-3  duration-100'> Submit </button>
  //       </form>
  //     </div>
  //   </div>
  //    </div>
  //  </div>
  //   </div>

<div className="min-h-[calc(100vh-148px)] bg-white dark:bg-gray-900">
  <div className="min-h-[calc(100vh-148px)]">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center font-bannerFont pt-16">
        <h1 className="text-gray-800 dark:text-white text-4xl md:text-5xl lg:text-6xl  mb-4">
          “We’re Here to Help”
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto px-4">
          Feel free to reach out to us for any questions, support, or feedback. Our team is always ready to assist you.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaPhone className="text-3xl text-blue-500" />
            <div>
              <h2 className="text-2xl font-bannerFont text-blue-600">Phone :</h2>
              <p className="text-lg font-bannerFont text-gray-700 dark:text-gray-200">+88 01000000000</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition">
            <MdAttachEmail className="text-3xl text-blue-500" />
            <div>
              <h2 className="text-2xl font-bannerFont text-blue-600">Email :</h2>
              <p className="text-lg font-bannerFont text-gray-700 dark:text-gray-200">marriagebd@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaLocationDot className="text-3xl text-blue-500" />
            <div>
              <h2 className="text-2xl font-bannerFont text-blue-600">Address :</h2>
              <p className="text-lg font-bannerFont text-gray-700 dark:text-gray-200">Rangpur, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleContact} className="flex flex-col gap-4">
            <FloatingLabel variant="outlined" label="Full Name" required />
            <FloatingLabel variant="outlined" label="Email" required />
            <Textarea
              id="comment"
              placeholder="Leave your message..."
              required
              rows={4}
              className="rounded-lg"
            />
            <button
              type="submit"
            className="mt-4 bg-gradient-to-r from-[#cb46e5] to-[#d9286c] hover:from-[#b238ca] hover:to-[#5b21b6] text-white font-semibold rounded-xl py-3 px-6 shadow-md hover:scale-105 duration-150 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>



  )
}

export default Contact
