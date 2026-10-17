import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import avatarUrl from '../resources/images/Apuli_2x2.jpg'
import linkedinIconUrl from '../resources/images/in.png'
import resumeUrl from '../resources/files/Apuli_Resume_2026_Validated.pdf'
import { PageShell } from '../packages/portfolio/src/PageShell'

export default function Home() {
  return (
    <PageShell current="About Me">
      <section id="about-me" className="page-section home-section">
        <div className="container home-grid">
          <div className="home-intro">
            <p className="kicker">
              INFORMATION TECHNOLOGY · MOBILE & INTERNET TECHNOLOGY
            </p>
            <h1>
              Hi, I’m
              <br />
              <span>Jhazel.</span>
            </h1>
            <p className="intro-copy">
            I'm an IT student specializing in Mobile and Internet Technology at National University – Fairview, and a consistent Dean's Lister.
            <br/>If you need someone who genuinely loves troubleshooting systems and figures things out fast, I'm ready to bring that mindset into a real-world IT environment.
            </p>
            <div className="quick-facts">
              <span>
                <CheckCircle2 size={16} /> CONSISTENT DEAN’S LISTER
              </span>
              <span>
                <span className="tiny-dot" /> NATIONAL UNIVERSITY — FAIRVIEW
              </span>
            </div>
          </div>
          <div className="home-panel">
            <div className="profile-portrait">
              <img src={avatarUrl} alt="Jhazel John B. Apuli" />
              <div className="portrait-ring" />
              <span className="portrait-tag">
                LOOKING FOR
                <br />
                INTERNSHIP
              </span>
            </div>
            <div className="home-actions">
              <a
                className="button button-accent"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                VIEW RESUME <ArrowUpRight size={16} />
              </a>
              <a
                className="button button-quiet"
                href={resumeUrl}
                download="Apuli_Resume_2026_Validated.pdf"
              >
                DOWNLOAD RESUME <ArrowDownRight size={16} />
              </a>
              <a className="button button-quiet" href="https://linkedin.com/in/jhazel-john-apuli" aria-label="LinkedIn profile">
                <img className="linkedin-icon" src={linkedinIconUrl} alt="" /> LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
