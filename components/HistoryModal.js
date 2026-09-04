import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import { ChevronLeft, ChevronRight, Close } from "@mui/icons-material";

const localized = (value, locale) => value[locale] ?? value.en;

export default function HistoryModal({ entry, locale, activeImageIndex, onClose, onNext, onPrevious, onSetActiveImage }) {
  const indicatorGroupSize = 5;
  const indicatorGroupStart = Math.floor(activeImageIndex / indicatorGroupSize) * indicatorGroupSize;
  const visibleIndicators = entry ? entry.gallery.slice(indicatorGroupStart, indicatorGroupStart + indicatorGroupSize) : [];

  return (
    <Dialog
      open={Boolean(entry)}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      slotProps={{
        paper: {
          sx: {
            position: "relative",
            width: "min(1040px, calc(100vw - 40px))",
            maxHeight: "min(84vh, 820px)",
            overflow: "hidden",
            border: "1px solid var(--line)",
            borderRadius: "24px",
            background: "var(--panel-strong)",
            boxShadow: "0 30px 70px var(--shadow)",
            animation: "modalPop 0.32s ease",
            "@keyframes modalPop": {
              from: { opacity: 0, transform: "scale(0.94) translateY(18px)" },
              to: { opacity: 1, transform: "scale(1) translateY(0)" },
            },
          },
        },
      }}
    >
      {entry && (
        <DialogContent sx={{ position: "relative", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1.25fr 0.95fr" }, gridTemplateRows: { xs: "minmax(320px, 46vh) minmax(0, 1fr)", sm: "minmax(0, 1fr)" }, height: "min(84vh, 820px)", minHeight: { xs: "auto", sm: 560 }, maxHeight: "min(84vh, 820px)", boxSizing: "border-box", padding: "0 !important", overflow: "hidden" }}>
          <IconButton sx={{ position: "absolute", top: 16, right: 16, zIndex: 2, border: "1px solid var(--line)", borderRadius: "50%", background: "var(--panel)", color: "var(--text)", transition: "transform 0.2s ease, background 0.2s ease", "&:hover": { transform: "rotate(90deg)", background: "var(--bg-soft)" } }} aria-label="Close history details" onClick={onClose}>
            <Close />
          </IconButton>
          <Box className="history-gallery-frame" sx={{ position: "relative", zIndex: 0, minWidth: 0, minHeight: { xs: 320, sm: 560 }, height: { xs: "46vh", sm: "auto" }, padding: { xs: 2, sm: "22px 18px 22px 22px" }, overflow: "hidden", background: "linear-gradient(145deg, #f6e8dc, #f4dce1)", borderRight: { xs: "none", sm: "1px solid var(--line)" }, borderBottom: { xs: "1px solid var(--line)", sm: "none" }, "&:hover .history-gallery-arrow": { opacity: 1, visibility: "visible", pointerEvents: "auto" } }}>
            <Box key={`${entry.title}-${activeImageIndex}`} sx={{ width: "100%", height: "100%", animation: "historyImageFade .9s cubic-bezier(0.4, 0, 0.2, 1) both", "@keyframes historyImageFade": { "0%": { opacity: 0 }, "35%": { opacity: 0 }, "100%": { opacity: 1 } } }}>
              <Box
                component="img"
                src={entry.gallery[activeImageIndex]}
                alt={`${localized(entry.title, locale)} preview ${activeImageIndex + 1}`}
                sx={{ width: "100%", height: "100%", minHeight: { xs: 0, sm: 516 }, display: "block", objectFit: "cover", objectPosition: "center 18%", borderRadius: "22px", border: "1px solid var(--line)", boxShadow: "0 18px 40px var(--shadow)", animation: "historyImageZoom 12s ease-in-out infinite", "@keyframes historyImageZoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.045)" } } }}
              />
            </Box>
            {entry.gallery.length > 1 && <>
              <IconButton className="history-gallery-arrow" sx={{ position: "absolute", top: "50%", left: 32, zIndex: 1, transform: "translateY(-50%)", width: 42, height: 42, border: "1px solid var(--line)", borderRadius: "50%", background: "var(--panel)", color: "var(--text)", opacity: 0, visibility: "hidden", pointerEvents: "none", transition: "opacity .25s ease, transform .25s ease, visibility .25s ease", "&:hover, &:focus-visible": { transform: "translateY(-50%) scale(1.12)" }, "&:focus-visible": { opacity: 1, visibility: "visible", pointerEvents: "auto" } }} onClick={onPrevious} aria-label="Previous image"><ChevronLeft /></IconButton>
              <IconButton className="history-gallery-arrow" sx={{ position: "absolute", top: "50%", right: 32, zIndex: 1, transform: "translateY(-50%)", width: 42, height: 42, border: "1px solid var(--line)", borderRadius: "50%", background: "var(--panel)", color: "var(--text)", opacity: 0, visibility: "hidden", pointerEvents: "none", transition: "opacity .25s ease, transform .25s ease, visibility .25s ease", "&:hover, &:focus-visible": { transform: "translateY(-50%) scale(1.12)" }, "&:focus-visible": { opacity: 1, visibility: "visible", pointerEvents: "auto" } }} onClick={onNext} aria-label="Next image"><ChevronRight /></IconButton>
            </>}
            <Box key={`${entry.title}-indicator-group-${indicatorGroupStart}`} sx={{ position: "absolute", left: "50%", bottom: { xs: 28, sm: 36 }, zIndex: 1, display: "flex", gap: .75, transform: "translateX(-50%)", animation: "historyGroupIn .28s ease both", "@keyframes historyGroupIn": { from: { opacity: 0, transform: "translateX(-50%) translateY(4px)" }, to: { opacity: 1, transform: "translateX(-50%) translateY(0)" } } }} aria-label={`History gallery navigation, images ${indicatorGroupStart + 1} to ${Math.min(indicatorGroupStart + indicatorGroupSize, entry.gallery.length)} of ${entry.gallery.length}`}>
              {visibleIndicators.map((_, visibleIndex) => {
                const index = indicatorGroupStart + visibleIndex;
                return <Box component="button" key={`${entry.title}-${index}`} sx={{ position: "relative", width: 42, height: 4, padding: 0, overflow: "hidden", border: 0, borderRadius: "999px", background: "rgba(237, 181, 189, .62)", cursor: "pointer", transition: "background .25s ease, transform .25s ease", "&:hover": { background: "rgba(217, 135, 152, .78)", transform: "scaleY(1.5)" }, "&:after": index === activeImageIndex ? { content: "''", position: "absolute", inset: 0, transformOrigin: "left center", background: "#b96f7e", animation: "historyGalleryProgress 7s linear both", "@keyframes historyGalleryProgress": { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } } } : {} }} aria-label={`View image ${index + 1}`} aria-current={index === activeImageIndex ? "true" : undefined} onClick={() => onSetActiveImage(index)} />;
              })}
            </Box>
          </Box>
          <Box sx={{ position: "relative", zIndex: 1, display: "flex", minWidth: 0, minHeight: 0, boxSizing: "border-box", flexDirection: "column", padding: { xs: "30px 24px 26px", sm: "46px 38px 30px" }, overflowY: "auto", overflowWrap: "anywhere", scrollbarWidth: "thin", background: "color-mix(in srgb, var(--panel) 88%, var(--bg-soft))" }}>
            <Typography component="span" sx={{ color: "var(--primary-strong)", fontSize: "var(--font-size-xs)", fontWeight: "var(--weight-bold)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{localized(entry.period, locale)}</Typography>
            <Typography component="h3" sx={{ maxWidth: 540, margin: "12px 44px 0 0", color: "var(--text)", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1 }}>{localized(entry.title, locale)}</Typography>
            <Typography component="p" sx={{ margin: "12px 0 0", color: "var(--accent-strong)", fontWeight: "var(--weight-bold)" }}>
              {localized(entry.organization, locale)} <span aria-hidden="true">•</span> {localized(entry.location, locale)}
            </Typography>
            <Box component="ul" sx={{ display: "grid", gap: 1, margin: "28px 0 0", paddingLeft: "18px", color: "var(--muted)" }}>
              {localized(entry.details, locale).map((detail) => (
                <Typography component="li" key={detail}>{detail}</Typography>
              ))}
            </Box>
            {entry.activities?.map((activity) => (
              <Box sx={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid var(--line)" }} key={localized(activity.title, locale)}>
                <Typography component="p" sx={{ margin: "0 0 12px", color: "var(--primary-strong)", fontSize: "var(--font-size-xs)", fontWeight: "var(--weight-bold)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{localized(activity.label, locale)}</Typography>
                <Typography component="h4" sx={{ margin: 0, color: "var(--text)" }}>{localized(activity.title, locale)}</Typography>
              <Typography component="p" sx={{ margin: "12px 0 0", color: "var(--accent-strong)", fontWeight: "var(--weight-bold)" }}>
                {localized(activity.organization, locale)} <span aria-hidden="true">•</span> {localized(activity.period, locale)}
              </Typography>
              <Box component="ul" sx={{ display: "grid", gap: 1, margin: "16px 0 0", paddingLeft: "18px", color: "var(--muted)" }}>
                {localized(activity.details, locale).map((detail) => (
                  <Typography component="li" key={detail}>{detail}</Typography>
                ))}
              </Box>
              </Box>
            ))}
          </Box>
        </DialogContent>
      )}
    </Dialog>
  );
}
