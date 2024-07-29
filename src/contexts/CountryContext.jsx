import { createContext, useContext, useEffect, useState } from "react";

const countriesContext = createContext();

function CountryContext({ children }) {
  const [search, setSearch] = useState("all");
  const [cache, setCache] = useState({});
  const [error, setError] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(
    function () {
      const controller = new AbortController();

      const fetchCountries = async function () {
        if (search && cache[search]) {
          setCountries(cache[search]);
          // setRegion("");
          setError("");
        }

        if (search && !cache[search]) {
          setIsLoading(true);
          try {
            const response = await fetch(
              `https://restcountries.com/v3.1/${
                search !== "all" ? `name/${search}` : "all"
              }`,
              { signal: controller.signal }
            );

            if (!response.ok) throw new Error("Country not found");

            const data = await response.json();

            setCountries(data);
            setCache((prevCache) => ({ ...prevCache, [search]: data }));
            // setRegion("");
            setError("");
          } catch (error) {
            if (error.name === "AbortError") return;
            setError(error.message);
          }
          setIsLoading(false);
        }
      };

      fetchCountries();

      // cleanup
      return function () {
        controller.abort();
      };
    },
    [search, cache]
  );

  useEffect(
    function () {
      const fetchCountriesByRegion = async function () {
        if (region && cache[region]) {
          setCountries(cache[region]);
          setSearch("all");
          setError("");
        }

        if (region && !cache[region]) {
          try {
            setIsLoading(true);
            const response =
              await fetch(`https://restcountries.com/v3.1/region/${region}
          `);
            const data = await response.json();

            setCountries(data);
            setCache((prevCache) => ({ ...prevCache, [region]: data }));
            setSearch("all");
            setError("");
          } catch (error) {
            setError(error.message);
          } finally {
            setIsLoading(false);
          }
        }
      };

      fetchCountriesByRegion();
    },
    [region, cache]
  );

  async function getCurrentCountry(countryName) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await res.json();
      console.log(data);
      // setCurrentCity(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <countriesContext.Provider
      value={{
        setSearch,
        setRegion,
        error,
        region,
        countries,
        isLoading,
        getCurrentCountry,
        currentCity,
      }}
    >
      {children}
    </countriesContext.Provider>
  );
}

function useCountryContext() {
  const value = useContext(countriesContext);

  return value;
}

export { CountryContext, useCountryContext };
