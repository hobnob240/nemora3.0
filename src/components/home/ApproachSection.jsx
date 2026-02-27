import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';

const steps = [
  {
    phase: 'Phase I',
    title: 'Position',
    description: 'Define your market position, clarify your value proposition, and identify the strategic foundation for your digital presence.',
  },
  {
    phase: 'Phase II',
    title: 'Build',
    description: 'Design and develop a high-performance digital platform, engineered for precision and built to convert.',
  },
  {
    phase: 'Phase III',
    title: 'Optimise',
    description: 'Refine every element through data-driven analysis. Speed, usability, and conversion — continuously improved.',
  },
  {
    phase: 'Phase IV',
    title: 'Scale',
    description: 'Expand your digital infrastructure to support growth. New markets, new channels, sustained momentum.',
  },
];

export default function ApproachSection() {
  return (
    <section className="py-24 md:py-36 border-t border-[#1a1f2e]/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a96e]/[0.02] blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-24">
            <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80 block mb-4">
              Methodology
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-[-0.01em] text-[#f5f0eb]">
              Our Approach
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1f2e]/30">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.12}>
              <div className="bg-[#0a0f1c] p-8 md:p-10 h-full group hover:bg-[#0d1424] transition-all duration-500 relative">
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#c9a96e]/40 block mb-8">
                  {step.phase}
                </span>
                <motion.span
                  className="font-serif text-6xl md:text-7xl text-[#c9a96e]/[0.07] absolute top-6 right-8 select-none"
                  whileInView={{ opacity: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#f5f0eb] mb-4 group-hover:text-[#c9a96e] transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-sm text-[#c8c2ba]/60 leading-relaxed">
                  {step.description}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a96e]/30 group-hover:w-full transition-all duration-700" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}