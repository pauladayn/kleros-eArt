import Web3 from 'web3';
//import ArbitrableTokenList from './ArbitrableTokenList.json';

import ArbitrableTokenList from "../../build/contracts/ArbitrableTokenList.json";

export const contractInstance = address => {
    new Web3.eth.Contract(ArbitrableTokenList.abi, address)
}

//name: the token name
//address: es token address
//tiker: the token ticker (e.g PNK)
//symbolMultiHash (the multihash of the token symbol)
//Submits a request to change a token status. Accepts enough ETH to fund a potential dispute considering the current required amount and reimburses the rest. TRUSTED.
//ESTA SERÍA EL SUBMIT TOKEN
export const requestStatusChange = (name, tokenAddress,ticker, symbolMultiHash) => {
    contractInstance(tokenAddress)
    .methods.requestStatusChange()
    .call()
};

