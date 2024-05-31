import { useState } from "react";

export default function Filter() {
  const [region, setRegion] = useState("africa");

  return (
    <select value={region} onChange={(e) => setRegion(e.target.value)}>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
