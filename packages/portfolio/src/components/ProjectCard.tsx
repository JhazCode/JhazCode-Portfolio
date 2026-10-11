import { ExternalLink, GitBranch } from 'lucide-react'
import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <span>{project.number}</span>
        <img src={project.image} alt={`${project.title} logo`} />
        <a href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} repository`}><GitBranch size={17} /></a>
      </div>
      <div className="project-info">
        <small>{project.category}</small>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-meta"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="repo-link button button-accent" href={project.repositoryUrl} target="_blank" rel="noreferrer">VIEW REPOSITORY <ExternalLink size={14} /></a></div>
      </div>
    </article>
  )
}
