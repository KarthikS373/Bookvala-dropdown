import React from "react";

import styles from "../styles/Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.title}>
        Made by <a href={`mailto:${props.email}`}>{props.name || "Anonymous"}</a>
      </div>
    </div>
  );
};

export default Footer;
