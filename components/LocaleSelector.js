import SwapVert from "@mui/icons-material/SwapVert";
import { ButtonBase, MenuItem, Select, Stack, Typography } from "@mui/material";

export default function LocaleSelector({ value, onChange, label }) {
  return (
    <Stack direction="row" sx={{ display: "inline-flex", alignItems: "center", gap: 1.5, color: "var(--muted)", fontSize: "var(--font-size-xs)", lineHeight: 1, "@media (max-width: 900px)": { position: "fixed", left: 0, top: "50vh", zIndex: 60, transform: "translateY(-50%)", flexDirection: "column", gap: 0.75, padding: "10px 8px 10px 10px", border: "1px solid var(--line)", borderLeft: 0, borderRadius: "0 10px 10px 0", background: "rgba(255, 252, 246, .94)", boxShadow: "0 8px 24px rgba(76, 67, 54, .14)", backdropFilter: "blur(12px)" } }}>
      <Typography component="span" sx={{ whiteSpace: "nowrap", lineHeight: 1.2, "@media (max-width: 900px)": { display: "none" } }}>{label}</Typography>
      <ButtonBase
        aria-label="Switch language"
        onClick={() => onChange(value === "en" ? "id" : "en")}
        sx={{ display: "none", color: "var(--primary)", borderRadius: "50%", "@media (max-width: 900px)": { display: "inline-flex" } }}
      >
        <SwapVert sx={{ fontSize: 19 }} />
      </ButtonBase>
      <ButtonBase
        aria-label={`Switch to ${value === "en" ? "Bahasa Indonesia" : "English"}`}
        onClick={() => onChange(value === "en" ? "id" : "en")}
        sx={{ display: "none", color: "var(--text)", fontSize: "11px", fontWeight: "var(--weight-bold)", writingMode: "vertical-rl", transform: "rotate(180deg)", "@media (max-width: 900px)": { display: "inline-flex" } }}
      >
        {value === "id" ? "Bahasa Indonesia" : "English"}
      </ButtonBase>
      <Select
        size="small"
        variant="standard"
        disableUnderline
        value={value}
        displayEmpty
        renderValue={(selected) => (selected === "id" ? "Bahasa Indonesia" : "English")}
        inputProps={{ "aria-label": label }}
        onChange={(event) => onChange(event.target.value)}
        sx={{ minWidth: 170, height: 38, padding: 0, color: "var(--text)", fontSize: "var(--font-size-sm)", lineHeight: 1.2, fontWeight: "var(--weight-bold)", "& .MuiSelect-select": { display: "flex", alignItems: "center", justifyContent: "center", minHeight: "38px !important", padding: "0 30px 0 8px !important", whiteSpace: "nowrap", lineHeight: 1.2 }, "& .MuiSelect-icon": { top: "50%", right: 0, color: "var(--primary)", transform: "translateY(-50%)" }, "&:before, &:after": { display: "none" }, "@media (max-width: 900px)": { display: "none" } }}
      >
        <MenuItem value="en" sx={{ fontSize: "var(--font-size-sm)" }}>English</MenuItem>
        <MenuItem value="id" sx={{ fontSize: "var(--font-size-sm)" }}>Bahasa Indonesia</MenuItem>
      </Select>
    </Stack>
  );
}
