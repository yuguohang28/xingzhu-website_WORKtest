import { motion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Database,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import { viewportOnce } from '@/shared/motion'
import { Button } from '@/shared/components'
import { HERO_DATA, HERO_COMMAND_CENTER } from '../home.data'
import {
  heroContainerVariants,
  heroContentVariants,
  screenPanelVariants,
  floatPanelVariants,
  flowStepVariants,
} from '../home.motion'

function MiniMetric({ item, index }) {
  return (
    <motion.div
      className="rounded-lg border border-white/70 bg-white/70 px-3 py-2 shadow-[0_10px_30px_rgba(61,55,48,0.06)] backdrop-blur-md"
      variants={floatPanelVariants}
      custom={index}
      initial="hidden"
      animate="visible"
    >
      <div className="text-[10px] text-surface-500">{item.label}</div>
      <div className="mt-1 text-lg font-semibold leading-none text-surface-800">{item.value}</div>
      <div className="mt-1 text-[10px] text-accent-600">{item.hint}</div>
    </motion.div>
  )
}

function BuildingCluster() {
  const towers = [
    { h: 'h-28', w: 'w-14', x: 'left-[36%]', tone: 'from-slate-300 to-white', delay: '0s' },
    { h: 'h-36', w: 'w-16', x: 'left-[48%]', tone: 'from-accent-200 to-white', delay: '.25s' },
    { h: 'h-24', w: 'w-12', x: 'left-[61%]', tone: 'from-slate-200 to-white', delay: '.45s' },
  ]

  return (
    <div className="absolute inset-x-0 bottom-10 top-8 overflow-hidden rounded-xl bg-gradient-to-b from-white/70 via-surface-50/90 to-surface-100/90">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(212,135,75,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(212,135,75,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute left-8 right-8 top-10 h-px bg-gradient-to-r from-transparent via-accent-400/30 to-transparent" />
      <div className="absolute left-7 right-10 bottom-20 h-px rotate-[-13deg] bg-gradient-to-r from-transparent via-accent-500/50 to-transparent">
        <span className="absolute left-[18%] top-[-3px] h-1.5 w-1.5 rounded-full bg-accent-500 shadow-[0_0_16px_rgba(212,135,75,0.75)]" />
        <span className="absolute left-[64%] top-[-3px] h-1.5 w-1.5 rounded-full bg-accent-500 shadow-[0_0_16px_rgba(212,135,75,0.75)]" />
      </div>

      <div className="absolute left-[12%] top-[54%] flex items-center gap-2 rounded-md border border-surface-200/80 bg-white/75 px-2.5 py-2 text-[10px] text-surface-600 shadow-sm">
        <Database className="h-3.5 w-3.5 text-accent-500" />
        区域中心仓
      </div>

      <div className="absolute right-[10%] top-[22%] flex items-center gap-2 rounded-md border border-surface-200/80 bg-white/75 px-2.5 py-2 text-[10px] text-surface-600 shadow-sm">
        <Truck className="h-3.5 w-3.5 text-accent-500" />
        在途 14 车
      </div>

      <div className="absolute left-1/2 top-[48%] h-28 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] rounded-[50%] border border-accent-300/40 bg-accent-100/20 blur-[1px]" />
      <div className="absolute left-1/2 top-[51%] h-16 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] rounded-[50%] border border-surface-300/70" />

      {towers.map((tower, index) => (
        <div
          key={tower.x}
          className={`absolute bottom-[68px] ${tower.x} ${tower.w} ${tower.h} -skew-y-6 rounded-t-md border border-white/70 bg-gradient-to-b ${tower.tone} shadow-[18px_18px_45px_rgba(61,55,48,0.12)]`}
          style={{ animation: `heroFloat 5s ease-in-out ${tower.delay} infinite` }}
        >
          <div className="grid h-full grid-cols-3 gap-1 p-2 opacity-70">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className={`rounded-[1px] ${i % 4 === 0 ? 'bg-accent-300/70' : 'bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="absolute left-1/2 top-[45%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-accent-300/60 bg-white/85 px-3 py-2 text-[11px] font-medium text-surface-800 shadow-[0_14px_36px_rgba(212,135,75,0.18)] backdrop-blur-md">
        <BrainCircuit className="h-4 w-4 text-accent-600" />
        AI 调度层
      </div>

      <div className="absolute inset-x-10 top-[38%] h-px bg-gradient-to-r from-transparent via-accent-400/45 to-transparent" style={{ animation: 'heroScan 4s ease-in-out infinite' }} />
    </div>
  )
}

function MobileCommandCard({ project, suppliers, metrics, flow }) {
  return (
    <div className="rounded-[20px] border border-white/80 bg-white/60 p-3 shadow-[0_24px_70px_rgba(61,55,48,0.12)] backdrop-blur-xl">
      <div className="overflow-hidden rounded-2xl border border-surface-200/80 bg-gradient-to-br from-white via-surface-50 to-surface-100">
        <div className="flex h-11 items-center border-b border-surface-200/80 bg-white/75 px-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent-300" />
            <span className="h-2 w-2 rounded-full bg-surface-300" />
            <span className="h-2 w-2 rounded-full bg-surface-300" />
          </div>
          <div className="ml-3 text-[11px] font-medium text-surface-700">AI 供应链控制台</div>
          <div className="ml-auto h-1.5 w-1.5 rounded-full bg-accent-500" />
        </div>

        <div className="space-y-3 p-3">
          <div className="rounded-xl border border-surface-200/80 bg-white/80 p-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-[11px] text-surface-500">
                  <PackageCheck className="h-3.5 w-3.5 text-accent-600" />
                  {project.label}
                </div>
                <div className="mt-2 text-base font-semibold leading-snug text-surface-800">{project.name}</div>
              </div>
              <div className="rounded-lg bg-accent-50 px-2.5 py-2 text-right">
                <div className="text-lg font-semibold leading-none text-surface-800">{suppliers.count}</div>
                <div className="mt-1 text-[10px] text-accent-700">供应商在线</div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.materials.map((item) => (
                <span key={item} className="rounded-md bg-surface-100 px-2 py-1 text-[11px] text-surface-600">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-44 overflow-hidden rounded-xl border border-surface-200/80 bg-white/65">
            <BuildingCluster />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {metrics.map((item, index) => (
              <MiniMetric key={item.label} item={item} index={index} />
            ))}
          </div>

          <div className="rounded-xl border border-surface-200/80 bg-white/75 p-3">
            <div className="flex flex-wrap gap-2">
              {flow.map((step, index) => (
                <span
                  key={step}
                  className={`rounded-md px-2 py-1 text-[10px] ${index === 0 ? 'bg-accent-100 text-accent-700' : 'bg-surface-100 text-surface-500'}`}
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const { screenTitle, screenSub, project, suppliers, metrics, trend, flow } = HERO_COMMAND_CENTER

  return (
    <section id="hero" className="relative min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50" />
      <div className="absolute right-0 top-0 h-full w-[58%] bg-gradient-to-l from-accent-500/[0.045] via-white/20 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto grid min-h-[100dvh] w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        viewport={viewportOnce}
      >
        <div className="flex flex-col gap-8">
          <motion.div variants={heroContentVariants} className="flex flex-col gap-4">
            <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-surface-800 leading-[1.1]">
              {HERO_DATA.headlineLine1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-emerald-500">
                {HERO_DATA.headlineLine2}
              </span>
            </h1>
            <p className="max-w-[40ch] text-lg leading-relaxed text-surface-600 md:text-xl">
              {HERO_DATA.subtext}
            </p>
          </motion.div>

          <motion.div variants={heroContentVariants} className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" to={HERO_DATA.primaryCta.to}>
              {HERO_DATA.primaryCta.text}
            </Button>
            <Button variant="outline" size="lg" to={HERO_DATA.secondaryCta.to}>
              {HERO_DATA.secondaryCta.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={heroContentVariants}
          className="relative w-full select-none md:min-h-[470px]"
        >
          <div className="md:hidden">
            <MobileCommandCard project={project} suppliers={suppliers} metrics={metrics} flow={flow} />
          </div>

          <motion.div
            className="absolute inset-0 hidden rounded-[22px] border border-white/80 bg-white/45 p-3 shadow-[0_28px_80px_rgba(61,55,48,0.12)] backdrop-blur-xl md:block"
            variants={screenPanelVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative h-full overflow-hidden rounded-[18px] border border-surface-200/80 bg-gradient-to-br from-white via-surface-50 to-surface-100">
              <div className="flex h-12 items-center border-b border-surface-200/80 bg-white/70 px-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-surface-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-surface-300" />
                </div>
                <div className="ml-4 text-xs font-medium text-surface-700">{screenTitle}</div>
                <div className="ml-auto flex items-center gap-2 text-[11px] text-accent-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500 shadow-[0_0_12px_rgba(212,135,75,0.75)]" />
                  {screenSub}
                </div>
              </div>

              <div className="grid h-[calc(100%-48px)] grid-cols-[0.95fr_1.42fr_1.08fr] gap-3 p-4">
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl border border-surface-200/80 bg-white/75 p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-medium text-surface-500">
                      <PackageCheck className="h-4 w-4 text-accent-600" />
                      {project.label}
                    </div>
                    <div className="mt-3 text-base font-semibold text-surface-800">{project.name}</div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-accent-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {project.status}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.materials.map((item) => (
                        <span key={item} className="rounded-md bg-surface-100 px-2 py-1 text-[11px] text-surface-600">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 rounded-lg bg-accent-50 px-3 py-2 text-[11px] text-accent-700">
                      {project.batch}
                    </div>
                  </div>

                  <div className="rounded-xl border border-surface-200/80 bg-white/70 p-4 shadow-sm">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-surface-500">{trend.label}</span>
                      <span className="font-semibold text-accent-600">+3.2%</span>
                    </div>
                    <div className="mt-4 flex h-20 items-end gap-2">
                      {trend.values.map((value, index) => (
                        <span
                          key={`${value}-${index}`}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-500/70 to-accent-200"
                          style={{ height: `${value}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-surface-200/80 bg-white/60 p-3 shadow-inner">
                  <BuildingCluster />
                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                    {metrics.map((item, index) => (
                      <MiniMetric key={item.label} item={item} index={index} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="rounded-xl border border-surface-200/80 bg-white/75 p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-medium text-surface-500">
                      <Layers3 className="h-4 w-4 text-accent-600" />
                      {suppliers.label}
                    </div>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-3xl font-semibold text-surface-800">{suppliers.count}</span>
                      <span className="pb-1 text-xs text-surface-500">家在线</span>
                    </div>
                    <div className="mt-1 text-xs text-accent-700">{suppliers.response}</div>
                    <div className="mt-4 space-y-2">
                      {suppliers.items.map((item) => (
                        <div key={item.name} className="flex min-w-0 items-center gap-2 rounded-lg bg-surface-50 px-2.5 py-2">
                          <Building2 className="h-3.5 w-3.5 shrink-0 text-surface-500" />
                          <span className="min-w-0 flex-1 truncate whitespace-nowrap text-[11px] text-surface-700">{item.name}</span>
                          <span className="shrink-0 text-[11px] font-semibold text-accent-600">{item.score}</span>
                          <span className="shrink-0 rounded bg-white px-1.5 py-0.5 text-[10px] text-surface-500">{item.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-surface-200/80 bg-white/70 p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-medium text-surface-500">
                      <ShieldCheck className="h-4 w-4 text-accent-600" />
                      履约进度
                    </div>
                    <div className="mt-4 space-y-3">
                      {flow.map((step, index) => (
                        <motion.div
                          key={step}
                          className="flex items-center gap-2"
                          variants={flowStepVariants}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                        >
                          <span className={`h-2 w-2 rounded-full ${index < 3 ? 'bg-accent-500' : 'bg-surface-300'}`} />
                          <span className="text-[11px] text-surface-600">{step}</span>
                          <span className="ml-auto h-px flex-1 bg-surface-200" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes heroScan {
          0%, 100% { transform: translateY(-42px); opacity: 0; }
          20%, 80% { opacity: .9; }
          100% { transform: translateY(150px); opacity: 0; }
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0) skewY(-6deg); }
          50% { transform: translateY(-6px) skewY(-6deg); }
        }
      `}</style>
    </section>
  )
}
