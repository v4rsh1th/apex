import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Nft() {
  return (
    <div className={styles.creators_page}>
      <Head>
        <title>ApexChain &mdash; NFT</title>
        <meta name="description" content="ApexChain" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <p>Hey</p>
    </div>
  );
}
