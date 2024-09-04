import React from 'react'

const serviceLists = [
    { id: 1, title: "Catering", des: "Delight your guests with our flavors and  presentation", img: "/images/services/icon1.png" },
    { id: 2, title: "Fast delivery", des: "We deliver your order promptly to your door", img: "/images/services/icon1.png" },
    { id: 3, title: "Online Ordering", des: "Explore menu & order with ease using our ", img: "/images/services/icon1.png" },
    { id: 4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", img: "/images/services/icon1.png" },
]


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

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 items-center">
                        {
                            serviceLists.map((service) => (
                                <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-yellow-500 cursor-pointer hover:border hover:border-rose-500 transition-all duration-200">
                                    <img src={service.img} alt="" className=" mx-auto" />
                                    <h5 className="pt-3 font-semibold "> {service.title}</h5>
                                    <p className="text-[#90BD95] text-sm">{service.des}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>


            </div>
        </div>
    )
}

export default OurServices
