import Head from 'next/head';
import Navbar from '../components/Navbar';
import Squeeze from '../components/Squeeze';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Features from '../components/Features';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ApexChain</title>
        <meta name="description" content="ApexChain" />
        <link rel="icon" href="/logo.svg" />
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
