import { useNavigate, useParams } from "react-router-dom";
import { useCountryContext } from "../contexts/CountryContext";
import { useCallback, useEffect } from "react";

function CountryDetail() {
  const { country } = useParams();
  const { getCurrentCountry, currentCity } = useCountryContext();
  const navigate = useNavigate("");

  const memoizedGetCurrentCountry = useCallback(() => {
    getCurrentCountry(country);
  }, [country]);

  useEffect(() => {
    memoizedGetCurrentCountry();
  }, [memoizedGetCurrentCountry]);

  // if (currentCity) console.log(currentCity, Object.values(currentCity[0]));

  return (
    <section className="p-16">
      <button
        onClick={() => navigate(-1)}
        className="bg-white shadow-md px-16 py-2 flex items-center gap-2 text-[2rem] rounded-xl"
      >
        <span>&larr;</span> <span>Back</span>
      </button>

      <article className="mt-36 flex flex-col items-center gap-32 lg:flex-row">
        <figure className="w-1/2">
          {currentCity && (
            <img
              src={currentCity[0]?.flags?.svg}
              alt="county flag name"
              className="w-full h-full block object-cover"
            />
          )}
        </figure>

        <div className="w-1/2">
          <h2>{currentCity && currentCity[0]?.name?.common}</h2>

          <ul className="grid grid-cols-2">
            <li>
              <span>Native Name: </span>
              {currentCity && currentCity[0]?.name?.nativeName?.spa?.official}
            </li>
            <li>
              <span>Top Level Domain: </span>
              {currentCity && currentCity[0]?.tld[0]}
            </li>
            <li>
              <span>Population: </span>
              {currentCity && currentCity[0]?.population}
            </li>
            <li>
              <span>Currencies: </span>
              {currentCity && currentCity[0]?.currencies?.COP?.name}
            </li>
            <li>
              <span>Region: </span>
              {currentCity && currentCity[0]?.name?.nativeName?.spa?.official}
            </li>
            <li>
              <span>Languages: </span>
              {currentCity && currentCity[0]?.languages?.spa}
            </li>
            <li>
              <span>Sub Region: </span>
              {currentCity && currentCity[0]?.subregion}
            </li>
            <li>
              <span>Capital: </span>
              {currentCity && currentCity[0]?.name?.nativeName?.spa?.official}
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default CountryDetail;
