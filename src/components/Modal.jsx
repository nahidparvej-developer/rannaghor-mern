import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { useForm } from "react-hook-form"
const Modal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)
    return (
      
            <dialog id="my_modal_5" className="modal  modal-middle sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action flex flex-col justify-center mt-0">

                        {/* login form */}

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                        <h3 className="font-bold text-lg">Please Login</h3>

                        {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email")} />
                            </div>

                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* error text show */}
                            {/* login button */}
                            <div className="form-control mt-6">
                                <input type='submit' value='Login' className="btn bg-yellow-500"></input>
                            </div>
                             
                              <p className='text-center my-2'>Do Not Have an Account? <Link to='/signup' className='underline text-blue-600 ml-1'>Signup Now</Link> </p>
                        </form>
                        {/* social login link  */}
                        <div className='text-center space-x-3 mb-3'>
                            <button className='btn bnt-circle hover:bg-yellow-500 hover:text-white text-yellow-500 bg-blue-500 rounded-full'>
                            <FaGoogle />
                            </button>
                            <button className='btn bnt-circle hover:bg-yellow-500 hover:text-white text-yellow-500 bg-blue-500 rounded-full'>
                            <FaFacebookF />
                            </button>
                            <button className='btn bnt-circle hover:bg-yellow-500 hover:text-white text-yellow-500 bg-blue-500 rounded-full'>
                            <IoLogoGithub />
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
      
    )
}

export default Modal
