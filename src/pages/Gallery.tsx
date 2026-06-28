import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const images = [
  { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&q=80', caption: 'Sunlit corner' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', caption: 'Fresh plating' },
  { src: 'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=600&q=80', caption: 'Loaded fries' },
  { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80', caption: 'Classic smash burger' },
  { src: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80', caption: 'Shakes and sips' },
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', caption: 'Cafe interior' },
  { src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80', caption: 'The grill station' },
  { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&q=80', caption: 'Dine-in vibes' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', caption: 'Dessert shots' },
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
