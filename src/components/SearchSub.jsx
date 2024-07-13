import Filter from "./Filter";
import Search from "./Search";

function SearchSub({ region, setSearch, handleSetRegion }) {
  return (
    <div className="search">
      <Search setSearch={setSearch} />
      <Filter region={region} onSetRegion={handleSetRegion} />
    </div>
  );
}

export default SearchSub;
