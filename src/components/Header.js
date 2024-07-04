import { useEffect } from "react";
import { useFetchCountries } from "../hooks/FetchCountries";

import CountryCard from "./CountryCard";
import Filter from "./Filter";
import Search from "./Search";

export default function Header({ isDark }) {
  const {
    setSearch,
    setRegion,
    setCountries,
    setIsLoading,
    setError,
    setCache,
    error,
    cache,
    region,
    countries,
    isLoading,
  } = useFetchCountries();

  function handleSetRegion(e) {
    setRegion(e.target.value);
  }

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

  return (
    <header className={`header ${isDark ? "header-dark" : ""}`}>
      <div className="header__search">
        <Search setSearch={setSearch} />
        <Filter region={region} onSetRegion={handleSetRegion} />
      </div>

      <div className="header__card">
        {isLoading && <p>Loading..</p>}
        {!isLoading && !error && <CountryCard data={countries} />}
        {!isLoading && error && error}
      </div>
    </header>
  );
}
