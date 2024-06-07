import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import Search from "./Search";

export default function Header({ isDark }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("all");

  useEffect(
    function () {
      const getCountries = async function () {
        try {
          const res = await fetch(
            `https://restcountries.com/v3.1/${
              search !== "all" ? `name/${search}` : "all"
            }`
          );
          if (!res.ok) throw new Error("Country not found");

          const data = await res.json();
          console.log(data);

          setData(data);
          setError("");
        } catch (error) {
          setError(error.message);
        }
      };

      getCountries();
    },
    [search]
  );

  return (
    <header className={`header ${isDark ? "header-dark" : ""}`}>
      <div className="header__search">
        <Search setSearch={setSearch} />
        <Filter />
      </div>

      <div className="header__card">
        {error ? error : <CountryCard data={data} />}
      </div>
    </header>
  );
}
