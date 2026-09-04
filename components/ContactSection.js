import EmailOutlined from "@mui/icons-material/EmailOutlined";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import YouTube from "@mui/icons-material/YouTube";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { personalInfo } from "../locales/information";
import { t } from "../locales/translate";

const contactLinks = [
  { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, Icon: EmailOutlined },
  { label: "LinkedIn", value: personalInfo.links.linkedinUsername, href: personalInfo.links.linkedin, Icon: LinkedIn },
  { label: "Instagram", value: personalInfo.links.instagramUsername, href: personalInfo.links.instagram, Icon: Instagram },
  { label: "GitHub", value: personalInfo.links.githubUsername, href: personalInfo.links.github, Icon: GitHub },
  { label: "YouTube", value: personalInfo.links.youtubeUsername, href: personalInfo.links.youtube, Icon: YouTube },
];

const fallingPetals = [
  { left: "5%", delay: "-2s", duration: "15s", drift: "48px", rotation: "18deg", scale: .8, color: "#e7a2a0" },
  { left: "14%", delay: "-9s", duration: "19s", drift: "-54px", rotation: "-24deg", scale: 1.05, color: "#f1c4ad" },
  { left: "27%", delay: "-5s", duration: "17s", drift: "66px", rotation: "42deg", scale: .72, color: "#d9828e" },
  { left: "39%", delay: "-13s", duration: "21s", drift: "-44px", rotation: "-12deg", scale: .92, color: "#edb5bd" },
  { left: "53%", delay: "-7s", duration: "16s", drift: "58px", rotation: "30deg", scale: 1.12, color: "#f0b39d" },
  { left: "66%", delay: "-15s", duration: "20s", drift: "-70px", rotation: "-38deg", scale: .76, color: "#dc8c9e" },
  { left: "78%", delay: "-4s", duration: "18s", drift: "45px", rotation: "16deg", scale: 1, color: "#f2c7ae" },
  { left: "91%", delay: "-11s", duration: "22s", drift: "-52px", rotation: "-28deg", scale: .86, color: "#e5a0ae" },
  { left: "9%", delay: "-17s", duration: "23s", drift: "-38px", rotation: "-46deg", scale: .68, color: "#efb2a9" },
  { left: "20%", delay: "-14s", duration: "16s", drift: "72px", rotation: "26deg", scale: .94, color: "#d98798" },
  { left: "33%", delay: "-19s", duration: "20s", drift: "-62px", rotation: "-18deg", scale: .82, color: "#f0c1ac" },
  { left: "46%", delay: "-1s", duration: "18s", drift: "52px", rotation: "48deg", scale: 1.08, color: "#e49aa5" },
  { left: "59%", delay: "-10s", duration: "22s", drift: "-46px", rotation: "-32deg", scale: .74, color: "#f2b9a7" },
  { left: "72%", delay: "-16s", duration: "17s", drift: "64px", rotation: "22deg", scale: .9, color: "#d98493" },
  { left: "85%", delay: "-6s", duration: "21s", drift: "-58px", rotation: "-14deg", scale: 1.02, color: "#edb0b9" },
  { left: "97%", delay: "-20s", duration: "19s", drift: "36px", rotation: "36deg", scale: .7, color: "#f0c4ad" },
];

