import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Docs() {
  return (
    <div className={styles.docs_page}>
      <Head>
        <title>ApexChain &mdash; Docs</title>
        <meta name="description" content="ApexChain" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
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
              <a href="https://github.com/v4rsh1th/apex" target={"_blank"} rel="noopener noreferrer" >Contribute on GitHub <i className="bi bi-github"></i></a>
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
              a. Go to <u><a href="https://metamask.io/">https://metamask.io/</a></u> and download on your browser.
              <br />
              b. Create your wallet in there and make sure you keep your secret recovery phrase safe.
              <br />
              c. And at this point, you are all set for using any dApp.
            </p>
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
          </div>
        </div>
      </div>
    </div >
  );
}
