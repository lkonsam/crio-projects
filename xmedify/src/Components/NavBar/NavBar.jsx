import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.NavBar} ${menuOpen ? styles.open : ""}`}>
      <Logo />
      <div className={styles["menu-toggle"]} onClick={toggleMenu}>
        &#9776;
      </div>
      <ul>
        <li>
          <a href="/">Find Doctors</a>
        </li>
        <li>
          <a href="/about">Hospitals</a>
        </li>
        <li>
          <a href="/contact">Medicines</a>
        </li>
        <li>
          <a href="/contact">Surgeries</a>
        </li>
        <li>
          <a href="/contact">Software for Provider</a>
        </li>
        <li>
          <a href="/contact">Facilities</a>
        </li>
        <li>
          <a href="/contact">
            <button>My Bookings</button>
          </a>
        </li>
      </ul>
    </div>
  );
}
