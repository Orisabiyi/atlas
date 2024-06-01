import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import Search from "./Search";

export default function Header() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getCountries = async function () {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => getCountries, []);

  return (
    <header className="header">
      <div className="header__search">
        <Search />
        <Filter />
      </div>

      <div className="header__card">
        {data ? <CountryCard data={data} /> : ""}
      </div>
    </header>
  );
}
