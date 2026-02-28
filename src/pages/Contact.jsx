import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setSending(false);
  };

  return (
    <div>
      <section className="pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80 block mb-6">
              Contact
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.1] tracking-[-0.01em] text-[#f5f0eb] max-w-4xl mb-8">
              Let's Discuss
              <br />
              <span className="text-gold-gradient">Your Next Move.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-base md:text-lg font-light text-[#c8c2ba]/70 max-w-xl leading-relaxed">
              Whether you're launching a new venture or repositioning an existing brand,
              we'd welcome the opportunity to discuss how we can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-7">
              <AnimatedSection>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-20 text-center"
                  >
                    <div className="w-16 h-16 rounded-full border border-[#c9a96e]/30 flex items-center justify-center mx-auto mb-8">
                      <svg className="w-6 h-6 text-[#c9a96e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#f5f0eb] mb-4">Message Received.</h3>
                    <p className="text-sm text-[#c8c2ba]/60 max-w-md mx-auto">
                      Thank you for your enquiry. A member of our team will be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#c8c2ba]/50 block mb-3">Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full bg-transparent border-b border-[#1a1f2e] pb-3 text-[#f5f0eb] text-sm focus:outline-none focus:border-[#c9a96e]/50 transition-colors duration-300 placeholder:text-[#c8c2ba]/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#c8c2ba]/50 block mb-3">Email</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-transparent border-b border-[#1a1f2e] pb-3 text-[#f5f0eb] text-sm focus:outline-none focus:border-[#c9a96e]/50 transition-colors duration-300 placeholder:text-[#c8c2ba]/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#c8c2ba]/50 block mb-3">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm(prev => ({ ...prev, company: e.target.value }))}
                        className="w-full bg-transparent border-b border-[#1a1f2e] pb-3 text-[#f5f0eb] text-sm focus:outline-none focus:border-[#c9a96e]/50 transition-colors duration-300 placeholder:text-[#c8c2ba]/20"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#c8c2ba]/50 block mb-3">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full bg-transparent border-b border-[#1a1f2e] pb-3 text-[#f5f0eb] text-sm focus:outline-none focus:border-[#c9a96e]/50 transition-colors duration-300 resize-none placeholder:text-[#c8c2ba]/20"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="group inline-flex items-center px-10 py-4 bg-[#c9a96e] text-[#0a0f1c] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#d4ba88] transition-all duration-500 disabled:opacity-60"
                    >
                      {sending ? (
                        <span className="flex items-center gap-3">
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Enquiry
                          <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5">
              <AnimatedSection delay={0.15}>
                <div className="space-y-12">
                  <div>
                    <h3 className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#c9a96e]/60 mb-4">Email</h3>
                    <a href="mailto:hello@nemora.agency" className="text-lg font-serif text-[#f5f0eb] hover:text-[#c9a96e] transition-colors duration-300">
                      hello@nemora.agency
                    </a>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#c9a96e]/60 mb-4">Location</h3>
                    <p className="text-lg font-serif text-[#f5f0eb]">London, United Kingdom</p>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#c9a96e]/60 mb-4">Availability</h3>
                    <p className="text-sm text-[#c8c2ba]/60 leading-relaxed">
                      We work with a limited number of clients each quarter to ensure every engagement receives our full strategic focus.
                    </p>
                  </div>
                  <div className="pt-8 border-t border-[#1a1f2e]/40">
                    <h3 className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#c9a96e]/60 mb-4">Connect</h3>
                    <div className="flex gap-6">
                      {['LinkedIn', 'Instagram', 'X'].map((social) => (
                        <span key={social} className="text-sm text-[#c8c2ba]/50 hover:text-[#c9a96e] transition-colors duration-300 cursor-pointer">
                          {social}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}