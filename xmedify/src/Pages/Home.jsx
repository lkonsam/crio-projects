import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import TopBar from "../Components/TopBar/TopBar";
import NavBar from "../Components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <NavBar />
    </>
  );
}
