import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2021",
    title: "First Meeting ✨",
    description: "The day our hearts found each other and everything changed forever",
    side: "left",
    color: "accent"
  },
  {
    year: "2022", 
    title: "First Anniversary 💕",
    description: "One year of laughter, adventures, and falling deeper in love",
    side: "right",
    color: "secondary"
  },
  {
    year: "2023",
    title: "Growing Together 🌱", 
    description: "Building dreams, making memories, and supporting each other's growth",
    side: "left",
    color: "accent"
  },
  {
    year: "2024",
    title: "Here & Now 🎂",
    description: "Celebrating 22 years of life and 4 beautiful years together", 
    side: "right",
    color: "secondary"
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="timeline-title"
        >
          Our Love Timeline
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="timeline-item relative flex items-center"
                  initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  data-testid={`timeline-item-${item.year}`}
                >
                  {item.side === "left" ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="bg-white p-6 rounded-lg shadow-lg border border-border">
                          <h3 className={`text-xl font-serif font-bold mb-2 text-${item.color}`}>
                            {item.year} - {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-${item.color} rounded-full border-4 border-white`}></div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-${item.color} rounded-full border-4 border-white`}></div>
                      <div className="w-1/2 pl-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg border border-border">
                          <h3 className={`text-xl font-serif font-bold mb-2 text-${item.color}`}>
                            {item.year} - {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
