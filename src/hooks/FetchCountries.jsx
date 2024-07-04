import { useState, useEffect } from "react";

function useFetchCountries() {
  const [search, setSearch] = useState("all");
  const [cache, setCache] = useState({});
  const [error, setError] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();

      const fetchCountries = async function () {
        if (search && cache[search]) {
          setCountries(cache[search]);
          setRegion("");
          setError("");
        }

        if (search && !cache[search]) {
          setIsLoading(true);
          try {
            const response = await fetch(
              `https://restcountries.com/v3.1/${
                search !== "all" ? `name/${search}` : "all"
              }`,
              { signal: controller.signal }
            );

            if (!response.ok) throw new Error("Country not found");

            const data = await response.json();

            setCountries(data);
            setCache((prevCache) => ({ ...prevCache, [search]: data }));
            setRegion("");
            setError("");
          } catch (error) {
            if (error.name === "AbortError") return;
            setError(error.message);
          }
          setIsLoading(false);
        }
      };

      fetchCountries();

      // cleanup
      return function () {
        controller.abort();
      };
    },
    [search, cache]
  );

  return {
    setSearch,
    setRegion,
    setCountries,
    setIsLoading,
    setError,
    setCache,
    error,
    cache,
    region,
    countries,
    isLoading,
  };
}

export { useFetchCountries };
