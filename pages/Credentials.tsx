import { ExternalLink } from 'lucide-react'
import { certifications } from '../packages/portfolio/src/data'

export default function Credentials() {
  return (
    <section id="credentials" className="page-section section-block credentials-block">
      <div className="container">
        <div className="section-title-row">
          <h2>
            Always learning,
            <br />
            <em>always improving.</em>
          </h2>
          <p>Certificates, badges, and achievements that I earned throughout my journey.</p>
        </div>
        <div className="credential-grid">
          {certifications.map((certification) => (
            <article className="credential-card-new" key={certification.name}>
              <div className="credential-image-new">
                <img src={certification.image} alt={`${certification.name} logo`} />
              </div>
              <div className="credential-content-new">
                <h3>{certification.name}</h3>
                <p>{certification.providers.join(' · ')}</p>
              </div>
              <div className="credential-actions-new">
                {certification.actions.map((action) => (
                  <a
                    className="button button-accent"
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    key={action.href}
                  >
                    {action.label}
                    <ExternalLink size={13} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
