import { useFetchCountriesandRegion } from "../hooks/FetchCountries";
import CountryCard from "./CountryCard";
import SearchSub from "./SearchSub";

export default function Header({ isDark }) {
  const { setSearch, setRegion, error, region, isLoading } =
    useFetchCountriesandRegion();

  function handleSetRegion(e) {
    setRegion(e.target.value);
  }

  return (
    <header className={`header ${isDark ? "header-dark" : ""}`}>
      <SearchSub
        region={region}
        setSearch={setSearch}
        setRegion={setRegion}
        handleSetRegion={handleSetRegion}
      />

      {isLoading && <p>Loading...</p>}

      {!isLoading && error && <p>{error}</p>}

      {!isLoading && !error && (
        <div className="header__cards">
          <CountryCard />
        </div>
      )}
    </header>
  );
}
