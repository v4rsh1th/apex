import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Docs() {
  return (
    <div className={styles.docs_page}>
      <Head>
        <title>ApexChain &mdash; Docs</title>
        <meta name="description" content="ApexChain" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={styles.docs_content}>
        <p style={{ color: "white", textAlign: "center" }} >
          Page under development. <br />
          Love, Varshith :)
        </p>
      </div>
    </div>
  );
}
