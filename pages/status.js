import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Status() {
  return (
    <div className={styles.status_page}>
      <Head>
        <title>ApexChain &mdash; Status</title>
        <meta name="description" content="ApexChain" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div id={styles.back_button}>
        <Link href="/">← back</Link>
      </div>
      <div>
        <p id={styles.nft_construct}>
          Page under development. <br />
          Love, Varshith :)
        </p>
      </div>
    </div>
  );
}
