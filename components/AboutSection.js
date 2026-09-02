import { getTranslation } from "../locales/translate";

export default function AboutSection({ locale }) {
  const cards = [
    getTranslation("about_card_1", locale),
    getTranslation("about_card_2", locale),
  ];

  return (
    <section id="about" className="section content-section reveal-section">
      <div className="about-shell">
        <div className="about-header-block">
          <p className="eyebrow">{getTranslation("about_label", locale)}</p>
          <h2>{getTranslation("about_title", locale)}</h2>
        </div>

        <div className="about-grid">
          {cards.map((card, index) => (
            <div key={`${card}-${index}`} className="about-card glass-card">
              <p>{card}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
