import { createRoot } from 'react-dom/client'
import Projects from '../../../../pages/Projects'
import { PageShell } from '../PageShell'
import '../../../../resources/styles.css'
createRoot(document.getElementById('root')!).render(<PageShell current="Projects"><Projects /></PageShell>)
