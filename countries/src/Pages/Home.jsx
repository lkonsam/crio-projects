import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { fetchCities, fetchCountries, fetchStates } from "../Api/Api";
import SelectOption from "../Components/SelectOption";

export default function Home() {
  const [data, setData] = useState({ countries: [], states: [], cities: [] });
  const [formData, setFormData] = useState({
    countries: "",
    states: "",
    cities: "",
  });

  function fetchData(key, callback) {
    callback().then((response) =>
      setData((prev) => ({ ...prev, [key]: response }))
    );
  }

  function inputHandler(event) {
    const target = event.target;

    setFormData({ ...formData, [target.name]: target.value });

    if (target.name === "countries") {
        setData( (prev) => ({ ...prev, states: [], cities: [] })  ); 
        setFormData((prev) => ({ ...prev,   states: "",   cities: "" })  );
      fetchData("states", () => fetchStates(target.value));  
    } 
    else if (target.name === "states") {
        setData( (prev) => ({ ...prev, cities: [] })  ); 
      setFormData((prev) => ({ ...prev,  cities: "" })  );
      fetchData("cities", () => fetchCities(formData.countries, target.value));
    } 
  }

  useEffect(() => {
    fetchData("countries", fetchCountries);
  }, []);

  return (
    <>
      <h3>Select Location</h3>
      <div className={styles.inputWrapper}>
        <select
          name="countries"
          className={styles.select}
          onChange={inputHandler}
          value={formData.countries}
        >
          <option value="" disabled>
            Select Country
          </option>
          <SelectOption options={data.countries} />
        </select>

        <select
          name="states"
          className={styles.select}
          disabled={data.states.length === 0}
          onChange={inputHandler}
          value={formData.states}
        >
          <option value="" disabled>
            Select State
          </option>
          <SelectOption options={data.states} />
        </select>

        <select
          name="cities"
          className={styles.select}
          disabled={data.cities.length === 0}
          onChange={inputHandler}
          value={formData.cities}
        >
          <option value="" disabled>
            Select City
          </option>
          <SelectOption options={data.cities} />
        </select>
      </div>
      {formData.cities !== "" && (
        <p>
          {" "}
          <b>
            You selected{" "}
            <span className={styles.cityName}>{formData.cities}</span>,
          </b>{" "}
          {formData.states}, {formData.countries}{" "}
        </p>
      )}
    </>
  );
}
