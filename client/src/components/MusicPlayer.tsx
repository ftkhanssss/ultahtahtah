import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

const celebrationSongs = [
  {
    title: "All of Me",
    artist: "John Legend",
    src: "https://www.soundjay.com/misc/sounds/magical_forest_sounds.mp3", // Demo track
    duration: "4:05"
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran", 
    src: "https://www.soundjay.com/misc/sounds/magical_forest_sounds.mp3", // Demo track
    duration: "4:23"
  },
  {
    title: "Happy Birthday",
    artist: "Celebration Mix",
    src: "https://www.soundjay.com/misc/sounds/magical_forest_sounds.mp3", // Demo track
    duration: "3:12"
  }
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = celebrationSongs[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setCurrentSongIndex((prev) => (prev + 1) % celebrationSongs.length);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <audio
        ref={audioRef}
        src={currentSong.src}
        onLoadStart={() => {
          if (isPlaying && audioRef.current) {
            audioRef.current.play();
          }
        }}
      />
      
      {/* Floating Music Player */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mb-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: "320px" }}
            >
              {/* Song Info */}
              <div className="p-4 bg-gradient-to-r from-primary to-secondary">
                <div className="text-center text-white">
                  <div className="text-lg font-serif font-bold">{currentSong.title}</div>
                  <div className="text-sm opacity-90">{currentSong.artist}</div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-white/80 mb-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-1">
                    <div 
                      className="bg-white rounded-full h-1 transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setCurrentSongIndex((prev) => (prev - 1 + celebrationSongs.length) % celebrationSongs.length)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    data-testid="music-prev"
                  >
                    ⏮️
                  </button>
                  
                  <button
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                    data-testid="music-play-pause"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  
                  <button
                    onClick={() => setCurrentSongIndex((prev) => (prev + 1) % celebrationSongs.length)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    data-testid="music-next"
                  >
                    ⏭️
                  </button>
                </div>

                {/* Volume Control */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleMute}
                    className="p-1 rounded hover:bg-gray-100 transition-colors"
                    data-testid="music-mute"
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    data-testid="volume-slider"
                  />
                  <span className="text-xs text-muted-foreground w-8">
                    {Math.round((isMuted ? 0 : volume) * 100)}%
                  </span>
                </div>

                {/* Playlist */}
                <div className="mt-4 border-t border-gray-200 pt-3">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Celebration Playlist</div>
                  <div className="space-y-1">
                    {celebrationSongs.map((song, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSongIndex(index)}
                        className={`w-full text-left p-2 rounded text-xs hover:bg-gray-100 transition-colors ${
                          index === currentSongIndex ? 'bg-primary/10 text-primary' : 'text-gray-600'
                        }`}
                        data-testid={`playlist-song-${index}`}
                      >
                        <div className="font-medium">{song.title}</div>
                        <div className="text-xs opacity-70">{song.artist} • {song.duration}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-3xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          data-testid="music-toggle"
        >
          <Music size={24} />
          {isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/50"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          )}
        </motion.button>
        
        {/* Floating Note Animation */}
        {isPlaying && (
          <motion.div
            className="absolute -top-2 -right-2 text-xl"
            animate={{ 
              y: [-10, -20, -10],
              rotate: [-10, 10, -10],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🎵
          </motion.div>
        )}
      </motion.div>
    </>
  );
}