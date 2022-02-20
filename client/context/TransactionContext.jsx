import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

// const { ethereum } = window;
// window.ethereum;

// if (typeof window !== "undefined") {
// }

// let eth;

if (typeof window !== "undefined") {
  window.ethereum
}

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionContract;
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: ""
  });

  const handle_change = (e, name) => {
    setFormData(prevState => ({ ...prevState, [name]: e.target.value }));
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask.");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        // getAllTransactions();
      } else {
        console.log("No accounts found.");
      }
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object.");
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask.");
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object.");
    }
  }

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask.");

      const { addressTo, amount } = formData;
      const transactionContract = getEthereumContract();

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: "0x5208", // 21000 GWEI
          value: amount, // 0.00001
        }]
      })

    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object.");
    }
  }

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
  )
}