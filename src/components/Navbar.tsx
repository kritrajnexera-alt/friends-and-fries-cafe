import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-[background,border] duration-300 ${
        scrolled
          ? 'bg-brand-bg border-b border-brand-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: 'easeOut' } }}
        >
          <Link to="/" className="flex items-center gap-3 no-underline cursor-pointer">
            <img
              src="/images/logo.jpg"
              alt="Friends & Fries Cafe"
              className="rounded-full shrink-0"
              style={{ width: 55, height: 55, objectFit: 'cover' }}
            />
            <div>
              <div
                className="leading-none"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 800,
                  fontSize: 18,
                  color: '#F5F5F5',
                  letterSpacing: '2px',
                }}
              >
                FRIENDS &amp; FRIES
              </div>
              <div
                className="leading-none mt-0.5"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: 13,
                  color: '#E8450A',
                  letterSpacing: '4px',
                }}
              >
                CAF&Eacute;
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className="font-body font-medium text-[0.85rem] uppercase tracking-widest no-underline transition-colors duration-200"
                style={{
                  color: isActive ? '#FAAD14' : '#888888',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#F5F5F5'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#888888'
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <button
          className="md:hidden p-2 text-brand-text"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{ minWidth: 44, minHeight: 44 }}
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-brand-bg z-50 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-4 right-6 p-2 text-brand-text"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-4">
              {links.map((link, i) => {
                const isActive = location.pathname === link.to
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      to={link.to}
                      className="text-2xl font-body font-medium uppercase tracking-widest no-underline"
                      style={{
                        color: isActive ? '#FAAD14' : '#F5F5F5',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
