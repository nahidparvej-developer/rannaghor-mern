import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
    return (
        <div className='max-w-screen-2xl conainer lg:mx-auto lg:px-16 px-6 my-20'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                <div className='md:w-1/2'>
                    <img src="../../../public/images/testimonial/testimonials.png" alt="" />
                </div>
                <div className='md:w-1/2'>
                    <div className='text-left md:w-4/5'>
                        <p className='text-red uppercase tracking-wide font-medium text-lg'>Testimonials</p>
                        <h3 className='text-3xl md:text-4xl font-bold md:leading-snug leading-snug my-3'>What Our Customers Say About Us</h3>
                        <blockquote className='text-[#4A4A4A] my-5 leading-4 text-sm'>
                            “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
                        </blockquote>

                        {/* //Avatar section */}


                        <div className='flex items-center gap-4 flex-wrap'>
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/testimonial/testimonial1.png" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/testimonial/testimonial2.png" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/testimonial/testimonial3.png" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content w-12">
                                        <span>+99</span>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-1'>
                                <h5 className='text-lg font-semibold'>Customer Feedback</h5>
                                <div className='flex items-center gap-2'>
                                    <FaStar className='text-yellow-300' />
                                       <span>4.9</span> <span>(18.4k Reviews)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials
