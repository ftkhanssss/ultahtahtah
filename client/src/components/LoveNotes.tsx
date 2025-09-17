import { motion } from "framer-motion";
import { useState } from "react";

const loveNotes = [
  {
    icon: "fas fa-heart",
    buttonText: "Click for a sweet message",
    message: "You make every day feel like a celebration. Thank you for 4 amazing years! 💕",
    gradient: "from-primary to-secondary"
  },
  {
    icon: "fas fa-star", 
    buttonText: "Another sweet surprise",
    message: "Growing older with you is the greatest adventure. Here's to many more birthdays together! 🎂",
    gradient: "from-accent to-primary"
  },
  {
    icon: "fas fa-gift",
    buttonText: "One more message", 
    message: "From 18 to 22, from strangers to soulmates. You're my favorite everything! ✨",
    gradient: "from-secondary to-accent"
  }
];

export default function LoveNotes() {
  const [showNotes, setShowNotes] = useState<boolean[]>([false, false, false]);

  const toggleLoveNote = (index: number) => {
    const newShowNotes = [...showNotes];
    newShowNotes[index] = !newShowNotes[index];
    setShowNotes(newShowNotes);
    
    // Hide after 5 seconds if shown
    if (!showNotes[index]) {
      setTimeout(() => {
        const hideNotes = [...newShowNotes];
        hideNotes[index] = false;
        setShowNotes(hideNotes);
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="love-notes-title"
        >
          Love Notes
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {loveNotes.map((note, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => toggleLoveNote(index)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-testid={`love-note-${index}`}
            >
              <div className={`bg-gradient-to-br ${note.gradient} p-8 rounded-lg shadow-lg transform transition-all`}>
                <div className="text-center">
                  <i className={`${note.icon} text-4xl text-white mb-4`}></i>
                  <p className="text-white font-semibold">{note.buttonText}</p>
                </div>
                
                <motion.div 
                  className="absolute inset-0 bg-white rounded-lg p-6 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: showNotes[index] ? 1 : 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                  style={{ 
                    transformOrigin: "center",
                    visibility: showNotes[index] ? "visible" : "hidden"
                  }}
                >
                  <p className="text-center text-gray-800 font-serif italic">
                    "{note.message}"
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
