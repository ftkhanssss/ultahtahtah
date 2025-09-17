import { motion } from "framer-motion";
import gbr1 from "@/gbr/gbr1.jpg";
import gbr2 from "@/gbr/gbr2.jpg";
import gbr3 from "@/gbr/gbr3.jpg";
import gbr4 from "@/gbr/gbr4.jpg";
import gbr5 from "@/gbr/gbr5.jpg";
import gbr6 from "@/gbr/gbr6.jpg";

const photos = [
  {
    src: gbr1,
    alt: "Our sweet memories together",
    caption: "Our First Date 💕"
  },
  {
    src: gbr2,
    alt: "Happy moments with hearts", 
    caption: "Beach Getaway 🌅"
  },
  {
    src: gbr3,
    alt: "Cozy times together",
    caption: "Anniversary Night ✨"
  },
  {
    src: gbr4,
    alt: "Special graduation moment",
    caption: "Adventure Together 🏔️"
  },
  {
    src: gbr5,
    alt: "Fun with playful masks",
    caption: "Spring Picnic 🌸"
  },
  {
    src: gbr6,
    alt: "Cute eggplant costume fun",
    caption: "Coffee & Conversations ☕"
  }
];

export default function PhotoGallery() {
  const openLightbox = (photo: typeof photos[0]) => {
    const event = new CustomEvent('openLightbox', { detail: photo });
    window.dispatchEvent(event);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="gallery-title"
        >
          Our Memory Lane
        </motion.h2>
        
        <div className="photo-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openLightbox(photo)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              data-testid={`gallery-photo-${index}`}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-64 object-cover" 
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white p-4 font-semibold">{photo.caption}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
