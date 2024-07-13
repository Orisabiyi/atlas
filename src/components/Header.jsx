import { useFetchCountriesandRegion } from "../hooks/FetchCountries";

import CountryCard from "./CountryCard";
import Filter from "./Filter";
import Search from "./Search";

export default function Header({ isDark }) {
  const { setSearch, setRegion, error, region, countries, isLoading } =
    useFetchCountriesandRegion();

  return (
    <header className={`header ${isDark ? "header-dark" : ""}`}>
      <div className="header__search">
        <Search setSearch={setSearch} />
        <Filter region={region} onSetRegion={setRegion} />
      </div>

      <div className="header__card">
        {isLoading && <p>Loading..</p>}
        {!isLoading && !error && <CountryCard data={countries} />}
        {!isLoading && error && error}
      </div>
    </header>
  );
}
