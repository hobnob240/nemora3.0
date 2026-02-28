import AnimatedSection from '../AnimatedSection.jsx';
import { Building2, Home, Briefcase, Users, UtensilsCrossed, HardHat } from 'lucide-react';

const industries = [
  { name: 'Trades', icon: HardHat },
  { name: 'Real Estate', icon: Home },
  { name: 'Corporate', icon: Building2 },
  { name: 'Professional Services', icon: Briefcase },
  { name: 'Hospitality', icon: UtensilsCrossed },
  { name: 'Construction', icon: Users },
];

export default function IndustrySection() {
  return (
    <section className="py-24 md:py-36 border-t border-[#1a1f2e]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80 block mb-4">
              Industries
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-[-0.01em] text-[#f5f0eb]">
              Who We Work With
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#1a1f2e]/30">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <AnimatedSection key={industry.name} delay={i * 0.08}>
                <div className="bg-[#0a0f1c] p-8 md:p-10 flex flex-col items-center text-center group hover:bg-[#0d1424] transition-colors duration-500">
                  <div className="w-14 h-14 rounded-full border border-[#c9a96e]/20 flex items-center justify-center mb-5 group-hover:border-[#c9a96e]/50 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-[#c9a96e]/60 group-hover:text-[#c9a96e] transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-sans font-medium tracking-[0.1em] uppercase text-[#c8c2ba]/70 group-hover:text-[#f5f0eb] transition-colors duration-500">
                    {industry.name}
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}