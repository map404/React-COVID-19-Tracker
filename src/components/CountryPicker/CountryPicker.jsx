import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountry, setFetchedCountry] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountry(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountry]);

  return (
    <div className={styles.container}>
      <FormControl className={styles.formcontrol}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value="">Global</option>
          {fetchedCountry.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
