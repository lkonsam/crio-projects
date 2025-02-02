import styles from "./Card.module.css";
export default function Card({ title, description }) {
  return (
    <>
      <div className={`${styles.card} weather-card`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}
