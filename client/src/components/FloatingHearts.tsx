import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    let heartId = 0;
    
    const createHeart = () => {
      const newHeart: Heart = {
        id: heartId++,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 3, // 3-6 seconds
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, (newHeart.duration + newHeart.delay) * 1000);
    };

    // Create initial hearts
    for (let i = 0; i < 3; i++) {
      setTimeout(createHeart, i * 1000);
    }

    // Create hearts periodically
    const interval = setInterval(createHeart, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts fixed inset-0 pointer-events-none z-0">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-xl opacity-70"
            style={{ 
              left: `${heart.left}%`,
              color: "var(--romantic-rose)"
            }}
            initial={{ 
              y: "100vh", 
              rotate: 0,
              opacity: 0
            }}
            animate={{ 
              y: "-100px", 
              rotate: 360,
              opacity: [0, 0.7, 0.7, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              ease: "linear",
              opacity: {
                times: [0, 0.1, 0.9, 1],
                duration: heart.duration
              }
            }}
            data-testid={`floating-heart-${heart.id}`}
          >
            💖
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
