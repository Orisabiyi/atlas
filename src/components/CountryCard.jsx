import { useCountryContext } from "../contexts/CountryContext";
import CountryItem from "./CountryItem";

export default function CountryCard() {
  const { countries } = useCountryContext();

  return (
    <>
      {countries?.map((item, i) => (
        <CountryItem item={item} key={i} />
      ))}
    </>
  );
}
