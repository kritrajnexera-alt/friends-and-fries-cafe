import { useState } from 'react'
import { MapPin, Clock, ExternalLink } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[e.target.name]
        return next
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    backgroundColor: '#1A1A1A',
    border: `1px solid ${errors[field] ? '#D4380D' : '#333333'}`,
    color: '#F5F5F5',
    borderRadius: 4,
    padding: '0.75rem 1rem',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box' as const,
  })

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
          Contact
        </h1>
        <div
          className="h-[3px] w-10 mb-10"
          style={{ backgroundColor: '#D4380D' }}
        />

        <div className="flex flex-col md:flex-row gap-12">
          {/* Form */}
          <div className="w-full md:w-1/2">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="block mb-1 font-body font-medium uppercase tracking-wide"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      color: '#888888',
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle('name')}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#D4380D'
                    }}
                    onBlur={(e) => {
                      if (!errors.name)
                        e.currentTarget.style.borderColor = '#333333'
                    }}
                  />
                  {errors.name && (
                    <p
                      className="mt-1 font-body text-[0.75rem]"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#D4380D',
                      }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block mb-1 font-body font-medium uppercase tracking-wide"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      color: '#888888',
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    style={inputStyle('phone')}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#D4380D'
                    }}
                    onBlur={(e) => {
                      if (!errors.phone)
                        e.currentTarget.style.borderColor = '#333333'
                    }}
                  />
                  {errors.phone && (
                    <p
                      className="mt-1 font-body text-[0.75rem]"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#D4380D',
                      }}
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block mb-1 font-body font-medium uppercase tracking-wide"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      color: '#888888',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    rows={4}
                    style={{ ...inputStyle('message'), resize: 'vertical' }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#D4380D'
                    }}
                    onBlur={(e) => {
                      if (!errors.message)
                        e.currentTarget.style.borderColor = '#333333'
                    }}
                  />
                  {errors.message && (
                    <p
                      className="mt-1 font-body text-[0.75rem]"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#D4380D',
                      }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full font-heading font-semibold text-white py-3 cursor-pointer transition-colors duration-200"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                    backgroundColor: '#D4380D',
                    border: 'none',
                    borderRadius: 4,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#B33000'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#D4380D'
                  }}
                >
                  Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin size={20} color="#D4380D" className="mt-0.5 shrink-0" />
                  <div
                    className="font-body"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: '#888888',
                    }}
                  >
                    <strong style={{ color: '#F5F5F5' }}>Address</strong>
                    <br />
                    A3-A4 Ganesh Park
                    <br />
                    Opp. Reliance Trendz
                    <br />
                    Ankleshwar, Gujarat
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ExternalLink size={20} color="#D4380D" className="mt-0.5 shrink-0" />
                  <div
                    className="font-body"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: '#888888',
                    }}
                  >
                    <strong style={{ color: '#F5F5F5' }}>Instagram</strong>
                    <br />
                    <span style={{ color: '#FAAD14' }}>@friendsandfries</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={20} color="#D4380D" className="mt-0.5 shrink-0" />
                  <div
                    className="font-body"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: '#888888',
                    }}
                  >
                    <strong style={{ color: '#F5F5F5' }}>Opening Hours</strong>
                    <br />
                    Mon – Fri: 11:00 AM – 10:00 PM
                    <br />
                    Sat – Sun: 10:00 AM – 11:00 PM
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
