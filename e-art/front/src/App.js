import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Web3 from "web3";
import Layout from "./components/layout/Layout";
import SingleView from "./components/SingleView";
import HomePage from "./components/HomePage";
import Artwork from "./abis/contracts/Artwork.json";
import PopupForm from "./components/PopupForm";
// import getURLsFromPinata from './utils/getURLsFromPinata';
import {getTokensFromPinata} from './store/nfts';

function App() {
  //va a recibir la data de la cta conectada a MetaMask a través de un pedido asíncrono a la blockchain
  const [accounts, setAccount] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [artworkName, setArtworkName] = useState(""); //va a ser el nombre string con el que vamos a mintear el token en el contract
  const [popup, setPopup] = useState(false);
  const [localContract, setLocalContract] = useState("");
  const ethereum = window.ethereum;
  const web3 = new Web3(ethereum);

  const pinata_api_key = window.env.API_KEY
  const pinata_secret_api_key = window.env.API_SECRET

  const [render, setRender] = useState(false)
  
  const dispatch = useDispatch()
  const urls = useSelector(state=>state.nfts)
  
  useEffect(()=> {
    dispatch(getTokensFromPinata({pinata_api_key,pinata_secret_api_key}))
  },[render])


  
  useEffect(() => {
 

    (async () => {
      await loadWeb3();
      await getBlockChainData();
      await interactArtwork();
      //await mint();
    })();
  }, []);

  const getBlockChainData = async () => {
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  };

  const interactArtwork = async () => {
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Artwork.networks[networkId];
    const abi = Artwork.abi;
    const artworkInstance = new web3.eth.Contract(abi, deployedNetwork.address);
    setLocalContract(artworkInstance);
   
  };

  function reRender () {
    setRender(state=>!state)
  }


  const mint = async () => {
     // if (localContract) {
      const receipt = await localContract.methods
        .mint("1")
        .send({ from: accounts });
      return receipt;
    
    //} 
  };

  const loadWeb3 = async () => {
    if (ethereum) {
      await window.ethereum.enable();
    } else if (web3) {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const handlePopup = () => {
    setPopup((popUp) => !popUp);
  };

  return (
    <div className="bg-secondary w-auto min-h-full pb-20">
      <Layout  handlePopup={handlePopup} /* handleWallet={handleWallet}  */ />
      {popup ? (
        <PopupForm
          pinata_api_key={pinata_api_key}
          pinata_secret_api_key={pinata_secret_api_key}
          mint={mint}
          reRender={reRender}
          walletAccount={accounts}
          handlePopup={handlePopup}
        />
      ) : null}
      <Switch>
        <Route
          path="/product/:hash"
          render={({ match }) => <SingleView hash={match.params.hash} />}
        />
        <Route path="/" exact render={() => <HomePage />} />
      </Switch>
    </div>
  );
}

export default App;
