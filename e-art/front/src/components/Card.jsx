import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
    return (
        <>
            <Link to={`/product/${data.ipfs_pin_hash}`}>
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
                    <img src={`https://gateway.pinata.cloud/ipfs/${data.ipfs_pin_hash}`}></img>
                </div>
            </Link>
        </>
    )
}

export default Card
