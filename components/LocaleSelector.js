export default function LocaleSelector({ value, onChange, label }) {
  return (
    <label className="locale-field" aria-label={label}>
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="en">EN</option>
        <option value="id">ID</option>
      </select>
    </label>
  );
}
