import { createRoot } from 'react-dom/client'
import Contact from '../../../../pages/Contact'
import { PageShell } from '../PageShell'
import '../../../../resources/styles.css'
createRoot(document.getElementById('root')!).render(<PageShell current="Contact"><Contact /></PageShell>)
