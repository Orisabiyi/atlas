export default function Search({ setSearch }) {
  return (
    <>
      <div className="header__search-bar">
        <img src="asset/search.svg" alt="search icon" />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) =>
            setSearch(
              e.target.value === "" ? "all" : e.target.value.toLowerCase()
            )
          }
        />
      </div>
    </>
  );
}
