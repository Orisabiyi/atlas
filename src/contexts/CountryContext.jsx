import { createContext, useContext } from "react";

const countriesContext = createContext();

function CountryContext({ children }) {
  return <countriesContext.Provider>{children}</countriesContext.Provider>;
}

function useCountryContext() {
  const value = useContext(countriesContext);

  return value;
}

export { CountryContext, useCountryContext };
