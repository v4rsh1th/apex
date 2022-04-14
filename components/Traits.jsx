import styles from '../styles/Home.module.css';

const Traits = () => {
  return (
    <div className={styles.traits_content}>
      <div id={styles.traits_container}>
        <div className={styles.traits_left}>
          <div className={styles.traits_name}>
            Send Instantly
          </div>
          <div className={styles.traits_description}>
            No forms, no selfies. Transfer assets anytime with ease.
          </div>
        </div>

        <div className={styles.traits_left}>
          <div className={styles.traits_name}>
            Private &amp;  Secure
          </div>
          <div className={styles.traits_description}>
            Only you can access your wallet. We don&apos;t collect any personal data.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traits;
