import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
  {
    number: '01',
    title: 'Website Development',
    subtitle: 'Digital Platforms That Perform',
    description: 'We design and develop bespoke websites and digital platforms that establish authority, generate qualified enquiries, and convert at scale. Every element is strategically considered — from information architecture to user experience, from visual design to technical performance.',
    capabilities: [
      'Bespoke Website Design',
      'Responsive Development',
      'E-commerce Platforms',
      'Content Management Systems',
      'Landing Page Architecture',
      'Technical SEO Foundation',
    ],
  },
  {
    number: '02',
    title: 'Brand Systems',
    subtitle: 'Identity That Commands Respect',
    description: 'Your brand is the perception your market holds. We build cohesive brand systems that communicate your value proposition with clarity and consistency — across every digital and physical touchpoint.',
    capabilities: [
      'Visual Identity Systems',
      'Brand Strategy',
      'Typography & Colour Systems',
      'Brand Guidelines',
      'Digital Asset Libraries',
      'Messaging Architecture',
    ],
  },
  {
    number: '03',
    title: 'Performance Optimisation',
    subtitle: 'Continuous, Measurable Improvement',
    description: 'A digital platform is never finished. We provide ongoing optimisation to ensure your investment continues to deliver — improving speed, visibility, usability, and conversion through systematic, data-driven refinement.',
    capabilities: [
      'Speed & Core Web Vitals',
      'Search Engine Optimisation',
      'Conversion Rate Optimisation',
      'Analytics & Reporting',
      'A/B Testing',
      'User Experience Audits',
    ],
  },
  {
    number: '04',
    title: 'Strategic Advisory',
    subtitle: 'Clarity Before Execution',
    description: 'Before we build anything, we define the strategy. Our advisory service provides the strategic clarity that ensures every digital investment is aligned with your business objectives and market position.',
    capabilities: [
      'Digital Strategy',
      'Market Positioning',
      'Competitive Analysis',
      'Technology Consulting',
      'Growth Roadmapping',
      'Digital Transformation',
    ],
  },
];

export default function Services() {
  return (
    <div>
      <section className="pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80 block mb-6">
              Services
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.1] tracking-[-0.01em] text-[#f5f0eb] max-w-4xl mb-8">
              Capability, Not
              <br />
              <span className="text-gold-gradient">Commodity.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-base md:text-lg font-light text-[#c8c2ba]/70 max-w-2xl leading-relaxed">
              We offer a focused suite of services designed to build, optimise,
              and scale your digital infrastructure. Every engagement is tailored
              to your strategic objectives.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-0">
            {services.map((service) => (
              <AnimatedSection key={service.number} delay={0.05}>
                <div className="border-t border-[#1a1f2e]/50 py-16 md:py-24">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                    <div className="lg:col-span-5">
                      <span className="text-xs font-sans text-[#c9a96e]/40 block mb-6">{service.number}</span>
                      <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0eb] mb-2">{service.title}</h2>
                      <span className="text-sm font-sans text-[#c9a96e]/70 block mb-6">{service.subtitle}</span>
                      <p className="text-sm text-[#c8c2ba]/60 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="lg:col-span-7 flex items-center">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        {service.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-3 py-3 px-5 bg-[#0d1424]/50 border border-[#1a1f2e]/30 group hover:border-[#c9a96e]/20 transition-colors duration-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]/30 group-hover:bg-[#c9a96e] transition-colors duration-500" />
                            <span className="text-sm text-[#c8c2ba]/70 group-hover:text-[#f5f0eb] transition-colors duration-500">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
            <h2 className="font-serif text-3xl md:text-5xl tracking-[-0.01em] text-[#f5f0eb] mb-6">
              The Right Strategy
              <br />
              <span className="text-gold-gradient">Changes Everything.</span>
            </h2>
            <p className="text-sm text-[#c8c2ba]/60 mb-10 max-w-lg mx-auto">
              Let's discuss which services are most relevant to your current business objectives.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center px-10 py-4 bg-[#c9a96e] text-[#0a0f1c] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#d4ba88] transition-all duration-500"
            >
              Book a Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}