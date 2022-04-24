import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.svg';
import styles from '../styles/Home.module.css';

const Features = () => {
  return (
    <div className={styles.features_content}>
      <div className={styles.features_container}>
        <div className={styles.features_left}>
          <div className={styles.qualities}>
            <div className={styles.qualitites_header}>
              Stable
            </div>
            <div className={styles.qualities_description}>
              ApexChain is pegged to be having zero downtime as it inherits Ethereum blockchain without any censorship, fraud or third-party interference.
            </div>
          </div>
        </div>
        <div className={styles.features_left}>
          <div className={styles.qualities}>
            <div className={styles.qualitites_header}>
              Secure
            </div>
            <div className={styles.qualities_description}>
              Modular &apos;security as a service&apos;, provided either by Ethereum or by a pool of professional validators.
            </div>
          </div>
        </div>

        <div className={styles.features_right}>
          <div className={styles.qualities}>
            <div className={styles.qualitites_header}>
              Fast
            </div>
            <div className={styles.qualities_description}>
              There are no dependencies—settlement houses, card processors or banks. All ApexChain transactions are confirmed in 10 - 40 seconds.
            </div>
          </div>
        </div>
        <div className={styles.features_right}>
          <div className={styles.qualities}>
            <div className={styles.qualitites_header}>
              Public
            </div>
            <div className={styles.qualities_description}>
              ApexChain is open-source and transparent. Every transaction is recorded publicly on the blockchain and can be verified by everyone.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footer_container_left}>
          <div id={styles.footer_logo_name}>
            <Image src={logo} alt="logo" className="cursor-pointer" width={"70px"} quality={100} />
            <h1 className={styles.title}>
              ApexChain
            </h1>
          </div>
          <br /> <br />
          <div id={styles.footer_brag}>
            THE EASIEST WAY TO SEND AND SPEND
          </div>
        </div>

        <div className={styles.footer_container_right}>
          <p>
            <strong>ApexChain</strong> is a platform, not a bank.
          </p>
          <p>
            Open Source // MIT License
          </p>
          <p style={{ "fontFamily": "Sanchez", "textDecoration": "underline" }}>
            <Link href="/license">
              <a>LICENSE <i style={{ "fontSize": "13px" }} className="bi bi-arrow-up-right"></i></a>
            </Link>
          </p>
          <br />
          <p style={{ "fontFamily": "Sanchez", "textDecoration": "underline", "cursor": "pointer" }} >
            <a href="https://github.com/v4rsh1th/apex/issues" target={"_blank"} rel="noopener noreferrer" >Contribute on GitHub <i className="bi bi-github"></i></a>
          </p>
          <br />
          <br />
          &copy; 2022 ApexChain
          <br />
          <br />
          <p id={styles.status}>
            <a href="https://apexchain.statuspage.io/" target={"_blank"} rel="noopener noreferrer">🟢 Status </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
