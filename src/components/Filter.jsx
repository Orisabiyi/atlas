import { useNavigate } from "react-router-dom";

export default function Filter({ region, onSetRegion }) {
  const navigate = useNavigate();

  return (
    <select
      name="filter"
      value={region}
      onChange={(e) => onSetRegion(e)}
      onClick={() => navigate(`/${region}`)}
    >
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
