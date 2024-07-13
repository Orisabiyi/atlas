import CountryItem from "./CountryItem";

export default function CountryCard({ data }) {
  return (
    <>
      {data?.map((item) => (
        <CountryItem item={item} />
      ))}
    </>
  );
}
