import React from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";

export default function NavBar() {
  return (
    <>
      <div className={styles.NavBar}>
        <Logo />
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
    </>
  );
}
