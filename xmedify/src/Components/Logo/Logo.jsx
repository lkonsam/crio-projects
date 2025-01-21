import styles from "./Logo.module.css";
import logo from "../../Assets/guard.png";

export default function Logo() {
  return (
    <>
      <div className={` flex-center ${styles.logo}`}>
        <div className={`${styles.imgWrapper} flex-center`}>
          <img src={logo} className={styles.logoImg} alt="Medify" />
        </div>
        <span className={styles.logoText}>Medify</span>
      </div>
    </>
  );
}
