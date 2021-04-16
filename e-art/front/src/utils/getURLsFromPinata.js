// const axios = require('axios');
// const pinataApiKey = window.env.API_KEY
// const pinataSecretApiKey = window.env.API_SECRET

// export default function getURLsFromPinata () {
//     const url = 'https://api.pinata.cloud/data/pinList?status=pinned'
    
//     return axios
//         .get(url, {
//             headers: {
//                             pinata_api_key: pinataApiKey,
//                             pinata_secret_api_key: pinataSecretApiKey
//                         }
//         })
//         .then(({data})=>{
//             console.log(data, 'DATA TRAIDA DE PINATA')
//             return data
//         })
//         .catch(err=>err)
//     };

