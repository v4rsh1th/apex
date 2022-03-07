import React, { useContext } from 'react';
import Image from 'next/image';
import wallet from "../public/wallet.svg";
import ethlogo from '../public/ethereum_eth_logo.svg';
import eth from "../public/eth.svg";
import account from "../public/account.png";
import styles from '../styles/Home.module.css';
import { TransactionContext } from '../context/TransactionContext';
import { Loader } from './Loader';
import { shortenAddress } from '../utils/shortenAddress';

const Squeeze = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handle_change } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount } = formData;
    e.preventDefault();
    if (!addressTo || !amount) return;
    sendTransaction();
  }

  return (
    <div id={styles.welcome_start} className="flex w-full justify-center item-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className={styles.title}>
            ApexChain
          </h1>
          <h1 id={styles.main_line} className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send digital assets across the galaxies
          </h1>
          <p id={styles.description} className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            The easiest way to send and spend
          </p>
          {!currentAccount ? (
            <button
              id={styles.bigger_btn}
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 p-4 cursor-pointer"
            >
              <div className={styles.connect_wallet_text}>
                <div className="connect_wallet_column">
                  <p className="text-white text-base font-semibold">
                    Connect to Wallet
                  </p>
                </div>
                &nbsp; &nbsp;
                <div className="connect-wallet-column">
                  <Image src={wallet} alt="logo" width={"35px"} quality={100} />
                </div>
              </div>
            </button>
          ) :
            <div className={styles.after_connected_address_big}>
              <div className={styles.address_pic}>
                <div className={styles.address_picture}>
                  <Image src={account} width={"80px"} height={"80px"} alt="Account avatar" />
                </div>
                <div className={styles.address_picture}>
                  {shortenAddress(currentAccount)}
                </div>
              </div>
            </div>
          }
          <div className={styles.offerings}>
            <div id={styles.offerings_title}>
              Pay anyone, instantly
            </div>
            <div id={styles.offerings_pic_eth}>
              <Image src={eth} alt="fast transactions" width={"150px"} height={"150px"} />
            </div>
          </div>
          <div className={styles.offerings_pic_flex}>
            <div id={styles.offerings_description}>
              <p>
                Send and receive digital assets anytime, anywhere. It&apos;s fast and free, a wallet and 0x address is all you need to get started.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          {/* <div id={styles.card_description} className="sm:w-96 w-full flex flex-col justify-start items-center text-white">
            <p>Personalized Ethereum card</p>
            <p id={styles.card_description_second_part}>
              Connect your wallet to view and use it elsewhere
            </p>
          </div> */}
          <div id={styles.eth_card} className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <Image src={ethlogo} alt="eth" width={"18px"} height={"30px"} quality={100} />
              </div>
              <div>
                <p id={styles.eth_card_address} className="text-white font-light text-sm text-left">
                  {shortenAddress(currentAccount)}
                </p>
                <div id={styles.eth_card_address_desc}>
                  <p>
                    Wallet 0x address
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.etherscan_block}>
            <p><a href="https://ropsten.etherscan.io/" target={"_blank"} rel="noopener noreferrer" >Etherscan ↝</a></p>
          </div>
          <br />
          <div id={styles.card_description} style={{ fontSize: "11.5px" }}>
            Using Etherscan can help you understand exactly how you interact with the blockchain, other wallets, and DApps. This knowledge can also help you stay safe and spot suspicious behavior.
          </div>
          <div id={styles.ugQLp} className="p-5 sm:w-96 w-full flex flex-col justify-start items-center text-white">
            <div id={styles.swap_text}>Transfer</div>
            <input id={styles.input_block_two} name="addressTo" type="text" placeholder="0x address" onChange={e => handle_change(e, 'addressTo')} />
            <div id={styles.arrow}>
              &darr;
            </div>
            <input id={styles.input_block_one} name="amount" type="number" placeholder="0.0" onChange={e => handle_change(e, 'amount')} />
            <br />
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                id={styles.ultimate_send_btn}
                onClick={handleSubmit}
              >
                Send
              </button>
            )}
          </div>
        </div>
      </div>
    </div >
  )
}
export default Squeeze;
