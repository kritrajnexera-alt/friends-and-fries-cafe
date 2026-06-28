import { Link } from 'react-router-dom'
import { Globe } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer
      className="bg-brand-bg border-t border-brand-border pt-12 pb-6"
      style={{ backgroundColor: '#0D0D0D' }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img
            src="/images/logo.jpg"
            alt="Friends & Fries Cafe"
            className="h-10 w-auto mb-3"
          />
          <p
            className="font-body text-[0.9rem]"
            style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}
          >
            Ankleshwar's favorite hangout
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-[0.85rem] uppercase tracking-widest no-underline transition-colors duration-200"
              style={{
                color: '#888888',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F5F5F5'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#888888'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <p
            className="font-body text-[0.9rem] mb-2"
            style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}
          >
            A3-A4 Ganesh Park
            <br />
            Opp. Reliance Trendz
            <br />
            Ankleshwar, Gujarat
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-[0.9rem] no-underline transition-colors duration-200"
            style={{
              color: '#FAAD14',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#D4380D'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#FAAD14'
            }}
          >
            <Globe size={16} />
            @friendsandfries
          </a>
        </div>
      </div>

      <div
        className="text-center mt-10 font-body text-[0.75rem]"
        style={{
          color: '#555555',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        &copy; 2025 Friends &amp; Fries Cafe &middot; Ankleshwar
      </div>
    </footer>
  )
}
