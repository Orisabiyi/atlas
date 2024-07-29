import { useParams } from "react-router-dom";
import { useCountryContext } from "../contexts/CountryContext";
import { useEffect } from "react";

function CountryDetail() {
  const { country } = useParams();
  const { getCurrentCountry } = useCountryContext();

  useEffect(
    function () {
      getCurrentCountry(country);
    },
    [country, getCurrentCountry]
  );

  return <section></section>;
}

export default CountryDetail;
