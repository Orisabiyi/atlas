import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import Search from "./Search";

export default function Header({ isDark }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("all");

  const getCountries = async function (name = "all") {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/${name}`);
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => getCountries, []);
  getCountries(search);

  return (
    <header className={`header ${isDark ? "header-dark" : ""}`}>
      <div className="header__search">
        <Search setSearch={setSearch} />
        <Filter />
      </div>

      <div className="header__card">
        {data ? <CountryCard data={data} /> : error}
      </div>
    </header>
  );
}
