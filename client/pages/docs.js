import Head from 'next/head'
import Link from 'next/link';
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
        <div id={styles.back_button}>
          <Link href="/">← back</Link>
        </div>
        <div id={styles.docs_title}>
          ApexChain // Docs
        </div>
        <div id={styles.docs_container}>

        </div>
      </div>
    </div>
  );
}
