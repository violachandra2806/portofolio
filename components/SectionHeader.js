export default function SectionHeader({ eyebrow, title, align = "center" }) {
  return (
    <div className={`container section-heading ${align === "center" ? "centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
