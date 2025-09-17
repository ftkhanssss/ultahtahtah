import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LightboxData {
  src: string;
  alt: string;
  caption: string;
}

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageData, setImageData] = useState<LightboxData | null>(null);

  useEffect(() => {
    const handleOpenLightbox = (event: CustomEvent<LightboxData>) => {
      setImageData(event.detail);
      setIsOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('openLightbox', handleOpenLightbox as EventListener);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('openLightbox', handleOpenLightbox as EventListener);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && imageData && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
            onClick={closeLightbox}
            data-testid="lightbox-close"
          >
            <X size={32} />
          </button>
          
          <motion.div
            className="max-w-5xl max-h-[90vh] relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageData.src}
              alt={imageData.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              data-testid="lightbox-image"
            />
            
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-white text-lg font-semibold text-center">
                {imageData.caption}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
