import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import heroImg from "../../Assets/hero_image.png";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className={styles.header}>
        <NavBar />
        <div className={styles.hero}>
          <div>
            <p>Skip the travel! Find Online</p>
            <h1>
              Medical <span className={styles.centerText}>Centers</span>
            </h1>
            <p className="text-secondary">
              Skip the travel! Find Online Medical Centers Connect instantly
              with a 24x7 specialist or choose to video visit a particular
              doctor.
            </p>
            <button className={styles.button}>Find Centers</button>
          </div>
          <div>
            <img src={heroImg} alt="Hero" />
          </div>
        </div>
      </div>
      <div className={styles.searchCityWrapper}>
        {/* Search input and some icon here */}
      </div>
      <div className={styles.findSpecialisationWrapper}>
        <h1>Find By Specialisation</h1>
      </div>
    </>
  );
}
