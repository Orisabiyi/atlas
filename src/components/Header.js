import { useEffect, useState } from "react";
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

  const fetchCountries = async function (searchTerm) {
    if (searchTerm && cache[searchTerm]) {
      setCountries(cache[searchTerm]);
    }

    if (searchTerm && !cache[searchTerm]) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/${
            search !== "all" ? `name/${search}` : "all"
          }`
        );

        const data = await response.json();

        setCountries(data);
        setCache((prevCache) => ({ ...prevCache, [searchTerm]: data }));
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <header className={`header ${isDark ? "header-dark" : ""}`}>
      <div className="header__search">
        <Search setSearch={setSearch} />
        <Filter />
      </div>

      <div className="header__card">
        {error ? error : <CountryCard data={countries} />}
      </div>
    </header>
  );
}
