import { Link } from "react-router-dom";

function CountryItem({ item }) {
  return (
    <Link to={`/${item.name.official}`}>
      <div className="card hover:cursor-pointer" key={item?.name?.official}>
        <div className="card__img">
          <img src={item?.flags?.png} alt={item?.name?.official} />
        </div>
        <div className="card__info">
          <h2>{item?.name?.official}</h2>
          <p>
            <span>Population: </span>
            {Intl.NumberFormat().format(item?.population)}
          </p>
          <p>
            <span>Region: </span>
            {item?.region}
          </p>
          <p>
            <span>Capital: </span>
            {item?.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryItem;
