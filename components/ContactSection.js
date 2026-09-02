import { getTranslation } from "../locales/translate";

export default function ContactSection({ locale }) {
  return (
    <section id="contact" className="section content-section contact-section reveal-section">
      <div className="container contact-box glass-card">
        <p className="eyebrow">{getTranslation("contact_label", locale)}</p>
        <h2>{getTranslation("contact_title", locale)}</h2>
        <p>{getTranslation("contact_text", locale)}</p>

        <div className="contact-actions">
          <a href={`mailto:${getTranslation("profile_email", locale)}`} className="primary-btn">
            {getTranslation("profile_email", locale)}
          </a>
          <a href={getTranslation("profile_link_linkedin", locale)} className="secondary-btn" target="_blank" rel="noreferrer">
            {getTranslation("contact_linkedin", locale)}
          </a>
          <a href={getTranslation("profile_link_instagram", locale)} className="secondary-btn" target="_blank" rel="noreferrer">
            {getTranslation("contact_instagram", locale)}
          </a>
          <a href={getTranslation("profile_link_github", locale)} className="secondary-btn" target="_blank" rel="noreferrer">
            {getTranslation("contact_github", locale)}
          </a>
        </div>
      </div>
    </section>
  );
}
