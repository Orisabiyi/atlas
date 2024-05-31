export default function CountryCard() {
  const getCountries = async function () {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = res.json();
    console.log(data);
  };

  getCountries();

  return <div className="header__card"></div>;
}
