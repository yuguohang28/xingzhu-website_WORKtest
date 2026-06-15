function SectionHeader({ eyebrow, headline, description, className = '' }) {
  return (
    <div className={`max-w-[720px] ${className}`}>
      {eyebrow && (
        <p className="text-xs text-slate-500 tracking-widest mb-4">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.1]">
        {headline}
      </h2>
      {description && (
        <p className="mt-5 text-slate-400 text-base leading-relaxed max-w-[65ch]">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
