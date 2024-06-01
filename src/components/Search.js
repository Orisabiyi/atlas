import { useState } from "react";

export default function Search({ getCountries }) {
  const [search, setSearch] = useState("all");

  function handleSubmit(e) {
    e.preventDefault();
    getCountries(search);
  }

  return (
    <>
      <form className="header__search-bar" onSubmit={handleSubmit}>
        <img src="asset/search.svg" alt="search icon" />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
}
