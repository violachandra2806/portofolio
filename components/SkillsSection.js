import { Box, Card, CardContent, Chip, Container, Divider, Stack, Typography } from "@mui/material";
import { skillGroups, skillLogoSlugs } from "../locales/skills";
import { t } from "../locales/translate";

const getSkillLogo = (skill) => `https://cdn.simpleicons.org/${skillLogoSlugs[skill]}`;

const leftSnowflakes = Array.from({ length: 20 }, (_, index) => ({
  id: `left-${index}`,
  left: `${2 + index * 4.9}%`,
  delay: `${index * -1.7}s`,
  duration: `${15 + (index % 5) * 3}s`,
  drift: `${-150 - (index % 5) * 30}px`,
  rotation: `${-30 + index * 12}deg`,
}));

const rightSnowflakes = Array.from({ length: 20 }, (_, index) => ({
  id: `right-${index}`,
  right: `${2 + index * 4.9}%`,
  delay: `${index * -2.1}s`,
  duration: `${17 + (index % 5) * 3}s`,
  drift: `${150 + (index % 5) * 30}px`,
  rotation: `${30 - index * 12}deg`,
}));

export default function SkillsSection() {
  return (
    <Box component="section" id="skills" sx={{ position: "relative", isolation: "isolate", minHeight: "100vh", padding: "88px 0", background: "linear-gradient(180deg, #d9e8d5 0%, #c7dac8 18%, #b8cfbc 50%, #d9e8d5 84%, var(--bg) 100%)", scrollMarginTop: 96 }}>
      <Box aria-hidden="true" sx={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1, "@media (prefers-reduced-motion: reduce) .skills-snowflake": { animationPlayState: "paused" } }}>
        {leftSnowflakes.map((snowflake) => (
          <Box
            key={snowflake.id}
            component="span"
            className="skills-snowflake"
            sx={{
              position: "absolute",
              top: "-6%",
              left: snowflake.left,
              width: `${9 + (Number(snowflake.id.split("-")[1]) % 3) * 3}px`,
              height: `${9 + (Number(snowflake.id.split("-")[1]) % 3) * 3}px`,
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 1) 0 18%, rgba(255, 255, 255, .96) 36%, rgba(211, 235, 218, .9) 100%)",
              opacity: 0.94,
              boxShadow: "0 0 16px rgba(255, 255, 255, .94), 0 3px 10px rgba(92, 139, 103, .28)",
              transformOrigin: "center",
              animation: `skillsSnowFall ${snowflake.duration} ease-in-out ${snowflake.delay} infinite`,
              "@keyframes skillsSnowFall": {
                "0%": { transform: `translate3d(0, -12vh, 0) rotate(${snowflake.rotation})`, opacity: 0 },
                "10%": { opacity: 0.94 },
                "48%": { transform: `translate3d(${snowflake.drift}, 38vh, 0) scale(1.12) rotate(180deg)` },
                "78%": { transform: `translate3d(calc(${snowflake.drift} * 0.35), 72vh, 0) rotate(300deg)`, opacity: 0.72 },
                "100%": { transform: `translate3d(calc(${snowflake.drift} * 0.65), 120vh, 0) rotate(360deg)`, opacity: 0 },
              }
            }}
          />
        ))}

        {rightSnowflakes.map((snowflake) => (
          <Box
            key={snowflake.id}
            component="span"
            className="skills-snowflake"
            sx={{
              position: "absolute",
              top: "-6%",
              right: snowflake.right,
              width: `${9 + (Number(snowflake.id.split("-")[1]) % 3) * 3}px`,
              height: `${9 + (Number(snowflake.id.split("-")[1]) % 3) * 3}px`,
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 1) 0 18%, rgba(255, 255, 255, .96) 36%, rgba(211, 235, 218, .9) 100%)",
              opacity: 0.94,
              boxShadow: "0 0 16px rgba(255, 255, 255, .94), 0 3px 10px rgba(92, 139, 103, .28)",
              transformOrigin: "center",
              animation: `skillsSnowFallRight ${snowflake.duration} ease-in-out ${snowflake.delay} infinite`,
              "@keyframes skillsSnowFallRight": {
                "0%": { transform: `translate3d(0, -12vh, 0) rotate(${snowflake.rotation})`, opacity: 0 },
                "10%": { opacity: 0.94 },
                "48%": { transform: `translate3d(${snowflake.drift}, 38vh, 0) scale(1.12) rotate(-180deg)` },
                "78%": { transform: `translate3d(calc(${snowflake.drift} * 0.35), 72vh, 0) rotate(-300deg)`, opacity: 0.72 },
                "100%": { transform: `translate3d(calc(${snowflake.drift} * 0.65), 120vh, 0) rotate(-360deg)`, opacity: 0 },
              }
            }}
          />
        ))}

      </Box>

      <Container sx={{ position: "relative", zIndex: 1, width: "min(1180px, calc(100% - 56px))", margin: "0 auto" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.08fr .92fr" }, alignItems: "center", gap: { xs: 5, md: 16 }, maxWidth: 1120, margin: "0 auto" }}>
          <Box sx={{ maxWidth: 500, justifySelf: "end", "@media (max-width: 900px)": { justifySelf: "center", textAlign: "center", maxWidth: 590 } }}>
            <Typography component="p" sx={{ margin: "0 0 16px", color: "#e6f2df", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "var(--font-size-nav)", fontWeight: "var(--weight-bold)" }}>{t("skills_label")}</Typography>
            <Typography component="h2" sx={{ margin: 0, color: "#f8fff6", fontSize: "clamp(3rem, 5vw, 5.4rem)", lineHeight: .94, letterSpacing: "-0.06em", fontFamily: "var(--font-display)" }}>{t("skills_title")}</Typography>
            <Typography component="p" sx={{ maxWidth: 590, margin: "30px 0 0", color: "rgba(248, 255, 246, .82)", fontSize: "var(--font-size-lead)", lineHeight: 1.65 }}>{t("skills_text")}</Typography>
          </Box>

          <Card elevation={0} sx={{ padding: 2, border: "1px solid var(--line)", borderRadius: "28px", background: "linear-gradient(145deg, rgba(255,250,243,.92), rgba(238,246,225,.72))" }}>
            <CardContent sx={{ padding: "14px !important" }}>
              <Stack spacing={1}>
                {skillGroups.map((group, groupIndex) => (
                  <Box key={group.key} sx={{ "--group-color": group.key === "languages" ? "var(--language-color)" : group.key === "frameworksLibraries" ? "var(--framework-color)" : group.key === "toolsPlatforms" ? "var(--tool-color)" : "var(--skill-color)" }}>
                    <Typography component="h3" sx={{ margin: "0 0 16px", color: "var(--group-color)", fontSize: "var(--font-size-nav)", fontWeight: "var(--weight-bold)", letterSpacing: ".14em", textTransform: "uppercase", "@media (max-width: 640px)": { textAlign: "center" } }}>
                      {t(`skills_category_${group.key}`)}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.25, padding: "2px", "@media (max-width: 640px)": { justifyContent: "center" } }}>
                      {group.items.map((skill) => {
                        return (
                          <Chip
                            key={skill}
                            sx={{ display: "inline-flex", minHeight: 44, borderRadius: "999px", color: "var(--group-color)", borderColor: "color-mix(in srgb, var(--group-color) 42%, transparent)", background: "color-mix(in srgb, var(--group-color) 12%, transparent)", fontWeight: "var(--weight-bold)", "& .MuiChip-label": { paddingLeft: "4px", paddingRight: "10px", color: "var(--text)", fontSize: "var(--font-size-sm)" }, "& .MuiChip-icon": { color: "var(--group-color)", width: 19, height: 19, marginLeft: "6px", marginRight: "5px" } }}
                            icon={
                              <Box
                                component="img"
                                src={getSkillLogo(skill)}
                                alt=""
                                aria-hidden="true"
                              />
                            }
                            label={skill}
                            variant="outlined"
                          />
                        );
                      })}
                    </Box>
                    {groupIndex < skillGroups.length - 1 && <Divider sx={{ margin: "16px 0", borderColor: "color-mix(in srgb, var(--group-color) 35%, var(--line))" }} />}
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
