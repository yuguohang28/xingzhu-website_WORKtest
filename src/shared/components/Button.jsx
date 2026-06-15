import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary: 'bg-accent-500 hover:bg-accent-400 text-slate-950',
  secondary: 'bg-white/[0.06] hover:bg-white/[0.10] text-white border border-white/[0.06]',
  ghost: 'hover:bg-white/[0.04] text-slate-400 hover:text-white',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

function Button({ children, variant = 'primary', size = 'md', to, href, className = '', ...props }) {
  const base = `inline-flex items-center gap-2 font-medium rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/50 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return <Link to={to} className={base} {...props}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={`${base} group`} {...props}>{children}{' '}<ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></a>
  }
  return <button className={base} {...props}>{children}</button>
}

export default Button
