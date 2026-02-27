import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const projects = [
  {
    title: 'Meridian Properties',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80',
    objective: 'Establish digital authority in a competitive luxury property market.',
    strategy: 'Position the brand as the definitive choice for high-net-worth property investors through a premium digital presence.',
    execution: 'Bespoke website with immersive property showcases, lead qualification systems, and integrated CRM infrastructure.',
  },
  {
    title: 'Ashworth & Partners',
    category: 'Professional Services',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    objective: 'Reposition a legacy firm for the modern professional landscape.',
    strategy: 'Communicate decades of expertise through contemporary design that balances tradition with forward-thinking innovation.',
    execution: 'Complete digital transformation including brand identity refresh, strategic website rebuild, and performance optimisation.',
  },
  {
    title: 'The Pemberton Group',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80',
    objective: 'Create a digital experience that matches the in-person luxury hospitality standard.',
    strategy: 'Immersive visual storytelling combined with frictionless booking infrastructure to drive direct reservations.',
    execution: 'High-fidelity website with dynamic content, integrated booking systems, and conversion-optimised user journeys.',
  },
  {
    title: 'Vanguard Construction',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    objective: 'Position a growing construction firm as a tier-one operator.',
    strategy: 'Leverage portfolio presentation and process transparency to build trust with high-value commercial clients.',
    execution: 'Project showcase platform with detailed case studies, service architecture, and lead generation systems.',
  },
  {
    title: 'Sterling Wealth Advisory',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=900&q=80',
    objective: 'Establish a digital presence that reflects institutional-grade financial expertise.',
    strategy: 'Build credibility through strategic content architecture, regulatory compliance, and authoritative brand positioning.',
    execution: 'Secure, performance-optimised platform with client portal integration and compliance-ready content systems.',
  },
  {
    title: 'Hartley & Sons',
    category: 'Trades',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80',
    objective: 'Transform a family trade business into a digitally competitive operation.',
    strategy: 'Professional presentation of craftsmanship heritage combined with modern lead generation infrastructure.',
    execution: 'Conversion-focused website with service area targeting, project galleries, and automated enquiry management.',
  },
];

export default function Work() {
  return (
    <div>
      <section className="pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80 block mb-6">
              Portfolio
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.1] tracking-[-0.01em] text-[#f5f0eb] max-w-4xl mb-8">
              Selected Work
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-base md:text-lg font-light text-[#c8c2ba]/70 max-w-2xl leading-relaxed">
              A curated selection of projects that demonstrate our strategic approach
              to digital infrastructure across multiple industries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-24 md:space-y-36">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}>
                  <motion.div
                    className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#111827] relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 border border-[#c9a96e]/0 group-hover:border-[#c9a96e]/15 transition-colors duration-500" />
                    </div>
                  </motion.div>

                  <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#c9a96e]/70 block mb-4">
                      {project.category}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl text-[#f5f0eb] mb-8">
                      {project.title}
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#c9a96e]/60 mb-2">The Objective</h4>
                        <p className="text-sm text-[#c8c2ba]/70 leading-relaxed">{project.objective}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#c9a96e]/60 mb-2">The Strategy</h4>
                        <p className="text-sm text-[#c8c2ba]/70 leading-relaxed">{project.strategy}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#c9a96e]/60 mb-2">The Execution</h4>
                        <p className="text-sm text-[#c8c2ba]/70 leading-relaxed">{project.execution}</p>
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
              Your Project Could Be Next.
            </h2>
            <p className="text-sm text-[#c8c2ba]/60 mb-10 max-w-lg mx-auto">
              We partner with a select number of clients each quarter to ensure every project receives our full attention.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center px-10 py-4 bg-[#c9a96e] text-[#0a0f1c] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#d4ba88] transition-all duration-500"
            >
              Discuss Your Project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}