import { ArrowUpRight } from 'lucide-react'
import facebookIcon from '../resources/images/facebook.png'
import githubIcon from '../resources/images/github.png'
import gmailIcon from '../resources/images/gmail.jpg'
import linkedinIcon from '../resources/images/linkedin.png'

const contactChannels = [
  {
    title: 'Facebook',
    image: facebookIcon,
    href: 'https://www.facebook.com/jhazeljohnofficial',
    display: 'facebook.com/jhazeljohnofficial',
    action: 'VIEW PROFILE',
  },
  {
    title: 'GitHub',
    image: githubIcon,
    href: 'https://github.com/JhazCode',
    display: 'github.com/JhazCode',
    action: 'VIEW GITHUB',
  },
  {
    title: 'LinkedIn',
    image: linkedinIcon,
    href: 'https://www.linkedin.com/in/jhazel-john-apuli/',
    display: 'linkedin.com/in/jhazel-john-apuli',
    action: 'VIEW PROFILE',
  },
  {
    title: 'Gmail',
    image: gmailIcon,
    href: 'mailto:apulijhazeljohnbernardo@gmail.com',
    display: 'apulijhazeljohnbernardo@gmail.com',
    action: 'SEND EMAIL',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="page-section contact-block">
      <div className="container">
        <div className="contact-intro">
          <h2>
            Everybody deserves
            <br />
            <em>a chance.</em>
          </h2>
          <p className="large-muted">
            I’m always open to new opportunities. <br/>
            Contact me through any channel below.
          </p>
        </div>
        <div className="contact-cards">
          {contactChannels.map((channel) => (
            <article className="contact-card" key={channel.title}>
              <div className="contact-card-image">
                <img src={channel.image} alt="" />
              </div>
              <h3>{channel.title}</h3>
              <a className="contact-card-link" href={channel.href}>
                {channel.display}
              </a>
              <a className="button button-accent contact-card-button" href={channel.href}>
                {channel.action} <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
