import { FloatingLabel, Select } from 'flowbite-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import BannarAll from '../../Shared/BannarAll'

function EditBiodata() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <BannarAll bannerHeading={`"Build Your Matrimonial Profile"`}/>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          
                    <FloatingLabel
                      {...register("name", { required: true })}
                      type="text"
                      name="name"
                      className="w-full"
                      variant="filled"
                      label="Name"
                    />
                     <Select {...register("genderType")} name='genderType'  id="countries" required>
                            <option>Male</option>
                            <option>Female</option>
                          </Select>
        </form>
      </div>
    </div>
  )
}

export default EditBiodata
