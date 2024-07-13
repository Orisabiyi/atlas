export default function Filter({ region, onSetRegion }) {
  return (
    <select name="filter" value={region} onChange={(e) => onSetRegion(e)}>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
