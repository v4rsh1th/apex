import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Nft() {
  return (
    <div className={styles.nft_page}>
      <Head>
        <title>ApexChain &mdash; NFT</title>
        <meta name="description" content="ApexChain" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <p style={{ color: "white", textAlign: "center" }} >
        Page under development. <br />
        Love, Varshith :)
      </p>
    </div>
  );
}
