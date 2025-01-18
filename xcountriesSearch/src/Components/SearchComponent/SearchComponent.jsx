import React, { useState } from "react";
import styles from "./SearchComponent.module.css";

export default function SearchComponent({ countries, setFilterCountries }) {
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState(null);

  const debounceSearch = (event) => {
    if (debounce) {
      clearTimeout(debounce);
    }
    setSearch(event.target.value);
    setDebounce(
      setTimeout(() => {
        setFilterCountries(
          search.trim() === ""
            ? countries
            : countries.filter((country) =>
                country.common.toLowerCase().includes(search.toLowerCase())
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
