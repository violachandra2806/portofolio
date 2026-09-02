"use client";

import { useEffect, useState } from "react";
import { projectData } from "../locales/projects";
import { getTranslation } from "../locales/translate";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection({ locale }) {
  const projects = projectData[locale] || projectData.en;
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!selectedProject) return;

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
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

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

  return (
    <section id="projects" className="section content-section reveal-section">
      <SectionHeader
        eyebrow={getTranslation("projects_label", locale)}
        title={getTranslation("projects_title", locale)}
        align="center"
      />

      <div className="container project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            badge={getTranslation("projects_badge", locale)}
            image={project.gallery[0]}
            onOpen={() => openProject(project, 0)}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-modal-close"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <div className="project-modal-shell">
              <div className="project-modal-media">
                <button type="button" className="project-modal-nav prev" onClick={goToPrevious} aria-label="Previous image">
                  ‹
                </button>

                <img
                  src={selectedProject.gallery[activeImageIndex]}
                  alt={`${selectedProject.title} preview ${activeImageIndex + 1}`}
                  className="project-modal-image"
                />

                <button type="button" className="project-modal-nav next" onClick={goToNext} aria-label="Next image">
                  ›
                </button>

                <div className="project-modal-dots" aria-label="Project gallery navigation">
                  {selectedProject.gallery.map((_, index) => (
                    <button
                      key={`${selectedProject.title}-${index}`}
                      type="button"
                      className={`project-modal-dot ${index === activeImageIndex ? "active" : ""}`}
                      aria-label={`View image ${index + 1}`}
                      onClick={() => setActiveImageIndex(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="project-modal-body">
                <div className="project-badge">{getTranslation("projects_badge", locale)}</div>
                <h3>{selectedProject.title}</h3>
                <p className="project-modal-summary">{selectedProject.description}</p>

                <div className="stack-row">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {selectedProject.details && (
                  <div className="project-modal-details">
                    {selectedProject.details.map((item) => (
                      <div key={item.title} className="project-detail-block">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
