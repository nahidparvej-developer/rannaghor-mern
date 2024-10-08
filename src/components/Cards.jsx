import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaHeart} from 'react-icons/fa'


const Cards = ({ item }) => {
const [isHeartFillted, setisHeartFillted] =useState(false);

const handleHeartClick =() => {
    setisHeartFillted(!isHeartFillted)
}
    return (
        
 
            <div className="card bg-base-100 lg:w-72 shadow-xl my-6 relative">

                <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-yellow-500  ${isHeartFillted ? 'text-rose-500' : 'text-white'}` } 
                onClick={handleHeartClick}
                >
                   <FaHeart className='h-5 w-5 cursor-pointer' />
                </div>
                <Link to={`/menu/${item._id}`}>
                    <figure>
                        <img src={item.image}
                            alt="" className='hover:scale-105 transition-all duration-300 w-40 h-40' />
                    </figure>
                </Link>
                <div className="card-body">
                  <Link to={`/menu/${item._id}`}>  <h2 className="card-title">{item.name}</h2></Link>
                    <p>Description of the item</p>
                    <div className="card-actions justify-between items-center mt-2">
                        <h5 className='font-semibold'><span className='text-sm text-red'>$</span>{item.price}</h5>
                        <button className="btn bg-yellow-500 text-white">Buy Now</button>
                    </div>
                </div>
            </div>
      
    )
}

export default Cards
