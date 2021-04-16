import Web3 from 'web3';
import CentralizedCourt from './CentralizedCourt.json'

export const courtInstance = address => {
new Web3.eth.Contract(CentralizedCourt.abi, address)
}

//Create a dispute