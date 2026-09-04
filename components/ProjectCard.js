import { Box, Card, CardActionArea, CardContent, Chip, Stack, Typography } from "@mui/material";
import { projectCategoryStyles } from "../locales/projects";

export default function ProjectCard({ title, description, tags, badge, badgeColor, image, onOpen }) {
  const activeBadgePalette = projectCategoryStyles[badgeColor] || projectCategoryStyles.personal;

  return (
    <Card elevation={0} sx={{ position: "relative", flex: { xs: "0 0 min(82vw, 340px)", md: "initial" }, scrollSnapAlign: "center", overflow: "hidden", width: { xs: "min(82vw, 340px)", md: "100%" }, height: { xs: 430, md: 560 }, border: "1px solid var(--line)", borderRadius: { xs: "22px", md: "28px" }, background: "var(--panel)", cursor: "pointer", transition: "transform .28s ease, box-shadow .28s ease", "&:hover": { transform: "translateY(-6px)", boxShadow: "0 20px 40px var(--shadow)" } }}>
      <CardActionArea component="button" onClick={onOpen} sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", height: "100%", textAlign: "left" }}>
      <Box sx={{ position: "relative", flex: "0 0 auto", width: "100%", aspectRatio: { xs: "16 / 9", md: "16 / 10" }, overflow: "hidden", borderBottom: "1px solid var(--line)" }}>
        <Box component="img" src={image} alt={title} sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transform: "scale(1.04)" }} />
      </Box>

      <CardContent sx={{ display: "flex", flex: 1, minHeight: 0, flexDirection: "column", padding: "20px 18px 18px" }}>
        <Chip label={badge} size="small" sx={{ alignSelf: "flex-start", marginBottom: 1.75, borderRadius: "999px", background: activeBadgePalette.background, border: `1px solid ${activeBadgePalette.border}`, color: activeBadgePalette.color, fontSize: "var(--font-size-xs)", letterSpacing: "0.12em", textTransform: "uppercase" }} />
        <Typography component="h3" sx={{ margin: "0 0 12px", fontSize: "var(--font-size-card-title)", fontWeight: "var(--weight-bold)", lineHeight: 1.2 }}>{title}</Typography>
        <Typography component="p" sx={{ margin: 0, color: "var(--muted)", fontSize: "var(--font-size-detail)", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{description}</Typography>
            <Stack direction="row" sx={{ display: "flex", maxHeight: { xs: 64, md: "none" }, overflow: "hidden", flexWrap: "wrap", alignContent: "flex-start", gap: 1, marginTop: 1.75 }}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" sx={{ borderRadius: "999px", background: "var(--panel-strong)", border: "1px solid var(--line)", color: "var(--muted)" }} />
          ))}
        </Stack>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
