import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Creators() {
  return (
    <div className={styles.creators_page}>
      <Head>
        <title>ApexChain &mdash; Creators</title>
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
