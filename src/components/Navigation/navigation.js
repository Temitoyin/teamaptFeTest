import React from "react";
import Icon from "../Icon/icon";
import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Icon name="logo" />
      <div className={styles.navigation__date}>
        <Icon name="calender" />
        <div className={styles.navigation__date_info}>
          <p>Day 1</p>
          <small>of 5</small>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
