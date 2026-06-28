import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { UtensilsCrossed, Users, Wallet } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <PageTransition>
      {/* SECTION 1 — Diagonal Split Hero */}
      <section className="flex flex-col md:flex-row min-h-screen">
        {/* Left */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 w-full md:w-[55%] flex items-center px-6 md:px-12 lg:px-16 py-20 md:py-0"
          style={{ backgroundColor: '#0D0D0D' }}
        >
          <div>
            <h1
              className="font-heading font-black uppercase leading-[0.9] mb-2"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 8vw, 5rem)',
                color: '#F5F5F5',
              }}
            >
              Friends &amp; Fries
            </h1>
            <h1
              className="font-heading font-black uppercase leading-[0.9] mb-6"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 8vw, 5rem)',
                color: '#D4380D',
              }}
            >
              Cafe
            </h1>

            <a
              href="https://maps.google.com/?q=Friends+and+Fries+Cafe+Ankleshwar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 no-underline transition-opacity duration-200 hover:opacity-80"
              style={{
                borderColor: '#FAAD14',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '0.8rem',
                color: '#FAAD14',
              }}
            >
              <svg viewBox="0 0 48 48" width="16" height="16">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
              </svg>
              4.5 ★ · 274 Reviews
            </a>

            <div className="flex gap-4">
              <Link
                to="/menu"
                className="inline-block font-body font-medium no-underline transition-transform duration-200"
                style={{
                  backgroundColor: '#D4380D',
                  color: '#F5F5F5',
                  padding: '0.75rem 1.5rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  borderRadius: 4,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                View menu
              </Link>
              <Link
                to="/contact"
                className="inline-block font-body font-medium no-underline transition-transform duration-200"
                style={{
                  border: '1px solid #F5F5F5',
                  color: '#F5F5F5',
                  padding: '0.75rem 1.5rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  borderRadius: 4,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                Find us
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right — Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="w-full md:w-[45%] min-h-[50vh] md:min-h-screen overflow-hidden"
          style={{
            clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1600&q=85"
            alt=""
            className="w-full h-full object-cover ken-burns"
            style={{ height: '100%', minHeight: '50vh' }}
          />
        </motion.div>
      </section>

      {/* SECTION 2 — Scrolling Ticker */}
      <Ticker />

      {/* SECTION 3 — Asymmetric Feature Grid */}
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] min-h-[400px] md:min-h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=800&q=85"
            alt=""
            className="w-full h-full object-cover"
            style={{ height: '100%', minHeight: 400 }}
          />
        </div>
        <div className="w-full md:w-[40%] flex flex-col">
          {[
            {
              icon: UtensilsCrossed,
              title: 'Best Fries in Town',
              desc: 'Crispy, loaded, and unforgettable.',
            },
            {
              icon: Users,
              title: 'Social Hangout Vibe',
              desc: 'Good music, better company.',
            },
            {
              icon: Wallet,
              title: 'Pocket Friendly',
              desc: 'Great food from just ₹200-400.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: 'easeOut' }}
              className="flex-1 p-6 md:p-8 border-l-[3px] flex flex-col justify-center"
              style={{
                backgroundColor: '#1A1A1A',
                borderLeftColor: '#D4380D',
              }}
            >
              <item.icon size={24} color="#D4380D" className="mb-2" />
              <h3
                className="font-heading font-bold text-[1rem] mb-1"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  color: '#F5F5F5',
                }}
              >
                {item.title}
              </h3>
              <p
                className="font-body text-[0.85rem]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#888888',
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — Signature Item */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85"
                alt="Signature Burger"
                className="w-full object-cover"
                style={{ height: 600 }}
              />
            </motion.div>
            <div className="mt-6">
              <h2
                className="font-heading font-black uppercase leading-none"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  color: '#F5F5F5',
                }}
              >
                Classic Smash Burger
              </h2>
              <span
                className="font-heading font-black"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  color: '#FAAD14',
                }}
              >
                ₹199
              </span>
              <p
                className="font-body mt-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#888888',
                }}
              >
                Double patty, melted cheese, caramelized onions — our signature.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 5 — Masonry Gallery Preview */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              {
                src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&q=80',
                h: 250,
                caption: 'Cafe Interior',
              },
              {
                src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
                h: 350,
                caption: 'Plating',
              },
              {
                src: 'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=600&q=80',
                h: 300,
                caption: 'Loaded Fries',
              },
              {
                src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
                h: 250,
                caption: 'Smash Burger',
              },
              {
                src: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80',
                h: 350,
                caption: 'Milkshake',
              },
              {
                src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
                h: 300,
                caption: 'Cozy Vibes',
              },
            ].map((img) => (
              <div
                key={img.caption}
                className="relative group overflow-hidden cursor-pointer"
                style={{ height: img.h }}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(212,56,13,0.7)' }}
                >
                  <span
                    className="font-body font-medium text-white text-[0.85rem] translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  >
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="font-body font-medium no-underline transition-colors duration-200"
              style={{
                color: '#D4380D',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FAAD14'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#D4380D'
              }}
            >
              View all photos &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  )
}

function Ticker() {
  return (
    <div
      className="w-full overflow-hidden py-3"
      style={{ backgroundColor: '#D4380D' }}
    >
      <div className="flex whitespace-nowrap marquee-animation">
        <span
          className="font-heading font-bold uppercase mx-4"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '0.9rem',
            color: '#0D0D0D',
          }}
        >
          Loaded Fries &middot; Cheesy Burgers &middot; Cold Brew &middot; 4.5
          Stars &middot; 274 Reviews &middot; Open Daily &middot; Ganesh Park
          Ankleshwar &middot;
        </span>
        <span
          className="font-heading font-bold uppercase mx-4"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '0.9rem',
            color: '#0D0D0D',
          }}
        >
          Loaded Fries &middot; Cheesy Burgers &middot; Cold Brew &middot; 4.5
          Stars &middot; 274 Reviews &middot; Open Daily &middot; Ganesh Park
          Ankleshwar &middot;
        </span>
      </div>
    </div>
  )
}
