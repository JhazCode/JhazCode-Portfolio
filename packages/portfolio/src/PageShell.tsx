import type { ReactNode } from 'react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'

export function PageShell({ current, children }: { current: string; children: ReactNode }) {
  return <div className="site-shell"><SiteHeader current={current} /><main>{children}</main><SiteFooter /></div>
}
