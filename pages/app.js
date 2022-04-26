import React, { useContext } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ethlogo from '../public/ethereum_eth_logo.svg';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';

import Loader from '../components/Loader';

export default function MainApp() {
  const { connectWallet, currentAccount, formData, sendTransaction, handle_change } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount } = formData;
    e.preventDefault();
    if (!addressTo || !amount) return;
    sendTransaction();
  };

  return (
    <div className={styles.mainapp_page}>
      <Head>
        <title>ApexChain &mdash; Transfer</title>
        <meta name="description" content="ApexChain" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div>
        <div id={styles.back_button}>
          <Link href="/">← back</Link>
        </div>
        <div id={styles.mainapp_title}>
          Transfer
        </div>
        <div className={styles.mainapp_container}>
          <div id={styles.eth_card_mainapp} className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5">
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
        &nbsp; <br /><br />
        <p id="tx_message" className={styles.tx_message}></p>
        {/* <p className={styles.tx_message}>
          Transaction is initiated.<br /><br />
          Transaction Hash: 0xklegkal0xsngk <br /> <br /><br />
        </p> */}
      </div >
    </div >
  );
};