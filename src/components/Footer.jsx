import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils.js';

const LOGO_URL = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_699fb162720769f9a884cf16/80fc894a6_ChatGPTImageFeb26202612_44_29PM.png';

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1f2e]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <img src={LOGO_URL} alt="NEMORA" className="h-12 w-auto mb-6 object-contain" />
            <p className="text-sm text-[#c8c2ba]/60 leading-relaxed max-w-xs">
              Strategic digital infrastructure for businesses that demand excellence.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#c9a96e] mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Work', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={createPageUrl(item)}
                    className="text-sm text-[#c8c2ba]/70 hover:text-[#f5f0eb] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#c9a96e] mb-6">Services</h4>
            <ul className="space-y-3">
              {['Website Development', 'Brand Systems', 'Performance Optimisation', 'Strategic Advisory'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-[#c8c2ba]/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#c9a96e] mb-6">Contact</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-[#c8c2ba]/70">hello@nemora.agency</span></li>
              <li><span className="text-sm text-[#c8c2ba]/70">London, United Kingdom</span></li>
            </ul>
            <div className="flex gap-5 mt-8">
              {['LinkedIn', 'Instagram', 'X'].map((social) => (
                <span key={social} className="text-xs text-[#c8c2ba]/50 hover:text-[#c9a96e] transition-colors duration-300 cursor-pointer">
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1f2e]/60 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#c8c2ba]/40">
            © {new Date().getFullYear()} NEMORA. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-xs text-[#c8c2ba]/40 hover:text-[#c8c2ba]/70 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-[#c8c2ba]/40 hover:text-[#c8c2ba]/70 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}