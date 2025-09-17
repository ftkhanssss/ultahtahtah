import { motion } from "framer-motion";

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-home"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('timeline')}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-timeline"
          >
            Our Journey
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-gallery"
          >
            Memories
          </button>
          <button 
            onClick={() => scrollToSection('celebration')}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-celebration"
          >
            Celebrate
          </button>
          <button 
            onClick={() => scrollToSection('countdown')}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-countdown"
          >
            Together
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
