import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { useSelector } from "react-redux";

const SingleView = ({hash}) => {
    const nfts = useSelector(state => state.nfts)
    function getTokenData (hash) {
        return nfts.find(x=>x.ipfs_pin_hash===hash)
    }
    const nft = getTokenData(hash)

    return (
        <div className='bg-gray-300 w-6/12 h-screen mx-auto flex flex-col items-center p-4 font-mono border-solid border-4 border-gray-400 rounded-sm myshadow' >
            <div className='border-red-200'>
                <p className='text-right italic'>Federico Girotti</p>
                <img src={`https://gateway.pinata.cloud/ipfs/${hash}`}
                    className='single-card mt-1 border-t-4 border-gray-400 rounded-md'
                />
            </div>
            <div className='mb-8 w-11/12 h-full h-36 p-2 flex flex-col justify-between' >
                <div className='flex justify-between my-4'>
                    <p className='text-2xl'>{nft.metadata.name}</p>
                    <p className='font-bold text-xl'><FontAwesomeIcon className='bg-gray-300 mr-2' icon={faEthereum}/>{nft.metadata.keyvalues.price} ETH</p>
                </div>
                <hr className='border-gray-400'/>
                <div className='flex-1 ml-6 my-6 text-justify'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, blanditiis modi ipsa dignissimos quis nostrum voluptate facilis soluta distinctio inventore magni iusto voluptas! Commodi excepturi nesciunt, nostrum et rem ad.</p>
                </div>
                <div className=''>
                    <button className='bg-red-300 w-2/12 border-solid rounded-sm border-2 border-gray-700 mx-6 p-1 hover:bg-gray-700 hover:text-red-200'>
                        BUY
                    </button>
                    <button className='bg-red-300 w-2/12 border-solid rounded-sm border-2 border-gray-700 p-1 hover:bg-gray-700 hover:text-red-200'>
                        DISPUTE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleView

