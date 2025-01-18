import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { fetchCountries } from "../Api/Api";
import CardComponent from "../Components/CardComponent/CardComponent";
import SearchComponent from "../Components/SearchComponent/SearchComponent";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  useEffect(() => {
    fetchCountries().then((data) =>{ 
      setCountries(data);
      setFilterCountries(data);
    });
  }, []);




  return (
    <>
      <SearchComponent  countries={countries} setFilterCountries={setFilterCountries} />
      <div className={styles.cardWrapper}>
        {filterCountries.map((country) => (
          <CardComponent data={country} />
        ))}
      </div>
    </>
  );
}
