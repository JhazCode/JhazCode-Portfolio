import { createRoot } from 'react-dom/client'
import Credentials from '../../../../pages/Credentials'
import { PageShell } from '../PageShell'
import '../../../../resources/styles.css'
createRoot(document.getElementById('root')!).render(<PageShell current="Credentials"><Credentials /></PageShell>)
