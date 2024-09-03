import React from 'react'

const OurServices = () => {
    return (
        <div className='max-w-screen-2xl conainer lg:mx-auto lg:px-16 px-6 my-20'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12'>

            <div className='md:w-1/2'>
                    <div className='text-left md:w-4/5'>
                        <p className='text-red uppercase tracking-wide font-medium text-lg'>TOur Story & Services</p>
                        <h3 className='text-3xl md:text-4xl font-bold md:leading-snug leading-snug my-3'>Our Culinary Journey And Services</h3>
                        <blockquote className='text-[#4A4A4A] my-5 leading-4 text-sm'>
                        Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                        </blockquote>
                        <button className='btn text-white bg-yellow-500 px-8 py-3 font-semibold rounded-full'>Explore</button>
                    </div>
                </div>


                <div className='md:w-1/2'>
                    <img src="../../../public/images/testimonial/testimonials.png" alt="" />
                </div>
               

            </div>
        </div>
    )
}

export default OurServices
