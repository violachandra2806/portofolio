"use client";

import { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LocaleSelector from "../components/LocaleSelector";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import { defaultLocale, getTranslation } from "../locales/translate";
import profileImage from "../src/assets/profile_picture.svg";

const imageSrc = profileImage;

export default function HomePage() {
  const [locale, setLocale] = useState(defaultLocale);

  const navItems = [
    { label: getTranslation("nav_home", locale), href: "#home" },
    { label: getTranslation("nav_about", locale), href: "#about" },
    { label: getTranslation("nav_skills", locale), href: "#skills" },
    { label: getTranslation("nav_projects", locale), href: "#projects" },
    { label: getTranslation("nav_contact", locale), href: "#contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [locale]);

  return (
    <>
      <header className="topbar">
        <nav className="container nav-bar" aria-label="Main navigation">
          <a href="#home" className="brand-mark">
            V
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <LocaleSelector
              label={getTranslation("locale_label", locale)}
              value={locale}
              onChange={setLocale}
            />
            <a href="#contact" className="nav-cta">
              {getTranslation("cta_lets_talk", locale)}
            </a>
          </div>
        </nav>
      </header>

      <main className="page-shell">
        <HeroSection locale={locale} imageSrc={imageSrc} />
        <AboutSection locale={locale} />
        <SkillsSection locale={locale} />
        <ProjectsSection locale={locale} />
        <ContactSection locale={locale} />
      </main>

      <Footer text={getTranslation("footer_copyright", locale)} />
    </>
  );
}
