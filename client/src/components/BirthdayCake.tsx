import { motion } from "framer-motion";
import { useState } from "react";

export default function BirthdayCake() {
  const [litCandles, setLitCandles] = useState<boolean[]>([false, false, false, false]);

  const lightCandle = (index: number) => {
    if (!litCandles[index]) {
      const newLitCandles = [...litCandles];
      newLitCandles[index] = true;
      setLitCandles(newLitCandles);
    }
  };

  const totalLit = litCandles.filter(Boolean).length;
  const allLit = totalLit === 4;

  return (
    <section id="celebration" className="py-20 bg-gradient-to-b from-card to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="cake-title"
        >
          Make a Wish! 🎂
        </motion.h2>
        
        <motion.p 
          className="text-lg text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Click on the candles to light them and celebrate our special day!
        </motion.p>
        
        <div className="max-w-md mx-auto relative">
          {/* Birthday Cake */}
          <motion.div 
            className="bg-white rounded-full w-80 h-80 mx-auto relative border-8 border-accent shadow-2xl"
            style={{ 
              background: "linear-gradient(45deg, #FFB6C1, #FFC0CB, #FFE4E1)" 
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            viewport={{ once: true }}
            data-testid="birthday-cake"
          >
            {/* Cake base */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-gradient-to-t from-accent to-accent/80 rounded-full"></div>
            
            {/* Candles */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {/* Regular Candles */}
              {[0, 1].map((index) => (
                <motion.div
                  key={index}
                  className={`candle text-center cursor-pointer ${litCandles[index] ? 'lit' : ''}`}
                  onClick={() => lightCandle(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  data-testid={`candle-${index}`}
                >
                  <div className="w-2 h-12 bg-yellow-200 rounded-sm mx-auto"></div>
                  <motion.div 
                    className="text-orange-400 text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: litCandles[index] ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    🔥
                  </motion.div>
                </motion.div>
              ))}
              
              {/* Number Candles */}
              {[2, 3].map((index) => (
                <motion.div
                  key={index}
                  className={`candle text-center cursor-pointer ${litCandles[index] ? 'lit' : ''}`}
                  onClick={() => lightCandle(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  data-testid={`candle-${index}`}
                >
                  <div className="text-2xl font-bold text-accent">2</div>
                  <motion.div 
                    className="text-orange-400 text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: litCandles[index] ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    🔥
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-20 left-8 text-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🌹
            </motion.div>
            <motion.div 
              className="absolute top-20 right-8 text-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            >
              🌹
            </motion.div>
            <motion.div 
              className="absolute bottom-16 left-12 text-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              💖
            </motion.div>
            <motion.div 
              className="absolute bottom-16 right-12 text-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            >
              💖
            </motion.div>
          </motion.div>
          
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-4" data-testid="candle-count">
              Candles lit: {totalLit}/4
            </p>
            {allLit && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                data-testid="celebration-message"
              >
                <p className="text-xl font-serif text-primary animate-bounce-slow">
                  🎉 Happy Birthday! All wishes come true! 🎉
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
