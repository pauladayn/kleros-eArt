import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import uploadToPinata from '../utils/uploadToPinata';

require('dotenv').config();
const {API_KEY, API_SECRET} = process.env;

//ACÁ NO LE ESTÁ LLEGANDO EL ADDRESS DEL CONTRATO
const Popup = ({ handlePopup, walletAccount, mint }) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [tokenData, setTokenData] = useState({title: null,
                                                walletAccount,
                                                price: null
                                            })

    const fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0])

        // console.log(event.target.files[0])

    }

    const handleChange = (e) => {
        const {name, value} = e.target
        e.preventDefault()
        setTokenData(()=> ({...tokenData, [name]: value}))
    }

    const fileSubmitHandler = event => {
        event.preventDefault()

        const FormData = require("form-data");
        const fs = require('fs');


        const data = new FormData();
        const path = require('path')
        
        const nftPath = path.join(__dirname, '/nfts/jazzBook.jpg')

        // data.append('file', fs.createReadStream(nftPath));
        const nftData = {
            name: tokenData.title,
            keyvalues: {
                author: tokenData.address,
                price: tokenData.price,
                // createdAt: JSON.stringify(Date.now())
            }
        }
        const nftFile = {
            selectedFile,
        }
        mint(uploadToPinata('0e808f81c7cf4c2893c8', '34fd31e6e783856ef589906d3668be88384bc9e205da4542a8b5b4ff08fbe95e', nftData, selectedFile).then(x=>console.log(x)))
    }
            

    return (
            <div className="fixed right-16 border-4 border-gray-400 rounded-md p-6 bg-gray-300 font-mono shadow-lg">
                <div className='flex flex-col popup'>
                    <div className='flex justify-between'>
                        <h3 className=''>Submit a token</h3>
                        <button onClick={handlePopup}>
                            <FontAwesomeIcon icon={faTimes} className='w-12 text-red-500'/>
                        </button>
                    </div>
                    <hr className='border-gray-400'/>
                    <form className='flex flex-col flex-1 justify-between'>
                        <div className='flex flex-col flex-1 justify-around'>
                            <input type="text" name="title" placeholder="Title" onChange={(e)=> handleChange(e)} className='p-2 border-2 border-gray-400 rounded-md'></input>
                            <input type="text" name="address" style={{'color': 'grey', 'fontSize': '0.6em', 'height': '45px'}} placeholder="Address" disabled value={`address: ${walletAccount}`} className='p-2 border-2 border-gray-400 rounded-md'></input>
                            <input tyoe="text" name="price" placeholder="Price" onChange={(e)=> handleChange(e)} className='p-2 border-2 border-gray-400 rounded-md'></input>
                            <input type="file" onChange={fileSelectedHandler} />
                        </div>
                        <hr className='border-gray-400'/>
                        <button onClick={(e)=> fileSubmitHandler(e)}  type="submit" className="border-2 mt-4 border-gray-700 bg-red-400 p-2 rounded-md hover:bg-green-600 hover:text-gray-100">Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default Popup

