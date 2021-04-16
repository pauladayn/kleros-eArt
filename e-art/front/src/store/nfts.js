import {
	createAction,
	createAsyncThunk,
	createReducer,
} from "@reduxjs/toolkit";

import axios from "axios";


export const pinFileToIPFS = createAsyncThunk(
	"PIN_TO_PINATA",
	({pinata_api_key, pinata_secret_api_key, nftData, nftFile}, thunkAPI) => {
        const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
        
        const FormData = require("form-data");
        const file = nftFile.selectedFile
        let data = new FormData();
       
        const metadata = JSON.stringify(nftData);
        data.append('pinataMetadata', metadata);
        data.append('file', file)


		return axios
            .post(url, data, {
                maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                    pinata_api_key,
                    pinata_secret_api_key
                }
            })
            .then(function (response) {
                console.log(response.data, 'RTAATATATATA')
              return response.data
            })
            .catch(function (error) {
                console.log('NO ANDUVO', error.message)
            });
	}
);






export const getTokensFromPinata = createAsyncThunk(
	"GET_TOKENS_FROM_PINATA",
	({pinata_api_key, pinata_secret_api_key}, thunkAPI) => {

		return axios
			.get("https://api.pinata.cloud/data/pinList?status=pinned", {
				headers: {
					pinata_api_key,
					pinata_secret_api_key
				},
			})
			.then(({data: {rows}}) => {
				console.log(rows, "getTokensFromPinata reducer");

				return rows;
			});
	}
);

const nftsReducer = createReducer([], {
	[getTokensFromPinata.fulfilled]: (state, action) => action.payload,
	[pinFileToIPFS.fulfilled]: (state, action) => [...state, action.payload]
});

export default nftsReducer;
