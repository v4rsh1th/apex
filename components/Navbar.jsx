import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CgMenuRightAlt } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { TransactionContext } from '../context/TransactionContext';
import styles from '../styles/Home.module.css';
import logo from '../public/logo.svg';
import account from "../public/account.png";
import { shortenAddress } from '../utils/shortenAddress';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div id={styles.apexlogo} className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image src={logo} alt="logo" className="cursor-pointer" width={"70px"} quality={100} />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li id={styles.navbar_links}>
          <Link href="/docs">
            <a>Docs</a>
          </Link>
        </li>
        <li id={styles.navbar_links}>
          <Link href="/verify">
            <a>Verify</a>
          </Link>
        </li>
        <li id={styles.navbar_links}>
          <Link href="/creators">
            <a>Creators</a>
          </Link>
        </li>
        <li>
          {!currentAccount ? (
            <button className={styles.connect_btn_navbar}
              type="button"
              onClick={connectWallet}
            >
              Connect to Wallet
            </button>
          ) :
            <div className={styles.after_connected_address_small}>
              <div className={styles.address_pic_navbar}>
                <div className={styles.address_picture_navbar}>
                  <Image src={account} width={"30px"} height={"30px"} alt="Account avatar" />
                </div>
                <div className={styles.address_picture_navbar}>
                  {shortenAddress(currentAccount)}
                </div>
              </div>
            </div>
          }
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <CgMenuRightAlt fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <CgCloseO fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul id={styles.blue_glassmorphism} className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md text-white animate-slide-in"
          >
            <li className="text-xl w-full my-4"><CgCloseO onClick={() => setToggleMenu(false)} /></li>
            <li>
              <Link href="/docs">
                <a>Docs</a>
              </Link>
            </li>
            <li>
              <Link href="/verify">
                <a>Verify</a>
              </Link>
            </li>
            <li>
              <Link href="/creators">
                <a>Creators</a>
              </Link>
            </li>
            <li>
              {!currentAccount ? (
                <button
                  className={styles.connect_btn_navbar}
                  type="button"
                  onClick={connectWallet}
                >
                  Connect to Wallet
                </button>) :
                <div className={styles.after_connected_address_small}>
                  <div className={styles.address_pic_navbar}>
                    <div className={styles.address_picture_navbar}>
                      <Image src={account} width={"30px"} height={"30px"} alt="Account avatar" />
                    </div>
                    <div className={styles.address_picture_navbar}>
                      {shortenAddress(currentAccount)}
                    </div>
                  </div>
                </div>
              }
            </li>
          </ul>
        )}
      </div>
    </nav >
  );
};

export default Navbar;