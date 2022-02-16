import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import varshith from '../public/punks/v4rsh1th1743.png';
import prani from '../public/punks/prani3733.png';
import sridhar from '../public/punks/sridhar9777.png';
import rachana from '../public/punks/rach3465.png';

export default function Creators() {
  return (
    <div className={styles.creators_page}>
      <Head>
        <title>ApexChain &mdash; Creators</title>
        <meta name="description" content="ApexChain" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={styles.creators_content}>
        <div id={styles.back_button}>
          <Link href="/">← back</Link>
        </div>
        <div id={styles.creators_title}>
          ApexChain // Creators
        </div>
        <div id={styles.punks_container}>
          <div className={styles.punks_left}>
            <div className={styles.punks}>
              <div className={styles.punks_name}>
                Varshith [v4rsh1th]
              </div>
              <div className={styles.punks_description}>
                <Image id={styles.punkpic} src={varshith} width={"120px"} height={"120px"} alt="punks" />
              </div>
            </div>
          </div>

          <div className={styles.punks_left}>
            <div className={styles.punks}>
              <div className={styles.punks_name}>
                Pranitha [pr4n1th4]
              </div>
              <div className={styles.punks_description}>
                <Image id={styles.punkpic} src={prani} width={"120px"} height={"120px"} alt="punks" />
              </div>
            </div>
          </div>
        </div>

        <div id={styles.punks_container}>
          <div className={styles.punks_left}>
            <div className={styles.punks}>
              <div className={styles.punks_name}>
                Rachana [r4ch4n4]
              </div>
              <div className={styles.punks_description}>
                <Image id={styles.punkpic} src={rachana} width={"120px"} height={"120px"} alt="punks" />
              </div>
            </div>
          </div>

          <div className={styles.punks_left}>
            <div className={styles.punks}>
              <div className={styles.punks_name}>
                Sridhar [sr1dh4r]
              </div>
              <div className={styles.punks_description}>
                <Image id={styles.punkpic} src={sridhar} width={"120px"} height={"120px"} alt="punks" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
