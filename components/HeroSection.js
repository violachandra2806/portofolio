"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { skillGroups, skillLogoSlugs } from "../locales/skills";
import { t } from "../locales/translate";
import { theme } from "../app/themes/theme";

const SHOW_FLOATING_ICONS = false;

const floatingLanguages = skillGroups
  .find((group) => group.key === "languages")
  .items.map((label, index) => ({
    label,
    logo: `https://cdn.simpleicons.org/${skillLogoSlugs[label]}`,
    className: `tech tech-${index + 1}`,
  }));

const bambooStalks = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${index * 6.7 - 2}%`,
  height: `${44 + (index % 5) * 9}%`,
  delay: `${(index % 6) * -0.8}s`,
  opacity: `${0.2 + (index % 4) * 0.06}`,
}));

const fallingLeaves = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${5 + ((index * 17) % 90)}%`,
  delay: `${(index % 6) * -2.4}s`,
  duration: `${18 + (index % 5) * 2}s`,
  drift: `${-80 + (index % 7) * 26}px`,
  rotation: `${-35 + (index % 6) * 18}deg`,
}));

export default function HeroSection({ imageSrc, onNavigate }) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = t("hero_roles");
  const updateBackgroundPosition = (event) => {
    const section = event.currentTarget;
    const sectionBounds = section.getBoundingClientRect();
    const cursorX = event.clientX - sectionBounds.left;
    const cursorY = event.clientY - sectionBounds.top;
    const radius = 56;
    const maxBend = 4;

    section.style.setProperty("--cursor-x", `${cursorX}px`);
    section.style.setProperty("--cursor-y", `${cursorY}px`);
    section.style.setProperty("--cursor-opacity", "1");

    [...section.querySelectorAll(".bamboo-stalk")].forEach((stalk) => {
      stalk.style.setProperty("--bamboo-push", "0px");
      const stalkBounds = stalk.getBoundingClientRect();
      const stalkCenterX = stalkBounds.left + stalkBounds.width / 2;
      const horizontalDistance = Math.max(stalkBounds.left - event.clientX, 0, event.clientX - stalkBounds.right);
      const verticalDistance = Math.max(stalkBounds.top - event.clientY, 0, event.clientY - stalkBounds.bottom);
      const distance = Math.hypot(horizontalDistance, verticalDistance);
      const exclusionDistance = radius + stalkBounds.width / 2;

      if (distance >= exclusionDistance) {
        stalk.style.setProperty("--bamboo-touch", "0deg");
        return;
      }

      const horizontalDirection = stalkCenterX - event.clientX || (stalkBounds.top < event.clientY ? -1 : 1);
      const avoidanceStrength = 1 - distance / exclusionDistance;
      const sway = Math.max(-maxBend, Math.min(maxBend, (horizontalDirection / exclusionDistance) * maxBend * avoidanceStrength));
      stalk.style.setProperty("--bamboo-touch", `${sway}deg`);
    });
  };

  const resetBackgroundPosition = (event) => {
    event.currentTarget.style.setProperty("--cursor-opacity", "0");
    event.currentTarget.querySelectorAll(".bamboo-stalk").forEach((stalk) => {
      stalk.style.setProperty("--bamboo-touch", "0deg");
    });
  };

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
    <Box
      component="section"
      id="home"
      sx={{ position: "relative", isolation: "isolate", minHeight: "calc(100vh - 78px)", boxSizing: "border-box", padding: "88px 0", display: "flex", alignItems: "center", scrollMarginTop: 78, opacity: 1, transform: "none", "@media (max-width: 900px)": { minHeight: "auto", padding: "54px 0 68px" } }}
      onPointerMove={updateBackgroundPosition}
      onPointerLeave={resetBackgroundPosition}
    >
      <Box sx={{ position: "absolute", inset: 0, zIndex: -2, pointerEvents: "none", background: "linear-gradient(135deg, var(--bg), var(--bg-soft))" }} aria-hidden="true" />
      <Box aria-hidden="true" sx={{ position: "absolute", top: 0, left: 0, zIndex: 0, width: 88, height: 88, pointerEvents: "none", border: "1px solid rgba(126, 166, 91, .28)", borderRadius: "50%", background: "radial-gradient(circle, rgba(126, 166, 91, .1), rgba(126, 166, 91, .035) 48%, transparent 72%)", boxShadow: "0 0 20px rgba(126, 166, 91, .14)", opacity: "var(--cursor-opacity, 0)", transform: "translate3d(calc(var(--cursor-x, -44px) - 44px), calc(var(--cursor-y, -44px) - 44px), 0)", transition: "opacity .25s ease" }} />
      <Box sx={{ position: "absolute", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none", opacity: .9, maskImage: "linear-gradient(to bottom, #000 0%, #000 54%, rgba(0,0,0,.72) 78%, transparent 100%)", "@media (max-width: 900px)": { opacity: 0.55, "& .bamboo-stalk:nth-of-type(3n + 1)": { display: "none" } } }} aria-hidden="true">
        {bambooStalks.map((stalk) => (
          <Box
            component="span"
            key={stalk.id}
            className="bamboo-stalk"
            sx={{ position: "absolute", bottom: "-4%", left: stalk.left, width: "clamp(20px, 2.4vw, 34px)", height: stalk.height, opacity: stalk.opacity, borderRadius: "10px 10px 2px 2px", background: "linear-gradient(90deg, rgba(44,94,56,.72), rgba(126,166,91,.86) 48%, rgba(49,105,63,.7)), repeating-linear-gradient(to bottom, transparent 0 12%, rgba(29,73,41,.42) 12.5% 14%)", transformOrigin: "bottom center", animation: `bambooSway 7s ease-in-out ${stalk.delay} infinite`, "@keyframes bambooSway": { "0%, 100%": { transform: "rotate(calc(-1deg + var(--bamboo-touch, 0deg)))" }, "50%": { transform: "rotate(calc(3deg + var(--bamboo-touch, 0deg)))" } } }}
            style={{
              "--bamboo-left": stalk.left,
              "--bamboo-height": stalk.height,
              "--bamboo-delay": stalk.delay,
              "--bamboo-opacity": stalk.opacity,
            }}
          />
        ))}
      </Box>
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }} aria-hidden="true">
        {fallingLeaves.map((leaf) => (
          <Box
            component="span"
            key={leaf.id}
            sx={{ position: "absolute", top: "-8%", left: leaf.left, width: 18, height: 30, borderRadius: "100% 0 100% 0", background: "linear-gradient(145deg, rgba(142,178,109,.9), rgba(63,111,78,.86))", opacity: .72, transformOrigin: "center", animation: `leafFall ${leaf.duration} ease-in-out ${leaf.delay} infinite`, "@keyframes leafFall": { "0%": { transform: `translate3d(0,-10vh,0) rotate(${leaf.rotation})`, opacity: 0 }, "10%": { opacity: .72 }, "48%": { transform: `translate3d(calc(${leaf.drift} * -0.35),48vh,0) rotate(120deg)` }, "78%": { transform: `translate3d(${leaf.drift},82vh,0) rotate(240deg)`, opacity: .62 }, "100%": { transform: `translate3d(calc(${leaf.drift} * 0.4),112vh,0) rotate(360deg)`, opacity: 0 } } }}
            style={{
              "--leaf-left": leaf.left,
              "--leaf-delay": leaf.delay,
              "--leaf-duration": leaf.duration,
              "--leaf-drift": leaf.drift,
              "--leaf-rotation": leaf.rotation,
            }}
          />
        ))}
      </Box>
      <Container sx={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr .9fr" }, gridTemplateRows: { xs: "auto auto", md: "none" }, alignItems: { xs: "start", md: "center" }, gap: { xs: 4, md: 6.5 }, width: "min(1180px, calc(100% - 32px))", margin: "0 auto" }}>
        <Box sx={{ order: { xs: 2, md: 0 }, minWidth: 0 }}>
          <Typography
            component="p"
            className="hero-greeting"
            sx={{
              fontSize: "var(--font-size-hero-role-label)",
              fontWeight: "var(--weight-bold)",
              color: "var(--primary)",
            }}
          >
            {t("hero_greeting")}
          </Typography>
          <Typography
            component="h2"
            className="hero-name"
            sx={{ fontSize: "var(--font-size-hero-name)", fontWeight: "var(--weight-bold)" }}
          >
            {t("profile_name")}
          </Typography>
          <Typography
            component="p"
            className="eyebrow"
            sx={{ fontSize: "var(--font-size-hero-role-label)", fontWeight: "var(--weight-bold)" }}
          >
            {t("hero_eyebrow")}
          </Typography>
          <Typography
            component="h1"
            className="typewriter-line"
            sx={{ fontSize: "var(--font-size-hero-role)", fontWeight: "var(--weight-bold)" }}
          >
            <span>{text}</span>
            <span className="cursor">|</span>
          </Typography>
          <Typography component="p" sx={{ maxWidth: 600, margin: "20px 0 0", color: "var(--muted)", fontSize: "var(--font-size-lead)" }}>{t("hero_lead")}</Typography>

          <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: 1.75, marginTop: 3.75, "@media (max-width: 900px)": { justifyContent: "flex-end" } }}>
            <Button
              component="a"
              href="#about"
              onClick={(event) => onNavigate(event, "#about")}
              sx={{ minHeight: 52, padding: "0 22px", borderRadius: "999px", color: "var(--primary)", background: theme.white, border: 0, boxShadow: "0 10px 24px var(--glow)", "&:hover": { backgroundColor: theme.white, transform: "translateY(-2px)" } }}
            >
              {t("cta_about_me")}
            </Button>
            <Button component="a" href="#projects" onClick={(event) => onNavigate(event, "#projects")} sx={{ minHeight: 52, padding: "0 22px", borderRadius: "999px", background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))", color: "var(--white)", boxShadow: "0 16px 32px var(--glow)", transition: "transform .25s ease", "&:hover": { transform: "translateY(-2px)" } }}>
              {t("cta_view_projects")}
            </Button>
          </Stack>

        </Box>

        <Box sx={{ display: "flex", minHeight: { xs: 275, md: 540 }, alignItems: "center", justifyContent: "center", order: { xs: 1, md: 0 }, position: "relative", zIndex: 1 }} aria-label="Profile visual">
          {SHOW_FLOATING_ICONS && (
            <Box className="orbit-wrap" aria-label="Technology logos">
              {floatingLanguages.map((language) => (
                <Box component="span" key={language.label} className={language.className} aria-label={language.label}>
                  <Box component="img" src={language.logo} alt="" aria-hidden="true" />
                </Box>
              ))}
            </Box>
          )}

          <Box sx={{ position: "relative", width: "min(540px, 82%)", aspectRatio: 1, borderRadius: "36% 64% 58% 42% / 42% 38% 62% 58%", overflow: "hidden", border: "1px solid var(--line)", background: "linear-gradient(150deg, rgba(122,165,109,.32), rgba(242,195,139,.26))", boxShadow: "0 30px 70px var(--shadow), 0 0 0 16px rgba(255,255,255,.05)", animation: "photoFloat 6s ease-in-out infinite", "@keyframes photoFloat": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } }, "@media (max-width: 640px)": { width: 248, boxShadow: "0 18px 38px var(--shadow), 0 0 0 8px rgba(255,255,255,.05)" } }}>
            <Image
              src={imageSrc}
              alt="Viola Yennalis Chandra"
              fill
              sizes="(max-width: 900px) 72vw, 410px"
              priority
              style={{ objectFit: "cover", objectPosition: "center 18%", transform: "scale(.92)", transformOrigin: "center bottom", filter: "saturate(1.1) contrast(1.08)" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
