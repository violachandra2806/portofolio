import { Box, Container, Typography } from "@mui/material";

export default function SectionHeader({ eyebrow, title, align = "center" }) {
  return (
    <Container
      component={Box}
      sx={{ width: "min(1280px, calc(100% - 56px))", margin: "0 auto 38px", textAlign: align }}
    >
      <Typography component="p" sx={{ margin: "0 0 16px", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "var(--font-size-nav)", fontWeight: "var(--weight-bold)" }}>{eyebrow}</Typography>
      <Typography component="h2" variant="h2" sx={{ margin: 0, lineHeight: 0.96, letterSpacing: "-0.06em", fontSize: "clamp(3rem, 5vw, 5.8rem)", maxWidth: 920, marginLeft: "auto", marginRight: "auto" }}>{title}</Typography>
    </Container>
  );
}
