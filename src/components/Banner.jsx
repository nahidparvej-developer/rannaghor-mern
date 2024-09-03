import React from 'react'
import banner from '../../public/images/banner.png'
import Bnoodles from '../../public/images/b-food1.png'
const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% max-w-screen-2xl conainer lg:mx-auto lg:px-16 px-6'>
            <div className='py-14 flex flex-col-reverse md:flex-row justify-between items-center gap-8'>

                {/* text */}
                <div className='md:w-1/2 space-y-7 px-4'>
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'> Dive into Delights Of Delectable <span className='text-yellow-500'>Food</span></h2>
                    <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                    <button className='btn text-white bg-yellow-500 px-8 py-3 font-semibold rounded-full'>Order Now</button>
                </div>
                {/* images */}
                <div className='md:w-1/2'>
                    <img src={banner} alt="" />
                    <div className='flex flex-col md:flex-row items-center justify-around lg:-mt-14 gap-3'>
                        <div className='sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64 '>
                            <img src={Bnoodles} alt="" className='rounded-2xl ' />
                            <div className='space-y-1'>
                                <h5 className='font-medium mb-1'>Spicy Noodles</h5>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-yellow-500"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                </div>
                                <p className='text-red'>$20.00</p>
                            </div>
                        </div>
                        {/* right  */}

                        <div className='sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64 '>
                            <img src={Bnoodles} alt="" className='rounded-2xl ' />
                            <div className='space-y-1'>
                                <h5 className='font-medium mb-1'>Spicy Noodles</h5>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-yellow-500"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                </div>
                                <p className='text-red'>$20.00</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
