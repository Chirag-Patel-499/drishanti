import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle} from 'lucide-react'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('Please fill in all fields.')
      return
    }
    setStatus('Thank you for your message! We will get back to you shortly.')
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] items-start">
          <section className="space-y-8">
            <div className="max-w-2xl">
              <span className="text-gold-600 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Contact</span>
              <h1 className="text-4xl md:text-5xl font-serif font-light text-primary tracking-tight">Get in Touch</h1>
              <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
                Have a question about our collections, bespoke orders, or a gifting request? Send us a message and our team will respond as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-gray-700">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-sm text-primary outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
                  />
                </label>
                <label className="block text-sm text-gray-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-sm text-primary outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
                  />
                </label>
              </div>

              <label className="block text-sm text-gray-700">
                Message
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="How can we help you?"
                  className="mt-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-sm text-primary outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-none bg-primary px-8 py-4 text-[12px] tracking-[0.4em] uppercase text-white transition hover:bg-[#0f0d0b]"
                >
                  Send Message
                </button>

                <a
                  href="https://wa.me/919900112233?text=Hello%20Drishanti%20team,%20I%20would%20like%20to%20inquire%20about%20your%20potli%20collection."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-none border border-primary bg-white px-8 py-4 text-[12px] tracking-[0.4em] uppercase text-primary transition hover:bg-gray-100"
                >
                  <MessageCircle size={18} className="mr-2" /> WhatsApp
                </a>
              </div>

              {status && (
                <p className="text-sm text-green-700">{status}</p>
              )}
            </form>
          </section>

          <aside className="space-y-8 border border-gray-200 bg-gray-50 p-8 md:p-10">
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-primary">Business Details</h2>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Drishanti is available for custom orders, bulk gifting, and personal consultations. Reach out anytime, and we&apos;ll assist you with our timeless collection.
                </p>
              </div>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">Studio & Showroom</p>
                    <p className="text-gray-600">22 Heritage Lane, Old City, Varanasi, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 text-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 99001 12233</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">hello@drishanti.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="mt-1 text-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Mon - Sat: 10am - 7pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-gray-200 bg-white p-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold-600 mb-4">Need quick help?</p>
              <h3 className="text-lg font-semibold text-primary">WhatsApp support</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Send a message directly on WhatsApp for order queries and custom requests.
              </p>
              <a
                href="https://wa.me/919900112233"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-none bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={18} className="mr-2" /> Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Contact
