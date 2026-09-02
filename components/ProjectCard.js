export default function ProjectCard({ title, description, tags, badge, image, onOpen }) {
  return (
    <button type="button" className="project-card glass-card project-card-button" onClick={onOpen}>
      <div className="project-card-image-wrap">
        <img src={image} alt={title} className="project-card-image" />
      </div>

      <div className="project-card-content">
        <div className="project-badge">{badge}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="stack-row">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </button>
  );
}
