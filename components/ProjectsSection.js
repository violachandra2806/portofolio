"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Container, IconButton, Stack } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { projectCategoryStyles, projectData } from "../locales/projects";
import { t } from "../locales/translate";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection({ locale }) {
  const projects = projectData[locale] || projectData.en;
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const projectRailRef = useRef(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
      if (event.key === "ArrowRight") {
        setActiveImageIndex((current) => (current + 1) % selectedProject.gallery.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImageIndex((current) => (current - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject || selectedProject.gallery.length < 2) return;

    const timer = window.setTimeout(() => {
      setActiveImageIndex((current) => (current + 1) % selectedProject.gallery.length);
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [selectedProject, activeImageIndex]);

  const openProject = (project, index = 0) => {
    setSelectedProject(project);
    setActiveImageIndex(index);
  };

  const goToNext = () => {
    if (!selectedProject) return;
    setActiveImageIndex((current) => (current + 1) % selectedProject.gallery.length);
  };

  const goToPrevious = () => {
    if (!selectedProject) return;
    setActiveImageIndex((current) => (current - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  };

  const updateActiveProject = (event) => {
    const rail = event.currentTarget;
    const cards = Array.from(rail.children);
    const closestCardIndex = cards.reduce((closestIndex, card, index) => {
      const railCenter = rail.scrollLeft + rail.clientWidth / 2;
      const closestDistance = Math.abs(cards[closestIndex].offsetLeft + cards[closestIndex].offsetWidth / 2 - railCenter);
      const cardDistance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - railCenter);
      return cardDistance < closestDistance ? index : closestIndex;
    }, 0);
    setActiveProjectIndex(closestCardIndex);
  };

  const scrollToProject = (index) => {
    const rail = projectRailRef.current;
    const card = rail?.children[index];
    if (!rail || !card) return;
    rail.scrollTo({ left: card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
    setActiveProjectIndex(index);
  };

  const scrollProjectRail = (direction) => {
    scrollToProject(Math.max(0, Math.min(projects.length - 1, activeProjectIndex + direction)));
  };

  return (
    <Box component="section" id="projects" sx={{ minHeight: "100vh", padding: { xs: "56px 0", sm: "88px 0" }, background: "linear-gradient(180deg, var(--bg) 0%, color-mix(in srgb, var(--bg) 58%, #f6e8dc) 50%, #f6e8dc 100%)", scrollMarginTop: 96 }}>
      <SectionHeader
        eyebrow={t("projects_label")}
        title={t("projects_title")}
        align="center"
      />

      <Box sx={{ position: "relative", width: { xs: "calc(100% - 32px)", sm: "100%" }, margin: "0 auto", "&:hover .project-rail-arrow": { opacity: 1, visibility: "visible", pointerEvents: "auto" } }}>
        <IconButton className="project-rail-arrow" sx={{ display: { xs: "flex", sm: "none" }, position: "absolute", top: "42%", left: -8, zIndex: 2, width: 40, height: 40, transform: "translateY(-50%)", opacity: 0, visibility: "hidden", pointerEvents: "none", border: "1px solid var(--line)", background: "var(--panel)", color: "var(--text)", transition: "opacity .25s ease, visibility .25s ease, transform .25s ease", "&:hover": { transform: "translateY(-50%) scale(1.08)" } }} onClick={() => scrollProjectRail(-1)} aria-label="Previous project"><ChevronLeft /></IconButton>
        <IconButton className="project-rail-arrow" sx={{ display: { xs: "flex", sm: "none" }, position: "absolute", top: "42%", right: -8, zIndex: 2, width: 40, height: 40, transform: "translateY(-50%)", opacity: 0, visibility: "hidden", pointerEvents: "none", border: "1px solid var(--line)", background: "var(--panel)", color: "var(--text)", transition: "opacity .25s ease, visibility .25s ease, transform .25s ease", "&:hover": { transform: "translateY(-50%) scale(1.08)" } }} onClick={() => scrollProjectRail(1)} aria-label="Next project"><ChevronRight /></IconButton>
        <Container ref={projectRailRef} component={Box} onScroll={updateActiveProject} sx={{ display: { xs: "flex", sm: "grid" }, gridTemplateColumns: "1fr", alignItems: "stretch", gap: { xs: 2, sm: 3 }, width: "100%", margin: { xs: 0, sm: "0 auto" }, overflowX: { xs: "auto", sm: "visible" }, flexWrap: { xs: "nowrap", sm: "initial" }, scrollSnapType: { xs: "x mandatory", sm: "none" }, scrollBehavior: { xs: "smooth", sm: "auto" }, scrollbarWidth: "thin", padding: { xs: "0 16px 8px", sm: 0 }, "@media (min-width: 640px)": { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" } }}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            badge={projectCategoryStyles[project.category]?.label || projectCategoryStyles.personal.label}
            badgeColor={project.category}
            image={project.preview}
            onOpen={() => openProject(project, 0)}
          />
        ))}
        </Container>
        <Stack direction="row" sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "center", gap: .75, marginTop: 1.5 }} aria-label="Project carousel pagination">
          {projects.map((project, index) => (
            <Box component="button" key={project.title} onClick={() => scrollToProject(index)} aria-label={`Go to project ${index + 1}`} aria-current={index === activeProjectIndex ? "true" : undefined} sx={{ width: index === activeProjectIndex ? 24 : 7, height: 7, padding: 0, border: 0, borderRadius: "999px", background: index === activeProjectIndex ? "var(--primary)" : "var(--line)", cursor: "pointer", transition: "width .25s ease, background .25s ease" }} />
          ))}
        </Stack>
      </Box>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          locale={locale}
          activeImageIndex={activeImageIndex}
          onClose={() => setSelectedProject(null)}
          onNext={goToNext}
          onPrevious={goToPrevious}
          onSetActiveImage={setActiveImageIndex}
        />
      )}
    </Box>
  );
}
