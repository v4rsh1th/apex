import Image from 'next/image';
import { AiFillPlayCircle } from 'react-icons/ai';
import wallet from "../public/wallet.svg";
import ethlogo from '../public/ethereum_eth_logo.svg'

import styles from '../styles/Home.module.css'

import { Loader } from './Loader';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const connectWallet = () => {

  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className={styles.title}>
            ApexChain
          </h1>
          <h1 id={styles.main_line} className="text-3xl sm:text-5xl text-white py-1">
            Send digital assets across the galaxies
          </h1>
          <p id={styles.description} className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            The easiest way to send, spend, and bank
          </p>
          <button
            id={styles.bigger_btn}
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 p-4 cursor-pointer"
          >
            <div className={styles.connect_wallet_text}>
              <div className="connect-wallet-column">
                <p className="text-white text-base font-semibold">
                  Connect to Wallet
                </p>
              </div>
              &nbsp; &nbsp;
              <div className="connect-wallet-column">
                <Image src={wallet} alt="logo" width={"25px"} />
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div id={styles.card_description} className="sm:w-96 w-full flex flex-col justify-start items-center text-white">
            <p>Personalized Ethereum card</p>
            <p id={styles.card_description_second_part}>
              Connect your wallet to view and use it elsewhere
            </p>
          </div>
          <div id={styles.eth_card} className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 flex justify-center items-center">
                  <Image src={ethlogo} alt="eth" width={"18px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Welcome;