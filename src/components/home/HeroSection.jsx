import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils.js';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      time += 0.002;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const drawOrb = (x, y, r, alpha) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, `rgba(201, 169, 110, ${alpha * 0.08})`);
        gradient.addColorStop(0.5, `rgba(201, 169, 110, ${alpha * 0.02})`);
        gradient.addColorStop(1, 'rgba(201, 169, 110, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      };

      drawOrb(
        canvas.width * 0.7 + Math.sin(time * 0.8) * 100,
        canvas.height * 0.3 + Math.cos(time * 0.6) * 60,
        400, 0.6
      );
      drawOrb(
        canvas.width * 0.2 + Math.cos(time * 0.5) * 80,
        canvas.height * 0.7 + Math.sin(time * 0.7) * 50,
        350, 0.4
      );
      drawOrb(
        canvas.width * 0.5 + Math.sin(time * 0.3) * 120,
        canvas.height * 0.5 + Math.cos(time * 0.4) * 70,
        500, 0.3
      );

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-0 md:pb-0">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#c9a96e]/80">
              Strategic Digital Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.01em] text-[#f5f0eb] mb-8"
          >
            Digital Infrastructure
            <br />
            <span className="text-gold-gradient">for Modern Businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="text-base md:text-lg font-sans font-light text-[#c8c2ba]/80 max-w-2xl leading-relaxed mb-12"
          >
            We design and build strategic digital platforms that elevate brands,
            generate leads, and position businesses for long-term growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link
              to={createPageUrl('Contact')}
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#c9a96e] text-[#0a0f1c] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#d4ba88] transition-all duration-500"
            >
              Start a Conversation
              <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to={createPageUrl('Work')}
              className="inline-flex items-center justify-center px-8 py-4 border border-[#c9a96e]/30 text-[#c9a96e] text-xs font-medium tracking-[0.15em] uppercase hover:border-[#c9a96e]/60 hover:bg-[#c9a96e]/5 transition-all duration-500"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8c2ba]/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#c9a96e]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}