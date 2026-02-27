import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';

const capabilities = [
  {
    number: '01',
    title: 'Website Design & Development',
    description: 'Bespoke digital platforms built for performance, precision, and conversion. Every element serves a strategic purpose.',
  },
  {
    number: '02',
    title: 'Conversion Strategy',
    description: 'Data-informed architecture that transforms visitors into qualified enquiries. Structure designed around user behaviour.',
  },
  {
    number: '03',
    title: 'Brand Positioning',
    description: 'Strategic identity systems that establish market authority and communicate your value proposition with clarity.',
  },
  {
    number: '04',
    title: 'Digital Systems',
    description: 'Integrated digital infrastructure — from CRM to automation — engineered for scalable business operations.',
  },
  {
    number: '05',
    title: 'Performance Optimisation',
    description: 'Continuous refinement of speed, visibility, and conversion. Measured results, not assumptions.',
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="py-24 md:py-36 border-t border-[#1a1f2e]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-4">
            <AnimatedSection>
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80 block mb-4">
                Capabilities
              </span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-[-0.01em] text-[#f5f0eb] mb-6">
                Our Capabilities
              </h2>
              <p className="text-sm text-[#c8c2ba]/60 leading-relaxed mb-10">
                Every engagement is built around three outcomes:
              </p>
              <div className="flex gap-8">
                {['Authority', 'Credibility', 'Growth'].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#c9a96e]"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {capabilities.map((cap, i) => (
                <AnimatedSection key={cap.number} delay={i * 0.1}>
                  <div className="group border-t border-[#1a1f2e]/50 py-8 md:py-10 flex gap-6 md:gap-10 items-start hover:bg-[#0d1424]/30 transition-colors duration-500 px-2 md:px-6 -mx-2 md:-mx-6">
                    <span className="text-xs font-sans text-[#c9a96e]/40 mt-1 font-light">{cap.number}</span>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-[#f5f0eb] mb-3 group-hover:text-[#c9a96e] transition-colors duration-500">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-[#c8c2ba]/60 leading-relaxed max-w-lg">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}