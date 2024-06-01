export default function CountryCard({ data }) {
  // data?.map((item) => console.log(item));
  console.log(data);

  return (
    <>
      {data?.map((item) => {
        return (
          <div className="card">
            <div className="card__img">
              <img src={item.flags.png} alt={item.flags.alt} />
            </div>
            <div className="card__info">
              <h2>{item.name.official}</h2>
              <p>
                <span>Population:</span>
                {item.population}
              </p>
              <p>
                <span>Region:</span>
                {item.population}
              </p>
              <p>
                <span>Capital:</span>
                {item.capital}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
