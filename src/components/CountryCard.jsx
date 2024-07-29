import CountryItem from "./CountryItem";

export default function CountryCard({ data }) {
  return (
    <>
      {data?.map((item, i) => (
        <CountryItem item={item} key={i} />
      ))}
    </>
  );
}
