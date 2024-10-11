import { useNavigate, useParams } from "react-router-dom";
import { useCountryContext } from "../contexts/CountryContext";
import { useEffect } from "react";

function CountryDetail() {
  const { country } = useParams();
  const { getCurrentCountry } = useCountryContext();
  const navigate = useNavigate("");

  useEffect(
    function () {
      getCurrentCountry(country);
    },
    [country]
  );

  return (
    <section>
      <button onClick={() => navigate(-1)}>
        <span>&larr;</span> <span>Back</span>
      </button>
    </section>
  );
}

export default CountryDetail;
