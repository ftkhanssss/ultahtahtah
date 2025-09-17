import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import PhotoGallery from "@/components/PhotoGallery";
import BirthdayCake from "@/components/BirthdayCake";
import LoveNotes from "@/components/LoveNotes";
import CountdownTimer from "@/components/CountdownTimer";
import FloatingHearts from "@/components/FloatingHearts";
import Lightbox from "@/components/Lightbox";

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <FloatingHearts />
      <Navigation />
      <HeroSection />
      <Timeline />
      <PhotoGallery />
      <BirthdayCake />
      <LoveNotes />
      <CountdownTimer />
      
      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <span className="text-2xl animate-pulse-heart">💕</span>
            <span className="text-2xl animate-bounce-slow">🎂</span>
            <span className="text-2xl animate-float">✨</span>
            <span className="text-2xl animate-pulse-heart">🌟</span>
          </div>
          <p className="text-muted-foreground">Made with love for our special celebration</p>
          <p className="text-sm text-muted-foreground mt-2">Happy 22nd Birthday & 4th Anniversary! 💖</p>
        </div>
      </footer>

      <Lightbox />
    </div>
  );
}
