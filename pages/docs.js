import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import metamask_setup from '../public/pix/metamask.png';
import connect_wallet from '../public/pix/connect.png';
import transfer_ from '../public/pix/transfer_.svg';

export default function Docs() {
  return (
    <div className={styles.docs_page}>
      <Head>
        <title>ApexChain &mdash; Docs</title>
        <meta name="description" content="ApexChain" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={styles.docs_content}>
        <div id={styles.back_button}>
          <Link href="/">← back</Link>
        </div>
        <div id={styles.docs_title}>
          ApexChain // Docs
        </div>
        <div className={styles.docs_container}>
          <div className={styles.github}>
            <p style={{ "fontFamily": "Sanchez", "textDecoration": "underline", "cursor": "pointer" }} >
              <a href="https://github.com/v4rsh1th/apex/issues" target={"_blank"} rel="noopener noreferrer" >Contribute on GitHub <i className="bi bi-github"></i></a>
            </p><br />
            <p id={styles.opensource_description}>
              <strong>ApexChain</strong> is Open Source under MIT License and is open for anyone to contribute.
            </p>
          </div>
          <div id={styles.docs_content}>
            <h1 id={styles.docs_content_heading}>
              SETTING UP YOUR WALLET
            </h1>
            <p id={styles.docs_explanation}>
              A wallet application makes it easy to set up Ethereum accounts, move ETH around, approve and initiate transactions, and connect to web applications.
              <br /><br />
              Once you are connected, you will be able to send assets from your wallet to your friends&apos;.
              <br /><br />
              a. Go to <u><a href="https://metamask.io/" target={"_blank"} rel="noreferrer noopener" >https://metamask.io/</a></u> and download on your browser.
              <br />
              b. Create your wallet in there and make sure you keep your secret recovery phrase safe.
              <br />
              c. And at this point, you are all set for using any dApp.
            </p>
            <br />
            <div className={styles.docs_pics}>
              <Image src={metamask_setup} alt="Metamask setup" layout="responsive" priority />
            </div>
            <br /><br />
            <h1 id={styles.docs_content_heading}>
              SIGN-IN WITH METAMASK TO APEXCHAIN
            </h1>
            <p id={styles.docs_explanation}>
              a. Click on the &quot;Connect to Wallet&quot; button in the top right of the screen. Or the big button in the middle of the screen.
              <br />
              b. A pop-up should appear with an option for MetaMask. Click &quot;Connect to your MetaMask Wallet&quot;.
              <br />
              c. Choose your account and click Next.
            </p>
            <br />
            <div className={styles.docs_pics}>
              <Image src={connect_wallet} alt="Connect to your wallet" layout="responsive" priority />
            </div>
            <br /><br />
            <h1 id={styles.docs_content_heading}>
              TRANSFER
            </h1>
            <p id={styles.docs_explanation}>
              a. The first input field is where you will have to enter the wallet address that you are sending the assets to (recipient).
              <br />
              b. The second input field is where you will have to enter the amount of assets that you sending.
              <br />
              c. Hit &quot;Send&quot; and a Metamask popup should appear asking for the confirmation.
            </p>
            <br />
            <div className={styles.docs_pics}>
              <Image src={transfer_} alt="Connect to your wallet" layout="responsive" priority />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
