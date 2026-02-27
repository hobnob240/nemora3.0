import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import AnimatedSection from '../AnimatedSection';

export default function FinalCTA() {
  return (
    <section className="py-28 md:py-44 border-t border-[#1a1f2e]/40 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c9a96e]/[0.03] blur-[150px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
        <AnimatedSection>
          <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80 block mb-6">
            Ready to Begin
          </span>
          <h2 className="font-serif text-3xl md:text-[3.5rem] lg:text-6xl leading-[1.1] tracking-[-0.01em] text-[#f5f0eb] mb-8">
            Build Something That
            <br />
            <span className="text-gold-gradient">Reflects Your Ambition.</span>
          </h2>
          <p className="text-base text-[#c8c2ba]/60 max-w-xl mx-auto mb-12 leading-relaxed">
            Serious businesses deserve serious digital infrastructure. Let's discuss how we can position your brand for long-term growth.
          </p>
          <Link
            to={createPageUrl('Contact')}
            className="group inline-flex items-center justify-center px-10 py-4 bg-[#c9a96e] text-[#0a0f1c] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#d4ba88] transition-all duration-500"
          >
            Book a Consultation
            <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}