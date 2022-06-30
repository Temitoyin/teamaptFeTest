import React from "react";
import Icon from "../Icon/icon";
import styles from "./button.module.scss";

function Button() {
  return (
    <button className={styles.button}>
      Play The Game <Icon className={styles.arrowIcon} name="arrowRight" />
    </button>
  );
}

export default Button;
