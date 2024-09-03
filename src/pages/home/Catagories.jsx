import React from 'react'

const Catagories = () => {
    const catagoryItems = [
        { id: 1, title: 'Main Dish', Des: "(86 dises)", image: '../../../public//images/catagory/img1.png' },
        { id: 2, title: 'Break Fast', Des: "(12 break fast)", image: '../../../public//images/catagory/img2.png' },
        { id: 3, title: 'Dessert', Des: "(48 dessert)", image: '../../../public//images/catagory/img3.png' },
        { id: 4, title: 'Browse All', Des: "(255 Items)", image: '../../../public//images/catagory/img4.png' },
    ]



    return (
        <div className='max-w-screen-2xl conainer lg:mx-auto lg:px-16 px-6 my-20'>
            <div className='text-center'>
                <p className='text-red uppercase tracking-wide font-medium text-lg'>Customer Favorites</p>
                <h3 className='text-3xl md:text-4xl font-bold md:leading-snug leading-snug my-3'>Popular Catagories</h3>
            </div>
            {/* catagories */}

            <div className='flex flex-col sm:flex-row gap-12 flex-wrap justify-around items-center mt-12'>
                {
                    catagoryItems.map((item, i) => (

                        <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-52 mx-auto text-center cursor-pointer hover:translate-y-4 duration-300 transition-all'>
                            <div className='flex w-full mx-auto items-center justify-center'>
                                <img src={item.image} alt="" className='bg-[#C1F1C6] p-2 rounded-full w-16 h-16' />
                            </div>

                            <div className='mt-5 space-y-1'>
                                <h5>{item.title}</h5>
                                <p>{item.Des}</p>
                            </div>
                        </div>



                    ))
                }
            </div>



        </div>
    )
}

export default Catagories
