import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

if (typeof window !== "undefined") {
  window.ethereum;
}

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
  });

  const handle_change = (e, name) => {
    setFormData(prevState => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask.");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found.");
      }
    } catch (error) {
      console.error(error);
      // throw new Error("No ethereum object.");
    }
  };


  // ######
  // ######
  // ######

  // const connectWallet = async () => {
  //   try {
  //     if (!ethereum) return alert("Please install Metamask.");
  //     const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  //     setCurrentAccount(accounts[0]);
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error("No ethereum object.");
  //   }
  // };

  // ######
  // ######
  // ######

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } else {
      window.open("http://metamask.io");
    }
  };

  const sendTransaction = async (connectedAccount = currentAccount) => {
    try {
      if (!ethereum) return alert("Please install Metamask.");

      const { addressTo, amount } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      // await ethereum.request({
      //   method: "eth_sendTransaction",
      //   params: [{
      //     from: connectedAccount,
      //     to: addressTo,
      //     gas: "0x5208",
      //     value: parsedAmount._hex,
      //   }]
      // });

      // ######
      // ######
      // ######

      const _txHash = await window.ethereum
        .request({
          method: 'eth_sendTransaction',
          params: [{
            from: connectedAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          }],
        });

      document.getElementById("tx_hash").innerHTML = _txHash;
      document.getElementById("tx_message").innerHTML =
        "<u>Check transaction details </u>- <br /><br /><br />" +
        "<b>Transaction is initiated. </b> <br/><br/>" +
        "Transaction Hash:";
      document.getElementById("link_to_verify").innerHTML = "<a href='/verify' target='_blank'>Verify transaction</a>";

      console.log(_txHash);
      console.log("https://ropsten.etherscan.io/tx/" + _txHash);

      // ######
      // ######
      // ######

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount
      );
      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{
      connectWallet,
      currentAccount,
      formData,
      setFormData,
      handle_change,
      sendTransaction
    }}>
      {children}
    </TransactionContext.Provider>
  );
};
