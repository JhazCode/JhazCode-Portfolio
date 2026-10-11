import { createRoot } from 'react-dom/client'
import Skills from '../../../../pages/Skills'
import { PageShell } from '../PageShell'
import '../../../../resources/styles.css'
createRoot(document.getElementById('root')!).render(<PageShell current="Skills"><Skills /></PageShell>)
