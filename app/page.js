"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Link, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LocaleSelector from "../components/LocaleSelector";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import { muiThemeOptions } from "./themes/theme";
import { defaultLocale, setLocale, t } from "../locales/translate";
import profileImage from "../src/image/profile_pic_no_bg.png";

const imageSrc = profileImage;
const muiTheme = createTheme(muiThemeOptions);
const LOCALE_STORAGE_KEY = "portfolio-locale";

export default function HomePage() {
  const [locale, setPageLocale] = useState(defaultLocale);
  const scrollAnimationRef = useRef(null);

  const scrollToSection = (event, href) => {
    event.preventDefault();
    const section = document.querySelector(href);
    if (!section) return;

    if (scrollAnimationRef.current) {
      window.cancelAnimationFrame(scrollAnimationRef.current);
    }

    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const targetTop = Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerHeight);
    const startTop = window.scrollY;
    const distance = targetTop - startTop;
    const duration = Math.min(1100, Math.max(650, Math.abs(distance) * 0.8));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || Math.abs(distance) < 2) {
      window.scrollTo(0, targetTop);
    } else {
      let startTime;
      const animateScroll = (currentTime) => {
        startTime ??= currentTime;
        const progress = Math.min(1, (currentTime - startTime) / duration);
        const easedProgress = progress < 0.5
          ? 4 * progress ** 3
          : 1 - ((-2 * progress + 2) ** 3) / 2;
        window.scrollTo(0, startTop + distance * easedProgress);

        if (progress < 1) {
          scrollAnimationRef.current = window.requestAnimationFrame(animateScroll);
        } else {
          scrollAnimationRef.current = null;
        }
      };

      scrollAnimationRef.current = window.requestAnimationFrame(animateScroll);
    }

    window.history.pushState(null, "", href);
  };

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (savedLocale === "en" || savedLocale === "id") {
      setPageLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    setLocale(locale);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const navItems = [
    { label: t("nav_home"), href: "#home" },
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_skills"), href: "#skills" },
    { label: t("nav_projects"), href: "#projects" },
    { label: t("nav_contact"), href: "#contact" },
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
    <ThemeProvider theme={muiTheme}>
      <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 40, backdropFilter: "blur(14px)", background: "rgba(247, 243, 234, 0.72)", borderBottom: "1px solid var(--line)" }}>
        <Container component="nav" sx={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", minHeight: 78, gap: 2.5, width: "min(1180px, calc(100% - 32px))", margin: "0 auto", "& > :last-child": { justifySelf: "end" }, "@media (max-width: 640px)": { display: "flex", justifyContent: "center", flexWrap: "wrap", padding: "14px 0 16px", minHeight: 66 } }} aria-label="Main navigation">
          <Link component="a" href="#home" onClick={(event) => scrollToSection(event, "#home")} sx={{ display: "inline-flex", alignItems: "center", minHeight: 42, color: "var(--text)", fontWeight: "var(--weight-extra-bold)", fontSize: "var(--font-size-xs)", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", cursor: "pointer", whiteSpace: "nowrap" }} aria-label="Go to home">
            {[...t("profile_name")].map((char, index) => (
              <Box
                component="span"
                key={`${char}-${index}`}
                style={{ ["--char-index"]: index }}
                sx={{ display: "inline-block", opacity: .88, animation: "brandWave 10s ease-in-out infinite", animationDelay: `calc(${index} * .08s)`, "@keyframes brandWave": { "0%, 100%": { transform: "translateY(0) scale(1)", opacity: .7 }, "20%": { transform: "translateY(-4px) scale(1.04)", opacity: 1 }, "40%": { transform: "translateY(0) scale(1)", opacity: .9 }, "60%": { transform: "translateY(-6px) scale(1.06)", opacity: 1 }, "80%": { transform: "translateY(0) scale(1)", opacity: .8 } } }}
              >
                {char === " " ? "\u00A0" : char}
              </Box>
            ))}
          </Link>

          <Stack direction="row" sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3.125, flexWrap: "wrap", "@media (max-width: 640px)": { justifyContent: "center", gap: "14px 18px" } }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={(event) => scrollToSection(event, item.href)} sx={{ color: "var(--muted)", textDecoration: "none", transition: "color .25s ease, transform .25s ease", "&:hover": { color: "var(--text)", transform: "translateY(-2px)" } }}>
                {item.label}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" sx={{ display: "flex", alignItems: "center", gap: 1.75 }}>
            <LocaleSelector
              label={t("locale_label")}
              value={locale}
              onChange={setPageLocale}
            />
            <Button component="a" href="#contact" onClick={(event) => scrollToSection(event, "#contact")} sx={{ minHeight: 42, padding: "0 18px", borderRadius: "999px", textTransform: "none", fontWeight: "var(--weight-bold)", background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))", color: "var(--white)", boxShadow: "0 16px 32px var(--glow)", "&:hover": { transform: "translateY(-2px)" }, "@media (max-width: 640px)": { display: "none" } }}>
              {t("cta_lets_talk")}
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box component="main" sx={{ overflow: "hidden" }}>
        <HeroSection imageSrc={imageSrc} />
        <AboutSection locale={locale} />
        <SkillsSection locale={locale} />
        <ProjectsSection locale={locale} />
        <ContactSection locale={locale} />
      </Box>

      <Footer text={t("footer_copyright")} />
    </ThemeProvider>
  );
}
