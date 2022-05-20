import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Verify() {

  return (
    <div className={styles.verify_page}>
      <Head>
        <title>ApexChain &mdash; Verify</title>
        <meta name="description" content="ApexChain" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div id={styles.back_button}>
        <Link href="/">← back</Link>
      </div>
      <div id={styles.verify_title}>
        Verify
      </div>
      <div className={styles.verify_container}>
        <div className={styles.verify_form}>
          Transaction Hash <i>(txhash)</i>
          <input type="text"
            id="inputted_txhash"
            className={styles.inputted_txhash}
            placeholder="0x txhash"
            autoFocus
          />

          <input type="button"
            className={styles.verify_button_polygon}
            id="verify_btn"
            value="Verify on Polygon"
            style={{ "background": "hsl(235,calc(var(--saturation-factor,1)*85.6%),64.7%);" }}
            onClick={() => {
              window.open("https://mumbai.polygonscan.com/tx/" + document.getElementById("inputted_txhash").value);
            }}
          />
        </div>
        <div className={styles.verify_links_route}>
          <Link href="/verify">Verify on Ethereum</Link>
        </div>
        <div id={styles.verify_description}>
          The transactions you make on the blockchain are initiated and confirmed with a unique hash value that do not clash with any other transaction. You can verify every transaction by providing their hash value, since everything is open to public on blockchain.
        </div>
      </div>
    </div >
  );
}
