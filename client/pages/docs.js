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
          <p style={{ "fontFamily": "Sanchez", "textDecoration": "underline", "cursor": "pointer" }} >
            <a href="https://github.com/v4rsh1th/apex" target={"_blank"} rel="noopener noreferrer" >Contribute on GitHub <i className="bi bi-github"></i></a>
          </p><br />
          <p>
            <strong>ApexChain</strong> is Open Source under MIT License and is open for everyone to contribute.
          </p>
        </div>
      </div>
    </div >
  );
}
