import { Link } from 'react-router-dom'
import { ArrowUpRight, Building2 } from 'lucide-react'
import { SITE_CONFIG, FOOTER_LINKS } from '@/shared/data/navigation'

function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-surface-950">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-sm bg-accent-500 flex items-center justify-center">
                <Building2 className="w-4.5 h-4.5 text-slate-950" strokeWidth={2} />
              </div>
              <span className="text-base font-semibold tracking-tight text-white">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[280px]">
              {SITE_CONFIG.tagline}。<br />
              用 AI 重塑建材供应链的每一个环节。
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">解决方案</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">公司</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">法律</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">{SITE_CONFIG.copyright}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors duration-200"
          >
            开启合作
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
