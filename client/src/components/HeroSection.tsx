import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
            data-testid="hero-title"
          >
            <motion.span 
              className="block animate-bounce-slow"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            >
              🎉 Piiiii Umur 22 Kita Bersama Sayanggg! 🎂
            </motion.span>
            <motion.span 
              className="block mt-4 text-3xl md:text-5xl animate-pulse-heart"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
            >
              💕 Piii Enip Yang Ke 4 💕
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            data-testid="hero-subtitle"
          >
            Ini adalah pekerjaan tahunan aku sayang, bikin website karena kamu comel 💕
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <button 
              onClick={() => scrollToSection('timeline')}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
              data-testid="button-love-story"
            >
              Perjalanan Kita Sama Sama
            </button>
            <button 
              onClick={() => scrollToSection('celebration')}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
              data-testid="button-light-candles"
            >
              Hidupkan lilin sayang
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 text-6xl opacity-70"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        💖
      </motion.div>
      <motion.div 
        className="absolute top-20 right-20 text-4xl opacity-70"
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
      >
        🎈
      </motion.div>
      <motion.div 
        className="absolute bottom-20 left-20 text-5xl opacity-70"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ✨
      </motion.div>
      <motion.div 
        className="absolute bottom-10 right-10 text-4xl opacity-70"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3, delay: 1 }}
      >
        🌟
      </motion.div>
    </section>
  );
}
