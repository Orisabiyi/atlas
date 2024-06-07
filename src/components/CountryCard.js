export default function CountryCard({ data }) {
  return (
    <>
      {data?.map((item) => (
        <div className="card" key={item?.name?.official}>
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
      ))}
    </>
  );
}
