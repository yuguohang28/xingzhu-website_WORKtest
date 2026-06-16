import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '@/shared/layout/Navbar'
import Footer from '@/shared/layout/Footer'
import { pageTransition } from '@/shared/motion'

function SiteLayout() {
  return (
    <div className="min-h-screen bg-surface-50 text-surface-700 flex flex-col">
      <Navbar />
      <motion.main
        className="flex-1 pt-16"
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}

export default SiteLayout
