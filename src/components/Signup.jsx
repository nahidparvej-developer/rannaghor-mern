import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { useForm } from "react-hook-form"
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { createUser, login } = useContext(AuthContext);

  // home page ar spcifig page 
  const location = useLocation();
  const navigate = useNavigate();
  const form = location.state?.from?.pathname  || '/'  ;


  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password).then((result) => {
       // Signed up 
       const user = result.user;
       alert("Account creation successfully done!")
       document.getElementById("my_modal_5").close()
       navigate(from, {replace: true})
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
    })

  }

  return (
    <div className='max-w-md bg-gray-300 rounded-md shadow w-full flex items-center justify-center my-20 mx-auto'>
      <div className="modal-action flex flex-col justify-center mt-0">

        {/* login form */}

        <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
          <h3 className="font-bold text-lg">Create A Account</h3>

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

          <p className='text-center my-2'>Have an Account?
            <button className='underline text-blue-600 ml-1'
              onClick={() => document.getElementById('my_modal_5').showModal()}
            >Login</button>
          </p>
          <Link to='/'
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
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
      <Modal></Modal>
    </div>
  )
}

export default Signup
