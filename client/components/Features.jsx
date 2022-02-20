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
              There are no dependencies—settlement houses, card processors or banks. All ApexChain transactions are confirmed in 10 - 20 seconds.
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

      <div className={styles.footer_container}>
        afll
      </div>
    </div>
  );
}

export default Features;