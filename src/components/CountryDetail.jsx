import { useParams } from "react-router-dom";

function CountryDetail() {
  const { country } = useParams();
  console.log(country);
  return <section></section>;
}

export default CountryDetail;
