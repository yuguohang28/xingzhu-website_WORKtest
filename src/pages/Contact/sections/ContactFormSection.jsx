// === Xingzhu Technology - Contact Form Section ===

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Check,
  ChevronDown,
  Clock,
  Send,
  Loader2,
} from 'lucide-react'

import { Section, SectionHeader, Button } from '@/shared/components'
import { fadeUp, viewportOnce } from '@/shared/motion'

import {
  formFieldVariants,
  infoPanelVariants,
  successCheckVariants,
  successContentVariants,
  faqChevronVariants,
  contactMethodVariants,
  shimmerVariants,
} from '../contact.motion'

import {
  FORM_FIELDS,
  CONTACT_METHODS,
  FAQ_ITEMS,
  OFFICE_LOCATIONS,
  FORM_SECTION_CONTENT,
} from '../contact.data'

import { FORM_CONFIG } from '../contact.config'

// ---------------------------------------------------------------------------
// Validation helper
// ---------------------------------------------------------------------------

function validateField(name, value) {
  const rules = FORM_CONFIG.VALIDATION[name]
  if (!rules) return ''

  const trimmed = (value || '').trim()

  if (rules.required && !trimmed) {
    return rules.message.required
  }

  if (trimmed) {
    if (rules.minLength && trimmed.length < rules.minLength) {
      return rules.message.minLength
    }
    if (rules.maxLength && trimmed.length > rules.maxLength) {
      return rules.message.maxLength
    }
    if (rules.pattern && !rules.pattern.test(trimmed)) {
      return rules.message.pattern
    }
  }

  return ''
}

// ---------------------------------------------------------------------------
// FormField
// ---------------------------------------------------------------------------

