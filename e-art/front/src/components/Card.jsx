import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <>
            <Link to={'/product/1'}>
                <div className='h-64 
                    text-center 
                    p-12 
                    test 
                    border-solid 
                    border-2 
                    border-gray-300 
                    bg-gray-200 
                    shadow-md 
                    rounded-sm
                    hover:bg-red-100
                    '>
                    CARTA
                </div>
            </Link>
        </>
    )
}

export default Card
