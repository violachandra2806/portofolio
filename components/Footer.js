import { Box, Container, Typography } from "@mui/material";

export default function Footer({ text, rights }) {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid rgba(255, 248, 245, .28)", background: "#8f5665", padding: "30px 0" }}>
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 2, flexWrap: "wrap" }}>
        <Typography component="p" sx={{ display: "grid", gap: 0.5, margin: 0, color: "#fff8f5", textAlign: "center", fontSize: "var(--font-size-xs)" }}>
          <span>{text}</span>
          <span>{rights}</span>
        </Typography>
      </Container>
    </Box>
  );
}
