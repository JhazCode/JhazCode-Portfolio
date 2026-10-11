import { ProjectCard } from '../packages/portfolio/src/components/ProjectCard'
import { projects } from '../packages/portfolio/src/data'

const labActivities = [
  'Frame Relay',
  'DNS with Wireless Security',
  'OSPF',
  'EIGRP',
  'Access Control List',
  'Router on a Stick',
  'Port Security',
  'PC to Phone',
  'VLAN Configuration',
]

export default function Projects() {
  return (
    <section id="projects" className="page-section section-block projects-block">
      <div className="container">
        <div className="section-title-row">
          <h2>
            Learning by
            <br />
            <em>building and configuration.</em>
          </h2>
          <p>
            Projects that I helped to develop, alongside academic and home
            laboratory activities I have configured through hands-on practice.
          </p>
        </div>
        <div className="projects-layout">
          <div className="web-projects">
            <div className="subsection-heading">
              <span>01</span>
              <h3>WEB APPLICATIONS</h3>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.title} />
              ))}
            </div>
          </div>
          <aside className="lab-activities">
            <div className="subsection-heading">
              <span>02</span>
              <h3>LAB ACTIVITIES</h3>
            </div>
            <ul>
              {labActivities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
