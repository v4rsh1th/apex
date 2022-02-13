import Head from 'next/head'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Creators() {
  return (
    <div>
      <Head>
        <title>ApexChain &mdash; Creators</title>
        <meta name="description" content="ApexChain" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <p>
        these are the creators
      </p>
    </div>
  );
}