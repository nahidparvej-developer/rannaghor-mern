import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const UpdateProfile = () => {
    const {updateUserProfile} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const location = useLocation();
      const navigate = useNavigate();
      const from = location.state?.from?.pathname  || '/';

      const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;
        updateUserProfile(name, photoURL).then(() =>{
            navigate(from, {replace: true})
        }).catch((error) => {
            // dddd 
        })
      }


    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
                    <h3>Update your Profile</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Upload Photo</span>
                        </label>
                        <input type="text" {...register("photoURL")} placeholder="PhotoURl" className="input input-bordered" required />


                        {/* uploading image */}


                        {/* <input
                            type="file"
                            className="file-input file-input-bordered file-input-warning w-full max-w-xs" /> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-yellow-500">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile
