import React from 'react'

const Menu = () => {
  return (
    <div>
      {/* menu banner  */}

      <div className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% max-w-screen-2xl conainer lg:mx-auto lg:px-16 px-6'>
        <div className='py-48 flex md:flex-row justify-center items-center gap-8'>

          {/* text */}
          <div className='text-center space-y-7 px-4'>
            <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'> Dive into Delights Of Delectable <span className='text-yellow-500'>Food</span></h2>
            <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <button className='btn text-white bg-yellow-500 px-8 py-3 font-semibold rounded-full'>Order Now</button>
          </div>

        </div>
      </div>
      {/* menu shop section */}
      <div>

      </div>
    </div>
  )
}

export default Menu
