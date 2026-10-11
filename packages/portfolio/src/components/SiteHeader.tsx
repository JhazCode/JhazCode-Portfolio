import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['About Me', 'index.html'],
  ['Skills', 'skills.html'],
  ['Projects', 'projects.html'],
  ['Experience', 'experience.html'],
  ['Credentials', 'credentials.html'],
]

export function SiteHeader({ current }: { current: string }) {
  const [open, setOpen] = useState(false)
  return <header className="nav-wrap"><nav className="nav container"><a className="brand" href="index.html"><span className="brand-copy"><strong>Jhazel John B. Apuli</strong></span></a><div className={`nav-links ${open ? 'open' : ''}`}>{links.map(([label, href]) => <a className={current === label ? 'selected' : ''} href={href} key={label}>{label}</a>)}</div><button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button><a className="nav-cta" href="contact.html">LET’S CONNECT <ArrowUpRight size={15} /></a></nav></header>
}
