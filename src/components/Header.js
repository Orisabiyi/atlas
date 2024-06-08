import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import Search from "./Search";

export default function Header({ isDark }) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("all");
  const [cache, setCache] = useState({});

  // useEffect(
  //   function () {
  //     const getCountries = async function () {
  //       try {
  //         const res = await fetch(
  //           `https://restcountries.com/v3.1/${
  //             search !== "all" ? `name/${search}` : "all"
  //           }`
  //         );
  //         if (!res.ok) throw new Error("Country not found");

  //         const data = await res.json();
  //         console.log(data);

  //         setData(data);
  //         setError("");
  //       } catch (error) {
  //         setError(error.message);
  //       }
  //     };

  //     getCountries();
  //   },
  //   [search]
  // );

  const fetchCountries = async function (search) {
    if (search && cache[search]) {
      setCountries(cache[search]);
      setError("");
    }

    if (search && !cache[search]) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/${
            search !== "all" ? `name/${search}` : "all"
          }`
        );

        if (!response.ok) throw new Error("Country not found");

        const data = await response.json();

        setCountries(data);
        setCache((prevCache) => ({ ...prevCache, [search]: data }));
        setError("");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const debouncedFetchCountries = useCallback(
    _.debounce(async (search) => {
      await fetchCountries(search);
    }, 300),
    [cache] // Add fetchCountries as a dependency
  );

  useEffect(
    function () {
      debouncedFetchCountries(search);
    },
    [search, debouncedFetchCountries]
  );

  return (
    <header className={`header ${isDark ? "header-dark" : ""}`}>
      <div className="header__search">
        <Search setSearch={setSearch} />
        <Filter />
      </div>

      <div className="header__card">
        {error && search !== "all" ? error : <CountryCard data={countries} />}
      </div>
    </header>
  );
}
