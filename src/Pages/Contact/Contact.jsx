import { Button, FloatingLabel, Label, Textarea } from 'flowbite-react'
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
    <div className='min-h-screen bg-banner1 bg-cover bg-center  object-fill'>
     <div className='max-w-4xl mx-auto '>
     <div className='text-center font-bannerFont'>
      <h1 className=' text-white/90 text-3xl pt-14 md:text-4xl lg:text-5xl mb-2'>
        “We’re Here to Help”
      </h1>
      <p className={`text-white/90 pt-3 px-4 md:px-20 lg:px-56 `}>“Feel free to reach out to us for any questions, support, or feedback. Our team is always ready to assist you.”</p>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center mt-20'>
      {/* left */}
      <div className='text-white/90'>
        <div className='flex  items-center gap-x-3 my-8'>
        <FaPhone className='text-3xl mr-2'/> 
        <div>
          <h1 className='text-2xl text-pink-300 font-bannerFont'>Phone :</h1>
        <p className='text-lg font-bannerFont'> +88 01000000000</p>
        </div>
         </div>


        <div className='flex  items-center gap-x-3 my-8'>
        <MdAttachEmail  className='text-3xl mr-2'/>
        <div>
          <h1 className='text-2xl text-pink-300 font-bannerFont'>Email :</h1>
          <p className='text-lg font-bannerFont'> marriagebd@gmail.com</p>
        </div>
         </div>


        <div className='flex  items-center gap-x-3 my-8'>
        <FaLocationDot   className='text-3xl mr-2'/>
        <div>
          <h1 className='text-2xl text-pink-300 font-bannerFont'>Address :</h1>
          <p className='text-lg font-bannerFont'> Rangpur , Bangladesh</p>
        </div>
         </div>
      </div>
      {/* right side */}
      <div className=''>
        <form onSubmit={handleContact}   className='flex flex-col justify-center gap-y-3'>
        <FloatingLabel variant="filled" label="Full Name" required/>
        <FloatingLabel variant="filled" label="Email " required/>
      <Textarea id="comment" placeholder="Leave your message..." required rows={4} />
      <button type='submit' className='text-white/90 font-semibold hover:scale-105  bg-pink-500 rounded-xl px-3 py-3  duration-100'> Submit </button>
        </form>
      </div>
    </div>
     </div>
    </div>
  )
}

export default Contact
