// const axios = require('axios');
// const FormData = require('form-data');
// const pinataApiKey = window.env.API_KEY
// const pinataSecretApiKey = window.env.API_SECRET

// export default function pinFileToIPFS ( nftData, nftFile) {
//     const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

//     let data = new FormData();
   
//     const metadata = JSON.stringify(nftData);

//     data.append('pinataMetadata', metadata);
//     data.append('file', nftFile)
    
//         return axios
//             .post(url, data, {
//                 maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
//                 headers: {
//                     'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
//                     pinata_api_key: pinataApiKey,
//                     pinata_secret_api_key: pinataSecretApiKey
//                 }
//             })
//             .then(function (response) {
//               return response.data
//             })
//             .catch(function (error) {
//                 console.log('NO ANDUVO', error.message)
//             });
//     };

