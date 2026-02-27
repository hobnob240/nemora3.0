import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const values = [
  {
    title: 'Strategic Precision',
    description: 'Every decision is deliberate. We build digital infrastructure that serves clear business objectives — nothing more, nothing less.',
  },
  {
    title: 'Uncompromising Quality',
    description: 'We hold our work to the highest standard. From the first wireframe to the final deployment, excellence is non-negotiable.',
  },
  {
    title: 'Long-Term Thinking',
    description: 'We build for scale. Our platforms are designed to grow alongside your business, adapting to new markets and opportunities.',
  },
  {
    title: 'Measured Results',
    description: 'We believe in accountability. Every strategy is backed by data, and every outcome is measured against defined objectives.',
  },
];

export default function About() {
  return (
    <div>
      <section className="pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80 block mb-6">
              About NEMORA
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.1] tracking-[-0.01em] text-[#f5f0eb] max-w-4xl mb-8">
              A Strategic Digital Partner
              <br />
              <span className="text-gold-gradient">Built on Precision.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-base md:text-lg font-light text-[#c8c2ba]/70 max-w-2xl leading-relaxed">
              NEMORA is a strategic digital agency that designs and builds
              high-performance digital infrastructure for businesses that demand excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-36 border-t border-[#1a1f2e]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <AnimatedSection>
                <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80 block mb-4">
                  Our Philosophy
                </span>
                <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.01em] text-[#f5f0eb]">
                  We don't build websites.
                  <br />
                  We build digital infrastructure.
                </h2>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.15}>
                <div className="space-y-6">
                  <p className="text-[#c8c2ba]/70 leading-relaxed">
                    There is a fundamental difference between a website and a strategic digital platform.
                    A website exists. A digital platform performs. It positions your brand, generates qualified
                    enquiries, and establishes the credibility that modern businesses require.
                  </p>
                  <p className="text-[#c8c2ba]/70 leading-relaxed">
                    We work with businesses across multiple industries — from professional services and real estate
                    to construction, hospitality, and corporate organisations. Our approach is consistent: understand
                    the strategic objective, build the infrastructure to achieve it, and optimise continuously.
                  </p>
                  <p className="text-[#c8c2ba]/70 leading-relaxed">
                    NEMORA exists for businesses that understand the value of perception, the power of positioning,
                    and the commercial impact of a digital presence that truly reflects who they are.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 border-t border-[#1a1f2e]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="text-center mb-16 md:mb-20">
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80 block mb-4">
                Principles
              </span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-[-0.01em] text-[#f5f0eb]">
                What Defines Us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1f2e]/30">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-[#0a0f1c] p-10 md:p-14 group hover:bg-[#0d1424] transition-colors duration-500">
                  <motion.span className="font-serif text-5xl text-[#c9a96e]/[0.07] block mb-4 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </motion.span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#f5f0eb] mb-4 group-hover:text-[#c9a96e] transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#c8c2ba]/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 border-t border-[#1a1f2e]/40 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c9a96e]/[0.03] blur-[120px] rounded-full" />
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-5xl tracking-[-0.01em] text-[#f5f0eb] mb-8">
              Built for Businesses
              <br />
              <span className="text-gold-gradient">That Demand More.</span>
            </h2>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center px-10 py-4 bg-[#c9a96e] text-[#0a0f1c] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#d4ba88] transition-all duration-500"
            >
              Start a Conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}