export default function ContactSection() {
  return (
    <Box component="section" id="contact" sx={{ position: "relative", display: "flex", alignItems: "center", boxSizing: "border-box", minHeight: "100vh", padding: "72px 0", overflow: "hidden", background: "linear-gradient(180deg, #f6e8dc 0%, #f6e8dc 12%, #f5e2dd 42%, #f4dce1 100%)", scrollMarginTop: 96 }}>
      <Box aria-hidden="true" sx={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none", "@media (prefers-reduced-motion: reduce) .contact-petal": { animationPlayState: "paused" } }}>
        {fallingPetals.map((petal, index) => (
          <Box
            className="contact-petal"
            key={index}
            sx={{
              position: "absolute",
              top: "-7%",
              left: petal.left,
              width: 17,
              height: 26,
              borderRadius: "72% 28% 72% 28%",
              background: `linear-gradient(145deg, ${petal.color}, color-mix(in srgb, ${petal.color} 52%, white))`,
              boxShadow: `5px 7px 14px color-mix(in srgb, ${petal.color} 34%, transparent)`,
              opacity: .72,
              transform: `scale(${petal.scale}) rotate(${petal.rotation})`,
              animation: `contactPetalFall ${petal.duration} ease-in-out ${petal.delay} infinite`,
              "@keyframes contactPetalFall": {
                "0%": { transform: `translate3d(0, -12vh, 0) scale(${petal.scale}) rotate(${petal.rotation})`, opacity: 0 },
                "12%": { opacity: .72 },
                "48%": { transform: `translate3d(${petal.drift}, 42vh, 0) scale(${petal.scale}) rotate(150deg)` },
                "82%": { transform: `translate3d(calc(${petal.drift} * -0.45), 86vh, 0) scale(${petal.scale}) rotate(285deg)`, opacity: .58 },
                "100%": { transform: `translate3d(calc(${petal.drift} * 0.35), 116vh, 0) scale(${petal.scale}) rotate(390deg)`, opacity: 0 },
              },
            }}
          />
        ))}
      </Box>
      <Container sx={{ position: "relative", zIndex: 1, width: "min(1180px, calc(100% - 56px))", margin: "0 auto", transform: "translateY(-24px)", "@media (max-width: 640px)": { transform: "translateY(-14px)" } }}>
        <Box sx={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <Typography component="p" sx={{ margin: "0 0 16px", color: "#8f5665", textTransform: "uppercase", letterSpacing: ".18em", fontSize: "var(--font-size-nav)", fontWeight: "var(--weight-bold)" }}>{t("contact_label")}</Typography>
          <Typography component="h2" sx={{ margin: 0, maxWidth: 760, color: "#8f5665", fontSize: "clamp(3rem, 5vw, 5.8rem)", lineHeight: .96, letterSpacing: "-.06em" }}>{t("contact_title")}</Typography>
          <Typography component="p" sx={{ maxWidth: 650, margin: "24px auto 0", color: "var(--muted)", fontSize: "var(--font-size-lead)", lineHeight: 1.65 }}>{t("contact_text")}</Typography>
        </Box>

        <Stack direction="row" sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: { xs: 2.5, md: 4 }, margin: "58px auto 0", maxWidth: 900 }}>
          {contactLinks.map((link) => {
            return (
              <Box key={link.label} sx={{ display: "flex", flex: "0 1 140px", minWidth: { xs: 112, md: 140 }, flexDirection: "column", alignItems: "center", gap: 1 }}>
                <IconButton component="a" href={link.href} aria-label={`${link.label}: ${link.value}`} target={link.label === "Email" ? undefined : "_blank"} rel={link.label === "Email" ? undefined : "noreferrer"} sx={{ width: 64, height: 64, color: "#8f5665", background: "rgba(255, 250, 243, .42)", boxShadow: "0 10px 24px rgba(143, 86, 101, .16)", backdropFilter: "blur(8px)", transition: "transform .25s ease, color .25s ease, background-color .25s ease, box-shadow .25s ease", "&:hover": { color: "#fff8f5", background: "#b96f7e", boxShadow: "0 14px 30px rgba(143, 86, 101, .24)", transform: "translateY(-4px)" } }}>
                  <link.Icon sx={{ fontSize: 29 }} />
                </IconButton>
                <Typography component="span" sx={{ maxWidth: 150, overflow: "hidden", color: "var(--muted)", fontSize: "var(--font-size-xs)", lineHeight: 1.35, textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{link.value}</Typography>
              </Box>
            );
          })}
          </Stack>
      </Container>
    </Box>
  );
}
