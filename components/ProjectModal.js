import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ChevronLeft, ChevronRight, Close, OpenInNew } from "@mui/icons-material";
import { projectCategoryStyles } from "../locales/projects";

export default function ProjectModal({
  project,
  activeImageIndex,
  onClose,
  onNext,
  onPrevious,
  onSetActiveImage,
}) {
  const badgePalette = projectCategoryStyles[project?.category] || projectCategoryStyles.personal;
  const indicatorGroupSize = 5;
  const indicatorGroupStart = Math.floor(activeImageIndex / indicatorGroupSize) * indicatorGroupSize;
  const visibleIndicators = project ? project.gallery.slice(indicatorGroupStart, indicatorGroupStart + indicatorGroupSize) : [];

  return (
    <Dialog
      open={Boolean(project)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            position: "relative",
            width: "min(1100px, calc(100vw - 40px))",
            maxHeight: "min(84vh, 820px)",
            overflow: "hidden",
            border: "1px solid var(--line)",
            borderRadius: "28px",
            background: "linear-gradient(135deg, var(--panel-strong), var(--panel))",
            boxShadow: "0 34px 90px var(--shadow), 0 0 0 1px rgba(255, 255, 255, 0.12)",
            animation: "modalPop 0.32s ease",
            "@keyframes modalPop": {
              from: { opacity: 0, transform: "scale(0.94) translateY(18px)" },
              to: { opacity: 1, transform: "scale(1) translateY(0)" },
            },
          },
        },
      }}
    >
      {project && (
        <DialogContent sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1.25fr 0.95fr" },
          gridTemplateRows: { xs: "minmax(280px, 46vh) minmax(0, 1fr)", sm: "minmax(0, 1fr)" },
          height: "min(84vh, 820px)",
          maxHeight: "min(84vh, 820px)",
          boxSizing: "border-box",
          padding: "0 !important",
          overflow: "hidden",
        }}>
          <IconButton
            sx={{
              position: "absolute",
              top: 18,
              right: 18,
              zIndex: 2,
              width: 38,
              height: 38,
              border: "1px solid var(--line)",
              borderRadius: "50%",
              background: "var(--panel)",
              color: "var(--text)",
              transition: "transform 0.2s ease, background 0.2s ease",
              "&:hover": { transform: "rotate(90deg)", background: "var(--bg-soft)" },
            }}
            aria-label="Close project details"
            onClick={onClose}
          >
            <Close />
          </IconButton>

          <Box className="project-gallery-frame" sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 0,
            minHeight: { xs: 280, sm: 0 },
            height: { xs: "46vh", sm: "auto" },
            boxSizing: "border-box",
            padding: { xs: 16 / 8, sm: "22px 18px 22px 22px" },
            background: "linear-gradient(145deg, var(--bg-strong), var(--surface-alt))",
            borderRight: { xs: "none", sm: "1px solid var(--line)" },
            borderBottom: { xs: "1px solid var(--line)", sm: "none" },
            "&:hover .project-gallery-arrow": { opacity: 1, visibility: "visible", pointerEvents: "auto" },
          }}>
            {activeImageIndex > 0 && <IconButton className="project-gallery-arrow" sx={{ position: "absolute", top: "50%", left: { xs: 24, sm: 30 }, zIndex: 1, transform: "translateY(-50%)", padding: 1, border: 0, borderRadius: 0, background: "transparent", color: "var(--white)", opacity: 0, visibility: "hidden", pointerEvents: "none", transition: "opacity .25s ease, transform .25s ease, visibility .25s ease", "&:hover, &:focus-visible": { background: "transparent", transform: "translateY(-50%) scale(1.12)" }, "&:focus-visible": { opacity: 1, visibility: "visible", pointerEvents: "auto" }, "&:hover": { opacity: 1 } }} onClick={onPrevious} aria-label="Previous image">
              <ChevronLeft sx={{ fontSize: 42, filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, .45))" }} />
            </IconButton>}
            <Box
              key={`${project.title}-${activeImageIndex}`}
              sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", maxHeight: { xs: "calc(46vh - 32px)", sm: "calc(84vh - 44px)" }, overflow: "hidden", borderRadius: "24px", border: "1px solid var(--line)", background: "rgba(255, 255, 255, 0.02)", animation: "projectImageFade 0.9s cubic-bezier(0.4, 0, 0.2, 1) both", "@keyframes projectImageFade": { "0%": { opacity: 0 }, "35%": { opacity: 0 }, "100%": { opacity: 1 } } }}
            >
              <Box
                component="img"
                src={project.gallery[activeImageIndex]}
                alt={`${project.title} preview ${activeImageIndex + 1}`}
                sx={{ display: "block", width: "auto", height: "auto", maxWidth: "100%", maxHeight: { xs: "calc(46vh - 32px)", sm: "min(calc(84vh - 44px), 620px)" }, objectFit: "contain", animation: "projectImageZoom 12s ease-in-out infinite", "@keyframes projectImageZoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.045)" } } }}
              />
            </Box>
            {activeImageIndex < project.gallery.length - 1 && <IconButton className="project-gallery-arrow" sx={{ position: "absolute", top: "50%", right: { xs: 24, sm: 30 }, zIndex: 1, transform: "translateY(-50%)", padding: 1, border: 0, borderRadius: 0, background: "transparent", color: "var(--white)", opacity: 0, visibility: "hidden", pointerEvents: "none", transition: "opacity .25s ease, transform .25s ease, visibility .25s ease", "&:hover, &:focus-visible": { background: "transparent", transform: "translateY(-50%) scale(1.12)" }, "&:focus-visible": { opacity: 1, visibility: "visible", pointerEvents: "auto" }, "&:hover": { opacity: 1 } }} onClick={onNext} aria-label="Next image">
              <ChevronRight sx={{ fontSize: 42, filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, .45))" }} />
            </IconButton>}
            <Stack key={`${project.title}-indicator-group-${indicatorGroupStart}`} direction="row" sx={{ position: "absolute", left: "50%", bottom: { xs: 28, sm: 34 }, zIndex: 1, gap: .75, transform: "translateX(-50%)", animation: "galleryGroupIn .28s ease both", "@keyframes galleryGroupIn": { from: { opacity: 0, transform: "translateX(-50%) translateY(4px)" }, to: { opacity: 1, transform: "translateX(-50%) translateY(0)" } } }} aria-label={`Project gallery navigation, images ${indicatorGroupStart + 1} to ${Math.min(indicatorGroupStart + indicatorGroupSize, project.gallery.length)} of ${project.gallery.length}`}>
              {visibleIndicators.map((_, visibleIndex) => {
                const index = indicatorGroupStart + visibleIndex;
                return (
                <Box
                  component="button"
                  key={`${project.title}-${index}`}
                  sx={{ position: "relative", width: 42, height: 4, padding: 0, overflow: "hidden", border: 0, borderRadius: "999px", background: "rgba(237, 181, 189, .62)", cursor: "pointer", transition: "background .25s ease, transform .25s ease", "&:hover": { background: "rgba(217, 135, 152, .78)", transform: "scaleY(1.5)" }, "&:after": index === activeImageIndex ? { content: "''", position: "absolute", inset: 0, transformOrigin: "left center", background: "#b96f7e", animation: "galleryProgress 7s linear both", "@keyframes galleryProgress": { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } } } : {} }}
                  aria-label={`View image ${index + 1}`}
                  aria-current={index === activeImageIndex ? "true" : undefined}
                  onClick={() => onSetActiveImage(index)}
                />
                );
              })}
            </Stack>
          </Box>

          <Box sx={{ display: "flex", minWidth: 0, minHeight: 0, boxSizing: "border-box", flexDirection: "column", gap: 2.25, padding: { xs: "30px 64px 26px 24px", sm: "38px 72px 28px 32px" }, overflowY: "auto", scrollbarWidth: "thin" }}>
            <Chip label={badgePalette.label} size="small" sx={{ alignSelf: "flex-start", borderRadius: "999px", background: badgePalette.background, border: `1px solid ${badgePalette.border}`, color: badgePalette.color, fontSize: "var(--font-size-xs)", letterSpacing: "0.12em", textTransform: "uppercase" }} />
            <Typography component="h3" sx={{ margin: 0, color: "var(--text)", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1 }}>{project.title}</Typography>
            <Typography component="p" sx={{ margin: 0, color: "var(--muted)" }}>{project.description}</Typography>
            <Stack direction="row" sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {project.tags.map((tag) => <Chip key={tag} label={tag} size="small" sx={{ borderRadius: "999px", background: "var(--panel-strong)", border: "1px solid var(--line)", color: "var(--muted)" }} />)}
            </Stack>
            {project.links?.length > 0 && (
              <Stack direction="row" sx={{ display: "flex", justifyContent: "flex-end", alignSelf: "stretch", gap: 1, marginTop: "auto", flexWrap: "wrap" }}>
                {project.links.map((link) => (
                  <Chip
                    key={link.label}
                    component="a"
                    clickable
                    icon={<OpenInNew sx={{ fontSize: 16 }} />}
                    label={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ borderRadius: "999px", color: "var(--primary-strong)", border: "1px solid var(--line)", background: "var(--bg-soft)", textDecoration: "none", "&:hover": { background: "var(--bg-strong)" } }}
                  />
                ))}
              </Stack>
            )}
            {project.details && (
              <Box sx={{ display: "grid", gap: 2, marginTop: 1 }}>
                {project.details.map((item) => (
                  <Box key={item.title} sx={{ padding: "16px 18px", borderRadius: "16px", border: "1px solid var(--line)", background: "rgba(255, 255, 255, 0.02)" }}>
                    <Typography component="h4" sx={{ margin: "0 0 8px", color: "var(--text)", fontSize: "var(--font-size-detail)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.title}</Typography>
                    <Typography component="p" sx={{ margin: 0, color: "var(--muted)" }}>{item.text}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </DialogContent>
      )}
    </Dialog>
  );
}
