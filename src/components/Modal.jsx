import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { useForm } from "react-hook-form"
import { AuthContext } from '../contexts/AuthProvider';
const Modal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { signUpWithGmail, login } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('')

// home page ar spcifig page 
    const location = useLocation();
    const navigate = useNavigate();
    const form = location.state?.from?.pathname  || '/'  ;



    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        // console.log(email, password)
        login(email, password).then((result) => {
            const user = result.user;
            alert('Login Successful');
            document.getElementById('my_modal_5').close()
            navigate(from, {replace: true})
        }).catch((error) => {
            const errorMessage = error.messase;
            setErrorMessage('Please a correct email and password')
        })
    }





    //google sign in

    const handleGoogleLogin = () => {

        signUpWithGmail()
            .then((result) => {
                const user = result.user;
                alert('Login Succesful')
                navigate(from, {replace: true})
            })
    }

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

                        {
                            errorMessage ? <p className="text-red text-xs italic">{errorMessage}</p> : ""
                        }

                        {/* login button */}
                        <div className="form-control mt-6">
                            <input type='submit' value='Login' className="btn bg-yellow-500"></input>
                        </div>

                        <p className='text-center my-2'>Do Not Have an Account? <Link to='/signup' className='underline text-blue-600 ml-1'>Signup Now</Link> </p>

                        {/* close button  */}
                        <button
                            htmlFor='my_modal_5'
                            onClick={() => document.getElementById('my_modal_5').close()}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* social login link  */}
                    <div className='text-center space-x-3 mb-3'>
                        <button onClick={handleGoogleLogin} className='btn bnt-circle hover:bg-yellow-500 hover:text-white text-yellow-500 bg-blue-500 rounded-full'>
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
