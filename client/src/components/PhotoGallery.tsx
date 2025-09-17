import { motion } from "framer-motion";

const photos = [
  {
    src: ,
    alt: "Romantic dinner date",
    caption: "Our First Date 💕"
  },
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Beach sunset together", 
    caption: "Beach Getaway 🌅"
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Anniversary celebration",
    caption: "Anniversary Night ✨"
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Mountain hiking adventure",
    caption: "Adventure Together 🏔️"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Spring picnic date",
    caption: "Spring Picnic 🌸"
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Coffee shop date",
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
