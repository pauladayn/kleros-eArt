import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import uploadToPinata from "../utils/uploadToPinata";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {pinFileToIPFS} from '../store/nfts';

//ACÁ NO LE ESTÁ LLEGANDO EL ADDRESS DEL CONTRATO
const Popup = ({
	handlePopup,
	walletAccount,
	pinata_api_key,
	pinata_secret_api_key,
}) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [tokenData, setTokenData] = useState({
		title: null,
		walletAccount,
		price: null,
	});

	const fileSelectedHandler = (event) => {
        setSelectedFile(()=> event.target.files[0]);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		e.preventDefault();
		setTokenData(() => ({ ...tokenData, [name]: value }));
	};

	const dispatch = useDispatch();

	const fileSubmitHandler = (event) => {
		event.preventDefault();
        const nftData = {
            name: tokenData.title,
            keyvalues: {
                author: tokenData.walletAccount,
                price: tokenData.price,
            }
        }
        const nftFile = {
            selectedFile,
        }
        console.log(nftData, 'nftData popup')
		dispatch(pinFileToIPFS({pinata_api_key, pinata_secret_api_key, nftData, nftFile}));
		handlePopup();
	};

	return (
		<div className="fixed right-16 border-4 border-gray-400 rounded-md p-6 bg-gray-300 font-mono shadow-lg">
			<div className="flex flex-col popup">
				<div className="flex justify-between">
					<h3 className="">Submit a token</h3>
					<button onClick={handlePopup}>
						<FontAwesomeIcon icon={faTimes} className="w-12 text-red-500" />
					</button>
				</div>
				<hr className="border-gray-400" />
				<form className="flex flex-col flex-1 justify-between">
					<div className="flex flex-col flex-1 justify-around">
						<input
							type="text"
							name="title"
							placeholder="Title"
							onChange={(e) => handleChange(e)}
							className="p-2 border-2 border-gray-400 rounded-md"
						></input>
						<input
							type="text"
							name="address"
							style={{ color: "grey", fontSize: "0.6em", height: "45px" }}
							placeholder="Address"
							disabled
							value={`address: ${walletAccount}`}
							className="p-2 border-2 border-gray-400 rounded-md"
						></input>
						<input
							tyoe="text"
							name="price"
							placeholder="Price"
							onChange={(e) => handleChange(e)}
							className="p-2 border-2 border-gray-400 rounded-md"
						></input>
						<input type="file" onChange={fileSelectedHandler} />
					</div>
					<hr className="border-gray-400" />
					<button
						onClick={(e) => fileSubmitHandler(e)}
						type="submit"
						className="border-2 mt-4 border-gray-700 bg-red-400 p-2 rounded-md hover:bg-green-600 hover:text-gray-100"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Popup;