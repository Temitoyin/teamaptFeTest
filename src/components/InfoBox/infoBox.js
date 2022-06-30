import React from "react";
import styles from "./infoBox.module.scss";
const InfoBox = () => {
  return (
    <div className={styles.infoBox}>
      <h1>🚀 How To Play</h1>
      <ol className={styles.infoBox__list}>
        <li>Guess the right combination of numbers</li>
        <li>
          Win <span>N3,000,000</span> instantly
        </li>
      </ol>
      <p className={styles.infoBox__subText}>
        Sounds unbelievable? Well, guess right & see for yourself!
      </p>
      <div className={styles.infoBox__notification}>
        <div>💡</div>
        <p>
          Think well before you guess. You have only <span>2</span> attempts per
          day and even after you wi, you can come back the next day to try for
          another jackpot!
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
