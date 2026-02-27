import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Meridian Properties',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    title: 'Ashworth & Partners',
    category: 'Professional Services',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    title: 'The Pemberton Group',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
  {
    title: 'Vanguard Construction',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
];

export default function SelectedWork() {
  return (
    <section className="py-24 md:py-36 border-t border-[#1a1f2e]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
            <div>
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80 block mb-4">
                Portfolio
              </span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-[-0.01em] text-[#f5f0eb]">
                Selected Work
              </h2>
            </div>
            <Link
              to={createPageUrl('Work')}
              className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-[#c9a96e] hover:text-[#d4ba88] transition-colors duration-300 flex items-center gap-2"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.12}>
              <motion.div
                className="group relative overflow-hidden cursor-pointer"
                whileHover="hover"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#111827]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/90 via-[#0a0f1c]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#c9a96e]/80 block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#f5f0eb]">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute inset-0 border border-[#c9a96e]/0 group-hover:border-[#c9a96e]/20 transition-colors duration-500" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}