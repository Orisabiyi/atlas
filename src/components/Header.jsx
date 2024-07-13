import { useFetchCountriesandRegion } from "../hooks/FetchCountries";

// import CountryCard from "./CountryCard";
import SearchSub from "./SearchSub";

export default function Header({ isDark }) {
  const { setSearch, setRegion, error, region, countries, isLoading } =
    useFetchCountriesandRegion();

  function handleSetRegion(e) {
    setRegion(e.target.value);
  }

  return (
    <header className={`header ${isDark ? "header-dark" : ""}`}>
      <SearchSub
        region={region}
        setRegion={setRegion}
        handleSetRegion={handleSetRegion}
      />
      {/* <div className="header__card">
        {isLoading && <p>Loading..</p>}
        {!isLoading && !error && <CountryCard data={countries} />}
        {!isLoading && error && error}
      </div> */}
    </header>
  );
}
