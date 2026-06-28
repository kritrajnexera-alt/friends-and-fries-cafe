import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const images = [
  { src: '/images/unnamed.jpg', caption: 'Cafe vibes' },
  { src: '/images/unnamed-2.jpg', caption: 'Inside the cafe' },
  { src: '/images/unnamed-3.jpg', caption: 'Food serving' },
  { src: '/images/unnamed-4.jpg', caption: 'Dish close-up' },
  { src: '/images/unnamed-5.jpg', caption: 'Meal prep' },
  { src: '/images/unnamed-6.jpg', caption: 'Cafe corner' },
  { src: '/images/unnamed-7.jpg', caption: 'The counter' },
  { src: '/images/unnamed-8.jpg', caption: 'Dine-in area' },
  { src: '/images/unnamed-9.jpg', caption: 'Cafe entrance' },
]

export default function Gallery() {
  return (
    <PageTransition>
      <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <h1
          className="font-heading font-black uppercase mb-2"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            color: '#F5F5F5',
          }}
        >
          Gallery
        </h1>
        <div
          className="h-[3px] w-10 mb-10"
          style={{ backgroundColor: '#D4380D' }}
        />

        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative group overflow-hidden break-inside-avoid"
              style={{ borderRadius: 4 }}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-auto object-cover block"
                style={{ display: 'block', width: '100%' }}
              />
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: 'rgba(212,56,13,0.6)' }}
              >
                <span
                  className="font-body font-medium text-white text-[0.85rem] translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
