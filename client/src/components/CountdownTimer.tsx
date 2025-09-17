import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeData, setTimeData] = useState({
    years: 4,
    months: 48,
    days: 1460,
    hours: 35040
  });

  useEffect(() => {
    const updateCountdown = () => {
      const startDate = new Date('2021-09-18'); // Approximate start date
      const now = new Date();
      const timeDiff = now.getTime() - startDate.getTime();
      
      const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      
      setTimeData({ years, months, days, hours });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 3600000); // Update every hour

    return () => clearInterval(interval);
  }, []);

  const timeCards = [
    { value: timeData.years, label: "Years" },
    { value: timeData.months, label: "Months" },
    { value: timeData.days.toLocaleString(), label: "Days" },
    { value: timeData.hours.toLocaleString(), label: "Hours" }
  ];

  return (
    <section id="countdown" className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="countdown-title"
        >
          Time Together
        </motion.h2>
        
        <motion.p 
          className="text-xl mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Every moment with you is precious
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {timeCards.map((card, index) => (
            <motion.div
              key={card.label}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-testid={`countdown-${card.label.toLowerCase()}`}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{card.value}</div>
              <div className="text-sm md:text-base">{card.label}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl italic font-serif" data-testid="countdown-quote">
            "And still counting... Here's to forever! 💖"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
