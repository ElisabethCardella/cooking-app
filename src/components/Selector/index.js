import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Selector = () => {
  const [countries, setCountries] = useState([]);
  const [selectCountry, setSelectCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div>
      <Select
        onChange={setSelectCountry}
        id="countries"
        placeholder="I want to cook a recipe from ..."
      >
        {countries
          .sort((countryA, countryB) =>
            countryA.name.common.localeCompare(countryB.name.common)
          )
          .map((country, index) => (
            <option value="option1" key={index}>
              {country.name.common}
            </option>
          ))}
      </Select>
      <div></div>
    </div>
  );
};

export default Selector;