function FormField({ field, value, error, onChange, onBlur }) {
  const inputId = `contact-${field.name}`

  const baseInput =
    'w-full bg-white/[0.03] rounded-sm px-4 py-3 text-white text-sm ' +
    'placeholder:text-slate-600 ' +
    'focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-transparent ' +
    'transition-all duration-200'

  const borderClass = error
    ? 'border border-red-400/50'
    : 'border border-white/[0.08]'

  return (
    <motion.div
      variants={formFieldVariants}
      custom={field._index}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-1.5"
    >
      <label
        htmlFor={inputId}
        className="block text-slate-300 text-sm font-medium"
      >
        {field.label}
        {FORM_CONFIG.REQUIRED_FIELDS.includes(field.name) && (
          <span className="text-red-400 ml-1">*</span>
        )}
      </label>

      {field.type === 'textarea' ? (
        <textarea
          id={inputId}
          name={field.name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={field.placeholder}
          rows={field.rows || 4}
          autoComplete={field.autoComplete}
          className={`${baseInput} ${borderClass} resize-none min-h-[120px]`}
        />
      ) : (
        <input
          id={inputId}
          name={field.name}
          type={field.type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          className={`${baseInput} ${borderClass}`}
        />
      )}

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            key={field.name + '-err'}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-red-400 text-xs mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// FormSubmitButton
// ---------------------------------------------------------------------------

function FormSubmitButton({ loading }) {
  return (
    <motion.div
      variants={formFieldVariants}
      custom={FORM_FIELDS.length}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <button
        type="submit"
        disabled={loading}
        className={[
          'relative overflow-hidden',
          'w-full lg:w-auto px-10 py-3.5',
          'bg-accent-500 hover:bg-accent-400',
          'text-slate-950 font-medium text-sm',
          'rounded-sm',
          'transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/50',
          'disabled:cursor-not-allowed',
          loading ? 'opacity-90' : '',
        ].join(' ')}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              提交中...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              提交咨询
            </>
          )}
        </span>

        {loading && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
          />
        )}
      </button>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// SuccessState
// ---------------------------------------------------------------------------

function SuccessState({ onReset }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={successCheckVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-20 h-20 rounded-full bg-accent-500/10 border-2 border-accent-500/30 flex items-center justify-center mb-6">
          <Check className="w-10 h-10 text-accent-500" strokeWidth={2.5} />
        </div>
      </motion.div>

      <motion.div
        variants={successContentVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-2xl font-semibold text-white mb-3">
          {FORM_CONFIG.SUCCESS_TITLE}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto mb-8">
          {FORM_CONFIG.SUCCESS_DESCRIPTION}
        </p>
        <Button variant="ghost" size="md" onClick={onReset}>
          {FORM_CONFIG.SUCCESS_BUTTON_TEXT}
        </Button>
      </motion.div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// ContactMethodCard
// ---------------------------------------------------------------------------

const ICON_MAP = { Mail, Phone, MapPin }

function ContactMethodCard({ method, index }) {
  const Icon = ICON_MAP[method.icon]

  const content = (
    <div className="flex items-start gap-4 group">
      <div className="w-10 h-10 rounded-sm bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-accent-500/30 group-hover:bg-accent-500/5 transition-colors duration-300">
        <Icon className="w-4 h-4 text-accent-500" />
      </div>
      <div className="min-w-0">
        <h4 className="text-white text-sm font-medium mb-0.5">
          {method.title}
        </h4>
        <p className="text-slate-400 text-sm break-all">{method.value}</p>
        <p className="text-slate-500 text-xs mt-0.5">{method.description}</p>
      </div>
    </div>
  )

  return (
    <motion.div
      variants={contactMethodVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="pb-5 border-b border-white/[0.06] last:border-b-0 last:pb-0"
    >
      {method.href ? (
        <a
          href={method.href}
          className="block hover:opacity-80 transition-opacity"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// FaqAccordion
// ---------------------------------------------------------------------------

function FaqAccordion({ items }) {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            className="border-b border-white/[0.06] last:border-b-0"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className={[
                'w-full flex items-center justify-between gap-4 py-4 text-left',
                'text-sm text-white font-medium',
                'hover:text-accent-300 transition-colors duration-200',
              ].join(' ')}
            >
              <span className="flex-1">{item.question}</span>
              <motion.div
                variants={faqChevronVariants}
                initial="collapsed"
                animate={isOpen ? 'expanded' : 'collapsed'}
                className="shrink-0"
              >
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </motion.div>
            </button>

            <div
              className={[
                'overflow-hidden transition-all duration-300 ease-out',
              ].join(' ')}
              style={{
                maxHeight: isOpen ? '400px' : '0',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="pb-4 text-slate-400 text-sm leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ---------------------------------------------------------------------------
// InfoPanel
// ---------------------------------------------------------------------------

function InfoPanel() {
  return (
    <motion.div
      variants={infoPanelVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-10"
    >
      {/* Contact methods */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-5">
          {FORM_SECTION_CONTENT.infoTitle1}
        </h3>
        <div className="space-y-5">
          {CONTACT_METHODS.map((method, i) => (
            <ContactMethodCard key={method.title} method={method} index={i} />
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-5">
          {FORM_SECTION_CONTENT.infoTitle2}
        </h3>
        <FaqAccordion items={FAQ_ITEMS} />
      </div>

      {/* Office locations */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-5">
          {FORM_SECTION_CONTENT.infoTitle3}
        </h3>
        <div className="space-y-4">
          {OFFICE_LOCATIONS.map((office) => (
            <div key={office.city} className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-sm bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-accent-500/30 group-hover:bg-accent-500/5 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-slate-400" />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-0.5">
                  {office.city}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {office.address}
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  {office.phone} · {office.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Response time trust signal */}
      <div className="flex items-center gap-2 text-xs text-slate-500 bg-white/[0.02] border border-white/[0.04] rounded-sm px-4 py-3">
        <Clock className="w-3.5 h-3.5 text-slate-600 shrink-0" />
        <span>{FORM_CONFIG.RESPONSE_TIME_TEXT}</span>
      </div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// ContactFormSection (main section with split layout)
// ---------------------------------------------------------------------------

function ContactFormSection() {
  const [formData, setFormData] = useState(FORM_CONFIG.INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const validateAll = useCallback(() => {
    const newErrors = {}
    let isValid = true
    for (const field of FORM_FIELDS) {
      const error = validateField(field.name, formData[field.name])
      if (error) {
        newErrors[field.name] = error
        isValid = false
      }
    }
    setErrors(newErrors)
    return isValid
  }, [formData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading || submitted) return
    if (!validateAll()) return

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, FORM_CONFIG.SUBMIT_DURATION))
    setLoading(false)
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData(FORM_CONFIG.INITIAL_STATE)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16">
        {/* Left column: form */}
        <div>
          <SectionHeader
            eyebrow={FORM_SECTION_CONTENT.eyebrow}
            headline={FORM_SECTION_CONTENT.headline}
            description={FORM_SECTION_CONTENT.description}
          />

          <div className="mt-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <SuccessState onReset={handleReset} />
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  noValidate
                >
                  {FORM_FIELDS.map((field, i) => (
                    <FormField
                      key={field.name}
                      field={{ ...field, _index: i }}
                      value={formData[field.name]}
                      error={errors[field.name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  ))}

                  <FormSubmitButton loading={loading} />
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right column: info panel */}
        <InfoPanel />
      </div>
    </Section>
  )
}

export default ContactFormSection
