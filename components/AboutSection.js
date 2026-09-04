"use client";

import { useEffect, useState } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { experienceHistory } from "../locales/information";
import { aboutHistory } from "../locales/en_id";
import { t } from "../locales/translate";
import HistoryModal from "./HistoryModal";

const localized = (value, locale) => value[locale] ?? value.en;

export default function AboutSection({ locale }) {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!selectedEntry || selectedEntry.gallery.length < 2) return;

    const timer = window.setTimeout(() => {
      setActiveImageIndex((current) => (current + 1) % selectedEntry.gallery.length);
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [selectedEntry, activeImageIndex]);
  const sortedHistory = [...experienceHistory].sort((first, second) => {
    const firstStart = Number(first.period.en.match(/\d{4}/)?.[0] ?? 0);
    const secondStart = Number(second.period.en.match(/\d{4}/)?.[0] ?? 0);
    return secondStart - firstStart;
  });

  const renderEntry = (entry) => (
    <Box key={`${entry.type}-${localized(entry.title, locale)}`} sx={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "28px minmax(0, 1fr)", alignItems: "center", gap: 2, background: "transparent" }}>
      <Box aria-hidden="true" sx={{ position: "relative", zIndex: 2, justifySelf: "center", width: 16, height: 16, border: "3px solid var(--bg)", borderRadius: "50%", background: entry.current ? "var(--primary)" : "#aeb6ad", boxShadow: entry.current ? "0 0 0 1px var(--primary)" : "0 0 0 1px #aeb6ad", animation: entry.current ? "currentPulse 2.2s ease-in-out infinite" : "none", "@keyframes currentPulse": { "0%, 100%": { boxShadow: "0 0 0 1px var(--primary), 0 0 0 0 var(--glow)" }, "50%": { boxShadow: "0 0 0 1px var(--primary), 0 0 0 8px transparent" } } }} />
    <Paper
      key={`${entry.type}-${localized(entry.title, locale)}`}
      className={`history-card glass-card${entry.current ? " is-current" : ""}`}
      elevation={0}
      sx={{ position: "relative", zIndex: 1, height: 164, minHeight: 164, overflow: "hidden", padding: "18px 22px", border: "1px solid", borderColor: entry.current ? "var(--primary)" : "var(--line)", borderRadius: "14px", background: entry.current ? "var(--panel)" : "color-mix(in srgb, var(--panel) 72%, var(--bg))", cursor: "pointer", transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease", "&:hover, &:focus, &:focus-visible": { transform: "translateY(-3px)", borderColor: "var(--primary)", boxShadow: "0 16px 30px var(--shadow)" }, "& h4": { display: "-webkit-box", margin: 0, overflow: "hidden", color: entry.current ? "var(--text)" : "var(--muted)", fontSize: "1rem", lineHeight: 1.25, WebkitBoxOrient: "vertical", WebkitLineClamp: 2 }, "& .history-summary": { display: "-webkit-box", maxWidth: "calc(100% - 100px)", overflow: "hidden", WebkitBoxOrient: "vertical", WebkitLineClamp: 2 } }}
      onClick={() => {
        setSelectedEntry(entry);
        setActiveImageIndex(0);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          setSelectedEntry(entry);
          setActiveImageIndex(0);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1.75, marginBottom: 1.5, "@media (max-width: 900px)": { flexDirection: "column", gap: .5 } }}>
        <Typography component="span" sx={{ color: "var(--primary-strong)", fontSize: "var(--font-size-xs)", fontWeight: "var(--weight-bold)", letterSpacing: ".06em", textTransform: "uppercase" }}>{localized(entry.period, locale)}</Typography>
        <Typography component="span" sx={{ color: "var(--muted)", fontSize: "var(--font-size-xs)", textAlign: "right", "@media (max-width: 900px)": { textAlign: "left" } }}>{localized(entry.location, locale)}</Typography>
      </Box>
      <Typography component="h4">{localized(entry.title, locale)}</Typography>
      <Typography component="p" sx={{ margin: "6px 0 10px", color: entry.current ? "var(--accent-strong)" : "var(--muted)", fontWeight: "var(--weight-bold)" }}>{localized(entry.organization, locale)}</Typography>
      <Typography component="p" className="history-summary" sx={{ margin: 0, color: "var(--muted)", fontSize: "var(--font-size-detail)", lineHeight: 1.5 }}>{localized(entry.summary, locale)}</Typography>
      <Box component="span" sx={{ position: "absolute", right: 22, bottom: 18, display: "inline-flex", alignItems: "center", gap: .75, color: "var(--primary)", fontSize: "var(--font-size-xs)", fontWeight: "var(--weight-bold)", letterSpacing: ".08em", textTransform: "uppercase", transition: "gap .2s ease", "&:hover": { gap: 1.25 } }}>{t("history_details")} <ArrowForward sx={{ fontSize: 17 }} aria-hidden="true" /></Box>
    </Paper>
    </Box>
  );

  return (
    <Box component="section" id="about" sx={{ position: "relative", zIndex: 2, minHeight: "calc(100vh - 78px)", boxSizing: "border-box", padding: "88px 0", display: "flex", alignItems: "center", background: "linear-gradient(180deg, var(--bg) 0%, var(--bg) 68%, #d9e8d5 100%)", scrollMarginTop: 78, animation: "aboutReveal .7s ease both", "@keyframes aboutReveal": { from: { opacity: 0, transform: "translateY(18px)" }, to: { opacity: 1, transform: "translateY(0)" } } }}>
      <Container sx={{ width: "min(1180px, calc(100% - 56px))", margin: "0 auto" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.08fr .92fr" }, alignItems: "center", gap: { xs: 5, md: 16 }, maxWidth: 1120, margin: "0 auto" }}>
          <Box sx={{ width: "100%", maxWidth: 590, justifySelf: "center", order: { xs: 2, md: 0 } }}>
            <Typography component="h3" sx={{ display: "flex", alignItems: "center", gap: 1.75, margin: "0 0 24px", color: "var(--text)", fontSize: "var(--font-size-card-title)" }}>{localized(aboutHistory.experience, locale)}<Box component="span" sx={{ height: 1, flex: 1, background: "var(--line)" }} /></Typography>
            <Box sx={{ position: "relative", display: "grid", gap: 2.25, paddingLeft: "22px", background: "transparent" }}>
              <Box aria-hidden="true" sx={{ position: "absolute", top: 100, bottom: 100, left: 36, width: "1px", zIndex: 0, background: "var(--line)" }} />
              {sortedHistory.map(renderEntry)}
            </Box>
          </Box>
          <Box sx={{ maxWidth: 500, justifySelf: "end", order: { xs: 1, md: 0 }, "@media (max-width: 900px)": { justifySelf: "center", textAlign: "center", maxWidth: 590 } }}>
            <Typography component="p" sx={{ margin: "0 0 16px", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "var(--font-size-nav)", fontWeight: "var(--weight-bold)" }}>{localized(aboutHistory.label, locale)}</Typography>
            <Typography component="h2" sx={{ margin: 0, fontSize: "clamp(3rem, 5vw, 5.4rem)", lineHeight: .94, letterSpacing: "-0.06em" }}>{localized(aboutHistory.title, locale)}</Typography>
            <Typography component="p" sx={{ maxWidth: 590, margin: "30px 0 0", color: "var(--muted)", fontSize: "var(--font-size-lead)", lineHeight: 1.65 }}>{localized(aboutHistory.intro, locale)}</Typography>
          </Box>
        </Box>
      </Container>
      <HistoryModal
        entry={selectedEntry}
        locale={locale}
        activeImageIndex={activeImageIndex}
        onClose={() => setSelectedEntry(null)}
        onNext={() => setActiveImageIndex((current) => (current + 1) % selectedEntry.gallery.length)}
        onPrevious={() => setActiveImageIndex((current) => (current - 1 + selectedEntry.gallery.length) % selectedEntry.gallery.length)}
        onSetActiveImage={setActiveImageIndex}
      />
    </Box>
  );
}
