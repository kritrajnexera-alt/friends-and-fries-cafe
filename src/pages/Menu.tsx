import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

interface Item {
  name: string
  price: string
  desc: string
  chefPick?: boolean
}

interface Category {
  id: string
  label: string
  items: Item[]
}

const categories: Category[] = [
  {
    id: 'fries',
    label: 'Fries & Sides',
    items: [
      { name: 'Masala Loaded Fries', price: '₹149', desc: 'Spiced with our signature masala blend', chefPick: true },
      { name: 'Cheese Overloaded Fries', price: '₹179', desc: 'Generous cheese sauce and herbs' },
      { name: 'Peri Peri Fries', price: '₹129', desc: 'Tangy peri peri seasoning' },
      { name: 'Onion Rings', price: '₹99', desc: 'Crispy battered onion rings' },
      { name: 'Garlic Bread', price: '₹89', desc: 'Toasted with garlic butter' },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers & Wraps',
    items: [
      { name: 'Classic Smash Burger', price: '₹199', desc: 'Double patty with cheddar and onions', chefPick: true },
      { name: 'Double Patty Beast', price: '₹249', desc: 'Two smash patties, bacon and cheese' },
      { name: 'Crispy Chicken Wrap', price: '₹179', desc: 'Crunchy chicken with ranch dressing' },
      { name: 'Paneer Tikka Wrap', price: '₹169', desc: 'Spiced paneer with mint chutney' },
      { name: 'BBQ Crunch Burger', price: '₹229', desc: 'BBQ sauce with crispy onion strings' },
    ],
  },
  {
    id: 'beverages',
    label: 'Cold Brews & Shakes',
    items: [
      { name: 'Cold Coffee', price: '₹99', desc: 'Chilled brewed coffee with milk', chefPick: true },
      { name: 'Oreo Shake', price: '₹129', desc: 'Creamy Oreo milkshake' },
      { name: 'Mango Mastani', price: '₹119', desc: 'Mango shake loaded with dry fruits' },
      { name: 'Chocolate Overload', price: '₹139', desc: 'Rich chocolate shake with brownie bits' },
      { name: 'Virgin Mojito', price: '₹89', desc: 'Minty lemon cooler' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Brownie Blast', price: '₹129', desc: 'Warm brownie with ice cream', chefPick: true },
      { name: 'Nutella Waffles', price: '₹159', desc: 'Crispy waffles with Nutella drizzle' },
      { name: 'Ice Cream Sundae', price: '₹109', desc: 'Three scoops with toppings' },
      { name: 'Choco Lava Cup', price: '₹119', desc: 'Molten chocolate lava cake' },
    ],
  },
]

export default function Menu() {
  const [active, setActive] = useState(categories[0].id)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const current = categories.find((c) => c.id === active)!

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
          Our Menu
        </h1>
        <div
          className="h-[3px] w-10 mb-10"
          style={{ backgroundColor: '#D4380D' }}
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = cat.id === active
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className="font-body font-medium text-[0.85rem] uppercase tracking-widest px-5 py-2 cursor-pointer transition-colors duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  backgroundColor: isActive ? '#D4380D' : 'transparent',
                  border: `1px solid ${isActive ? '#D4380D' : '#333333'}`,
                  color: isActive ? '#F5F5F5' : '#888888',
                  borderRadius: 9999,
                }}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {current.items.map((item) => (
              <ScrollReveal key={item.name}>
                <div className="relative">
                  <div
                    className="p-5 transition-all duration-200 cursor-default"
                    style={{
                      backgroundColor: hoveredItem === item.name ? '#222222' : '#1A1A1A',
                      borderLeft: hoveredItem === item.name ? '3px solid #D4380D' : '3px solid transparent',
                      paddingLeft: hoveredItem === item.name ? 'calc(1.25rem - 3px)' : '1.25rem',
                      borderRadius: 6,
                    }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3
                        className="font-heading font-semibold text-[1rem]"
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: 600,
                          color: '#F5F5F5',
                        }}
                      >
                        {item.name}
                      </h3>
                      <span
                        className="font-heading font-bold text-[1rem] whitespace-nowrap ml-4"
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: 700,
                          color: '#FAAD14',
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p
                      className="font-body truncate"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.85rem',
                        color: '#888888',
                      }}
                    >
                      {item.desc}
                    </p>
                    {item.chefPick && (
                      <span
                        className="inline-block mt-2 font-body font-medium uppercase tracking-wide"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          fontSize: '0.65rem',
                          letterSpacing: '0.05em',
                          backgroundColor: '#D4380D',
                          color: '#F5F5F5',
                          padding: '2px 8px',
                          borderRadius: 2,
                        }}
                      >
                        Chef's Pick
                      </span>
                    )}
                  </div>

                  {/* Hover Popup */}
                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: hoveredItem === item.name ? 0.3 : 0.2, ease: 'easeOut' }}
                        className="absolute bottom-full left-0 right-0 mb-2 pointer-events-none"
                        style={{ zIndex: 50 }}
                      >
                        <div
                          style={{
                            backgroundColor: 'rgba(20,20,20,0.95)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 10,
                            padding: '12px 16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                          }}
                        >
                          <div
                            className="font-heading font-semibold mb-1"
                            style={{
                              fontFamily: 'Space Grotesk, sans-serif',
                              fontWeight: 600,
                              fontSize: '0.95rem',
                              color: '#F5F5F5',
                            }}
                          >
                            {item.name}
                          </div>
                          <div
                            className="font-body"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: 13,
                              color: '#999999',
                            }}
                          >
                            {item.desc}
                          </div>
                          {item.chefPick && (
                            <span
                              className="inline-block mt-1.5 font-body font-medium uppercase tracking-wide"
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                fontSize: '0.6rem',
                                letterSpacing: '0.05em',
                                backgroundColor: '#D4380D',
                                color: '#F5F5F5',
                                padding: '2px 10px',
                                borderRadius: 9999,
                              }}
                            >
                              Chef's Pick
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  )
}
