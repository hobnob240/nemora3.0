import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils.js';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './components/Footer.jsx';

const LOGO_URL = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_699fb162720769f9a884cf16/80fc894a6_ChatGPTImageFeb26202612_44_29PM.png';

const NAV_ITEMS = [
  { name: 'Home', page: 'Home' },
  { name: 'About', page: 'About' },
  { name: 'Work', page: 'Work' },
  { name: 'Services', page: 'Services' },
  { name: 'Contact', page: 'Contact' },
];

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-[#f5f0eb]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0f1c]/90 backdrop-blur-xl border-b border-[#1a1f2e]/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link to={createPageUrl('Home')} className="relative z-50">
              <img
                src={LOGO_URL}
                alt="NEMORA"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`text-xs font-sans font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                    currentPageName === item.page
                      ? 'text-[#c9a96e]'
                      : 'text-[#c8c2ba]/70 hover:text-[#f5f0eb]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to={createPageUrl('Contact')}
                className="ml-4 px-6 py-2.5 border border-[#c9a96e]/40 text-[#c9a96e] text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#c9a96e] hover:text-[#0a0f1c] transition-all duration-500"
              >
                Start a Project
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`block w-6 h-[1.5px] bg-[#f5f0eb] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
              <span className={`block w-6 h-[1.5px] bg-[#f5f0eb] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[1.5px] bg-[#f5f0eb] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0a0f1c] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    to={createPageUrl(item.page)}
                    className={`font-serif text-3xl tracking-wide transition-colors duration-300 ${
                      currentPageName === item.page ? 'text-[#c9a96e]' : 'text-[#f5f0eb]'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link
                  to={createPageUrl('Contact')}
                  className="mt-4 px-8 py-3 border border-[#c9a96e]/40 text-[#c9a96e] text-sm font-medium tracking-[0.15em] uppercase"
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}