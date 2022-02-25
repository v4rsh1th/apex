import Head from 'next/head';
import Navbar from '../components/Navbar';
import Squeeze from '../components/Squeeze';
import styles from '../styles/Home.module.css';
import Features from '../components/Features';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ApexChain</title>
        <meta name="description" content="ApexChain" />
        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
      </Head>
      <div className="min-h-screen">
        <div className={styles.gradient_bg_welcome}>
          <Navbar />
          <Squeeze />
          <Features />
        </div>
      </div>
    </div>
  );
}
