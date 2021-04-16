import React from 'react'
import {Link} from 'react-router-dom'

const cats = ["New", "Sports", "Music", "Nature", "Movies", "Games"]

const SecondNavbar = () => {
    return (
        <div className='bg-red-100 h-16 w-auto shadow-md flex justify-center items-center'>
            {cats.map((cat, index) => (
                <Link to='#' key={index} className='mx-8 bg-transparent transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-700'>
                   {cat} 
                </Link>
            ))}
        </div>
    )
}

export default SecondNavbar
