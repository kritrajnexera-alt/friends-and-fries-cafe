import { useRef, useEffect, useState } from 'react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (!ref.current || started.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const steps = 30
          const increment = target / steps
          let current = 0
          const interval = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(interval)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return (
    <div ref={ref}>
      <span
        className="font-heading font-black"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 900,
          fontSize: '3rem',
          color: '#D4380D',
        }}
      >
        {count}
        {suffix}
      </span>
    </div>
  )
}

export default function About() {
  return (
    <PageTransition>
      <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <ScrollReveal>
              <h2
                className="font-heading font-bold mb-6"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: '3rem',
                  color: '#F5F5F5',
                }}
              >
                We started simple.
              </h2>
              <div
                className="space-y-4 font-body"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  color: '#888888',
                  lineHeight: 1.7,
                  maxWidth: '55ch',
                }}
              >
                <p>
                  Friends & Fries was born in a small corner of Ankleshwar with
                  a simple belief — great food brings people together. What began
                  as a late-night idea between two friends is now the town's
                  favourite spot for loaded fries, smash burgers, and cold
                  brews.
                </p>
                <p>
                  We use fresh ingredients, bold flavours, and a whole lot of
                  love. Every dish on our menu is crafted to be shared, snapped,
                  and remembered. No frills, just fire food.
                </p>
                <p>
                  Whether you're here for a quick bite, a catch-up with friends,
                  or your weekend sugar fix — you're family.
                </p>
              </div>
            </ScrollReveal>

            {/* Stat counters */}
            <div className="flex gap-8 md:gap-12 mt-10">
              {[
                { target: 4.5, suffix: '★', label: 'Rating' },
                { target: 274, suffix: '+', label: 'Reviews' },
                { target: 200, suffix: '–400', label: 'Price (₹)' },
              ].map((stat) => (
                <div key={stat.label}>
                  <Counter target={stat.target} suffix={stat.suffix} />
                  <p
                    className="font-body mt-1"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      color: '#888888',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <ScrollReveal>
              <img
                src="/images/unnamed-9.jpg"
                alt="Friends & Fries Cafe interior"
                className="w-full h-full object-cover"
                style={{ minHeight: 400, maxHeight: 600 }}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
