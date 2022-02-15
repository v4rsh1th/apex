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
      <p>Hey</p>
    </div>
  );
}
