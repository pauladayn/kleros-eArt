import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Web3 from "web3";
import Layout from "./components/layout/Layout";
import SingleView from "./components/SingleView";
import HomePage from "./components/HomePage";
import Artwork from "./abis/contracts/Artwork.json";
import PopupForm from "./components/PopupForm";

function App() {
  //va a recibir la data de la cta conectada a MetaMask a través de un pedido asíncrono a la blockchain
  const [accounts, setAccount] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [artworkName, setArtworkName] = useState(""); //va a ser el nombre string con el que vamos a mintear el token en el contract
  const [popup, setPopup] = useState(false);
  const [localContract, setLocalContract] = useState("");
  const ethereum = window.ethereum;
  const web3 = new Web3(ethereum);

  useEffect(() => {
    //  if(localContract) {
    //  console.log("llega a este if con localContract")
    //(async() => await mint()) ()

    // }

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
    console.log(accounts);
  };

  const interactArtwork = async () => {
    const networkId = await web3.eth.net.getId();
    console.log(networkId, "networkID");
    const deployedNetwork = Artwork.networks[networkId];
    const abi = Artwork.abi;
    const artworkInstance = new web3.eth.Contract(abi, deployedNetwork.address);
    //  console.log(artworkInstance, "ADENTRO DE INTERACT");
    setLocalContract(artworkInstance);
   
  };

  console.log(localContract, "lo llamo acá afuera y existe");


  const mint = async () => {
    console.log(accounts);
    console.log(localContract, "ADENTRO DE MINTTTTT");
 
 
     // if (localContract) {
      const receipt = await localContract.methods
        .mint("1")
        .send({ from: accounts });
      console.log(receipt, "RECEIPTTTTTTT WTF");
      return receipt;
    
    //} 
  };

  const loadWeb3 = async () => {
    if (ethereum) {
      await window.ethereum.enable();
      console.log("carga web3");
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
      <Layout handlePopup={handlePopup} /* handleWallet={handleWallet}  */ />
      {popup ? (
        <PopupForm
          mint={mint}
          walletAccount={accounts}
          handlePopup={handlePopup}
        />
      ) : null}
      <Switch>
        <Route
          path="/product/:id"
          render={({ match }) => <SingleView id={match.params.id} />}
        />
        <Route path="/" exact render={() => <HomePage /* mint={mint} */ />} />
      </Switch>
    </div>
  );
}

export default App;
