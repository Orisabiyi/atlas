import Filter from "./Filter";
import Search from "./Search";

export default function Header() {
  return (
    <header className="header">
      <div className="header__search">
        <Search />
        <Filter />
      </div>
    </header>
  );
}
