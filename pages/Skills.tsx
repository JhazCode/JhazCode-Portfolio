import { SkillCard } from '../packages/portfolio/src/components/SkillCard'
import { skills } from '../packages/portfolio/src/data'

export default function Skills() {
  return (
    <section id="skills" className="page-section section-block skills-block">
      <div className="container">
        <div className="section-title-row">
          <h2>
            Skills
            <br />
            <em>that I'm honing.</em>
          </h2>
          <p>
            I’m building a practical foundation across the systems that keep
            people and organizations moving.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard skill={skill} key={skill.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
