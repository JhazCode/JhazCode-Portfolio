import { createRoot } from 'react-dom/client'
import Experience from '../../../../pages/Experience'
import { PageShell } from '../PageShell'
import '../../../../resources/styles.css'
createRoot(document.getElementById('root')!).render(<PageShell current="Experience"><Experience /></PageShell>)
