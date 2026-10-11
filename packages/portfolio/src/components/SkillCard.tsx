import type { SkillGroup } from '../data/skills'

type SkillCardProps = {
  skill: SkillGroup
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className="skill-card">
      <h3>{skill.title}</h3>
      <ul>{skill.items.map((item) => <li key={item}><i />{item}</li>)}</ul>
    </article>
  )
}
