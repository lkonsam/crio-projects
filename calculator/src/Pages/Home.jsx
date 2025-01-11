import { useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [solution, setSolution] = useState("");

  const [expresion, setExpresion] = useState("");

  const inputHandler = (event) => {
    setExpresion(event.target.value);
  };

  const inputButtonHandler = (event) => {
    const value = event.target.textContent.trim();
    switch (value) {
      case "C":
        setExpresion("");
        setSolution("");
        break;
      case "=":
        try {
          const result = eval(expresion);
          setSolution(result.toString());
        } catch (error) {
          setSolution("Error");
        }
        break;
      default:
        setExpresion((prev) => prev + value);
        break;
    }
  }


  return (
    <>
      <div className={styles.calculator}>
        <h1>React Calculator</h1>
        <input
          type="text"
          name="input"
          className={styles.input}
          onChange={inputHandler}
          value={expresion}
        />
        <div className={styles.solution}>{solution}</div>
        <div className={styles.buttonDiv}>
          <button className={styles.button} onClick={inputButtonHandler}>7</button>
          <button className={styles.button} onClick={inputButtonHandler}>8</button>
          <button className={styles.button} onClick={inputButtonHandler}>9</button>
          <button className={styles.button} onClick={inputButtonHandler}>+</button>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.button} onClick={inputButtonHandler}>4</button>
          <button className={styles.button} onClick={inputButtonHandler}>5</button>
          <button className={styles.button} onClick={inputButtonHandler}>6</button>
          <button className={styles.button} onClick={inputButtonHandler}>-</button>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.button} onClick={inputButtonHandler}>1</button>
          <button className={styles.button} onClick={inputButtonHandler}>2</button>
          <button className={styles.button} onClick={inputButtonHandler}>3</button>
          <button className={styles.button} onClick={inputButtonHandler}>*</button>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.button} onClick={inputButtonHandler}>C</button>
          <button className={styles.button} onClick={inputButtonHandler}>0</button>
          <button className={styles.button} onClick={inputButtonHandler}>=</button>
          <button className={styles.button} onClick={inputButtonHandler}>/</button>
        </div>
      </div>
    </>
  );
}
