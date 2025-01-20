import React from "react";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <>
      <p className={`${styles.topText} flex-center`}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </p>
    </>
  );
}
