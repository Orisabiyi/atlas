import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import Search from "./Search";

export default function Header({ isDark }) {
  const [search, setSearch] = useState("all");
  const [cache, setCache] = useState({});
  const [error, setError] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSetRegion(e) {
    setRegion(e.target.value);
  }

  useEffect(
    function () {
      const controller = new AbortController();

      const fetchCountries = async function () {
        if (search && cache[search]) {
          setCountries(cache[search]);
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
