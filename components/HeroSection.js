"use client";

import { useEffect, useState } from "react";
import { getTranslation } from "../locales/translate";

const floatingIcons = [
  { label: "⚛", className: "tech tech-1" },
  { label: "💻", className: "tech tech-2" },
  { label: "⚡", className: "tech tech-3" },
  { label: "🚀", className: "tech tech-4" },
  { label: "🧠", className: "tech tech-5" },
  { label: "🔧", className: "tech tech-6" },
];

export default function HeroSection({ locale, imageSrc }) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = getTranslation("hero_roles", locale);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, text.length + 1);
        setText(nextText);

        if (nextText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1100);
        }
      } else {
        const nextText = currentRole.slice(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 75 : 120);

    return () => clearTimeout(timeout);
  }, [text, roleIndex, isDeleting, roles]);

  return (
    <section id="home" className="section hero-section reveal-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{getTranslation("hero_eyebrow", locale)}</p>
          <h1 className="typewriter-line">
            <span>{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p className="lead">{getTranslation("hero_lead", locale)}</p>

          <div className="cta-group">
            <a href="#projects" className="primary-btn">
              {getTranslation("cta_view_projects", locale)}
            </a>
            <a href="#about" className="secondary-btn">
              {getTranslation("cta_about_me", locale)}
            </a>
          </div>

          <div className="mini-stats" aria-label="Key statistics">
            <div>
              <strong>{getTranslation("hero_years_value", locale)}+</strong>
              <span>{getTranslation("hero_years", locale)}</span>
            </div>
            <div>
              <strong>18</strong>
              <span>{getTranslation("hero_projects", locale)}</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>{getTranslation("hero_passion", locale)}</span>
            </div>
          </div>
        </div>

        <div className="visual-panel" aria-label="Profile visual">
          <div className="orbit-wrap">
            {floatingIcons.map((icon) => (
              <span key={icon.label} className={icon.className}>
                {icon.label}
              </span>
            ))}
          </div>

          <div className="photo-shell">
            <img src={imageSrc} alt="Software engineer portrait" />
          </div>
        </div>
      </div>
    </section>
  );
}
