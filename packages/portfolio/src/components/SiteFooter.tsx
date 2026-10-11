const links = [['About Me', 'index.html'], ['Skills', 'skills.html'], ['Projects', 'projects.html'], ['Experience', 'experience.html'], ['Credentials', 'credentials.html']]

export function SiteFooter() {
  return <footer><div className="container footer-inner"><span>© 2026 | JHAZEL JOHN B. APULI</span><nav>{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav><span className="footer-status"><i />DEPLOYED IN VERCEL</span></div></footer>
}
