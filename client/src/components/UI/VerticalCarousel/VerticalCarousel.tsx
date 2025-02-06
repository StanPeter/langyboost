import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface Level {
  id: number;
  image: string;
  title: string;
  description?: string[];
  isActive?: boolean;
}

interface VerticalCarouselProps {
  levels?: Level[];
  activeLevel?: number;
}

const mockData: Level[] = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_owPD8QLPDhMyyuAFPDlEeQOwzrWcDUBhQ&s',
    title: 'Level 1',
    description: ['Learn 50 most used words combined in phrases', 'Introduction into German language and culture', 'Contains numbers and colors'],
    isActive: true,
  },
  {
    id: 2,
    image: 'https://c7.alamy.com/comp/MR0G54/random-pictures-MR0G54.jpg',
    title: 'Level 2',
    description: ['Learn 50 most used words combined in phrases', 'Introduction into German language and culture', 'Contains numbers and colors'],
    isActive: false,
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_owPD8QLPDhMyyuAFPDlEeQOwzrWcDUBhQ&s',
    title: 'Level 3',
    description: ['Learn 50 most used words combined in phrases', 'Introduction into German language and culture', 'Contains numbers and colors'],
    isActive: false,
  },
  {
    id: 4,
    image: 'https://c7.alamy.com/comp/MR0G53/random-pictures-MR0G53.jpg',
    title: 'Level 4',
    description: ['Learn 50 most used words combined in phrases', 'Introduction into German language and culture', 'Contains numbers and colors'],
    isActive: false,
  },
  {
    id: 5,
    image: 'https://c7.alamy.com/comp/MR0G53/random-pictures-MR0G53.jpg',
    title: 'Level 5',
    description: ['Learn 50 most used words combined in phrases', 'Introduction into German language and culture', 'Contains numbers and colors'],
    isActive: false,
  },
  {
    id: 6,
    image: 'https://c7.alamy.com/comp/MR0G79/random-pictures-MR0G79.jpg',
    title: 'Level 6',
    description: ['Learn 50 most used words combined in phrases', 'Introduction into German language and culture', 'Contains numbers and colors'],
    isActive: false,
  },
  {
    id: 7,
    image: 'https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png?format=2500w',
    title: 'Level 7',
    description: ['Learn 50 most used words combined in phrases', 'Introduction into German language and culture', 'Contains numbers and colors'],
    isActive: false,
  },
  {
    id: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_owPD8QLPDhMyyuAFPDlEeQOwzrWcDUBhQ&s',
    title: 'Level 8',
    description: ['Learn 50 most used words combined in phrases', 'Introduction into German language and culture', 'Contains numbers and colors'],
    isActive: false,
  },
];

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ levels = mockData, activeLevel = 1 }) => {
  const [currentLevel, setCurrentLevel] = useState(activeLevel);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse wheel scrolling
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setCurrentLevel((prev) => (prev < levels.length ? prev + 1 : prev));
      } else {
        setCurrentLevel((prev) => (prev > 1 ? prev - 1 : prev));
      }
    };

    const container = containerRef.current;
    container?.addEventListener('wheel', handleScroll);

    return () => {
      container?.removeEventListener('wheel', handleScroll);
    };
  }, [levels.length]);

  const handleUpClick = () => {
    setCurrentLevel((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleDownClick = () => {
    setCurrentLevel((prev) => (prev < levels.length ? prev + 1 : prev));
  };

  return (
    <div ref={containerRef} className="relative h-[600px] w-full overflow-hidden bg-gray-100">
      <AnimatePresence>
        {levels.map((level, index) => {
          const position = index + 1 - currentLevel;
          const scale = position === 0 ? 1 : 0.7; 
          const opacity = Math.abs(position) <= 1 ? 1 : 0.5;
          const zIndex = 1;

          return (
            <motion.div
              key={level.id}
              className={`absolute w-full transition-all duration-500`}
              style={{
                transform: `translateY(${position * 50}%) scale(${scale})`,
                opacity,
                zIndex,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={level.image} 
                  alt={`Level ${level.id}`}
                  className="w-full h-auto rounded-lg"
                />
                {level.isActive && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-white text-xl font-bold">Level {level.id}</h3>
                    {level.description?.map((desc, index) => (
                      <p key={index} className="text-white text-sm mt-1">
                        • {desc}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-2 z-20">
        <button onClick={handleUpClick} className="p-2 bg-gray-200 rounded-full shadow-md">
          ↑
        </button>
        <button onClick={handleDownClick} className="p-2 bg-gray-200 rounded-full shadow-md">
          ↓
        </button>
      </div>
    </div>
  );
};

export default VerticalCarousel; 