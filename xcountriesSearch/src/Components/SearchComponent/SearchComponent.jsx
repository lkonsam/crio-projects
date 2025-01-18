import React, { useState } from "react";
import styles from "./SearchComponent.module.css";

export default function SearchComponent({ countries, setFilterCountries }) {
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState(null);

  const debounceSearch = (event) => {
    const searchValue = event.target.value; 
    setSearch(searchValue); 
  
    if (debounce) {
      clearTimeout(debounce); 
    }
  
    setDebounce(
      setTimeout(() => {
        setFilterCountries(
          searchValue.trim() === ""
            ? countries 
            : countries.filter((country) =>
                country.common.toLowerCase().includes(searchValue.toLowerCase())
              )
        );
      }, 500)
    );
  };
  

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={debounceSearch}
          className={styles.input}
          placeholder="Search for countries..."
        />
      </div>
    </>
  );
}
