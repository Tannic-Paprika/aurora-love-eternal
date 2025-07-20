import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface BackgroundStar {
  id: number;
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleDelay: number;
}

interface ConstellationStar {
  id: number;
  x: number;
  y: number;
  constellationId: number;
}

interface Constellation {
  id: number;
  name: string;
  stars: ConstellationStar[];
  connections: Array<[number, number]>;
  memory: string;
  // Replace with your Google Drive image URLs (make sure they're publicly accessible)
  image: string;
}

const Constellation = () => {
  const [selectedConstellation, setSelectedConstellation] = useState<number | null>(null);
  const [backgroundStars, setBackgroundStars] = useState<BackgroundStar[]>([]);

  // Generate realistic starry sky
  useEffect(() => {
    const generateStars = () => {
      const stars: BackgroundStar[] = [];
      const starCount = 300; // Many more stars for realistic sky

      for (let i = 0; i < starCount; i++) {
        stars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5, // Varied star sizes
          brightness: Math.random() * 0.8 + 0.2, // Varied brightness
          twinkleDelay: Math.random() * 3,
        });
      }
      setBackgroundStars(stars);
    };

    generateStars();
  }, []);

  // Single large constellation spanning across the sky
  // Replace Google Drive URL with your actual shared image URL
  const constellation: Constellation = {
    id: 1,
    name: "Our Love Constellation",
    memory: "Every star tells our story, connected across the infinite sky of our love",
    image: "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_FILE_ID", // Replace with your Google Drive file ID
    stars: [
      // Creating a large, beautiful constellation pattern
      { id: 1, x: 25, y: 20, constellationId: 1 },   // Top left
      { id: 2, x: 35, y: 15, constellationId: 1 },   // Top center
      { id: 3, x: 50, y: 18, constellationId: 1 },   // Top right
      { id: 4, x: 65, y: 25, constellationId: 1 },   // Right
      { id: 5, x: 70, y: 40, constellationId: 1 },   // Right center
      { id: 6, x: 75, y: 55, constellationId: 1 },   // Bottom right
      { id: 7, x: 60, y: 70, constellationId: 1 },   // Bottom right
      { id: 8, x: 45, y: 75, constellationId: 1 },   // Bottom center
      { id: 9, x: 30, y: 70, constellationId: 1 },   // Bottom left
      { id: 10, x: 20, y: 55, constellationId: 1 },  // Left bottom
      { id: 11, x: 15, y: 40, constellationId: 1 },  // Left center
      { id: 12, x: 40, y: 35, constellationId: 1 },  // Center
      { id: 13, x: 55, y: 45, constellationId: 1 },  // Center right
      { id: 14, x: 35, y: 50, constellationId: 1 },  // Center left
    ],
    connections: [
      // Creating a beautiful interconnected pattern
      [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 1], // Outer ring
      [2, 12], [4, 13], [8, 12], [10, 14], // Inner connections
      [12, 13], [13, 14], [14, 12], // Inner triangle
      [1, 12], [3, 13], [7, 12], [9, 14], // Spokes
    ],
  };

  const allConstellationStars = constellation.stars;

  return (
    <div className="min-h-screen bg-space pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="aurora-text text-4xl font-bold mb-2">Constellation Time Travel</h1>
            <p className="text-muted-foreground">Click on the stars to explore our memories across time</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Aurora</span>
            </Button>
          </Link>
        </div>

        {/* Nordic Starry Sky */}
        <div className="relative bg-space rounded-2xl border border-border min-h-[700px] overflow-hidden">
          {/* Background cosmic effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-space via-cosmic to-space" />
          
          {/* Background Stars - Creating realistic nordic sky */}
          {backgroundStars.map((star) => (
            <div
              key={`bg-star-${star.id}`}
              className="absolute rounded-full bg-foreground/60 pointer-events-none animate-pulse"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.brightness,
                animationDelay: `${star.twinkleDelay}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 ${star.size * 2}px hsl(var(--foreground) / ${star.brightness * 0.3})`,
              }}
            />
          ))}

          {/* Constellation Stars - Clickable and highlighted */}
          {allConstellationStars.map((star) => {
            const isSelected = selectedConstellation === constellation.id;
            
            return (
              <button
                key={`constellation-star-${star.id}`}
                className={`absolute rounded-full transition-all duration-300 hover:scale-150 z-10 ${
                  isSelected 
                    ? 'bg-primary scale-125 aurora-glow' 
                    : 'bg-primary/80 hover:bg-primary'
                }`}
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: '8px',
                  height: '8px',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: isSelected 
                    ? '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)' 
                    : '0 0 10px hsl(var(--primary) / 0.6)',
                }}
                onClick={() => setSelectedConstellation(
                  selectedConstellation === constellation.id ? null : constellation.id
                )}
                title={constellation.name}
              />
            );
          })}

          {/* Constellation Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
            {constellation.connections.map(([startId, endId], index) => {
              const isSelected = selectedConstellation === constellation.id;
              const startStar = constellation.stars.find(s => s.id === startId);
              const endStar = constellation.stars.find(s => s.id === endId);
              
              if (!startStar || !endStar) return null;
              
              return (
                <line
                  key={`line-${constellation.id}-${index}`}
                  x1={`${startStar.x}%`}
                  y1={`${startStar.y}%`}
                  x2={`${endStar.x}%`}
                  y2={`${endStar.y}%`}
                  stroke="hsl(var(--primary))"
                  strokeWidth={isSelected ? "2" : "1"}
                  opacity={isSelected ? "0.8" : "0.3"}
                  className="transition-all duration-300"
                  style={{
                    filter: isSelected ? 'drop-shadow(0 0 8px hsl(var(--primary) / 0.6))' : 'none'
                  }}
                />
              );
            })}
          </svg>

          {/* Constellation Label */}
          <div
            className={`absolute pointer-events-none transition-all duration-300 ${
              selectedConstellation === constellation.id ? 'opacity-100 scale-110' : 'opacity-60'
            }`}
            style={{
              left: `${constellation.stars.reduce((sum, star) => sum + star.x, 0) / constellation.stars.length}%`,
              top: `${constellation.stars.reduce((sum, star) => sum + star.y, 0) / constellation.stars.length - 8}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span className={`text-sm font-semibold aurora-text ${
              selectedConstellation === constellation.id ? 'text-primary' : 'text-foreground/80'
            }`}>
              {constellation.name}
            </span>
          </div>
        </div>

        {/* Memory Display */}
        {selectedConstellation && (
          <Card className="mt-8 p-6 bg-card/80 backdrop-blur-sm border-primary/20">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img 
                src={constellation.image} 
                alt={constellation.memory}
                className="w-full md:w-64 h-48 object-cover rounded-lg"
                onError={(e) => {
                  // Fallback if Google Drive image fails
                  e.currentTarget.src = "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400";
                }}
              />
              <div className="flex-1">
                <h3 className="aurora-text text-2xl font-semibold mb-3">
                  {constellation.name}
                </h3>
                <p className="text-lg text-foreground mb-3">
                  {constellation.memory}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This constellation holds a special place in our heart, forever etched 
                  among the nordic stars that witnessed our love story unfold.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Instructions */}
        <div className="text-center mt-8 text-muted-foreground">
          <p>✨ Each star holds a precious memory of us together ✨</p>
        </div>
      </div>
    </div>
  );
};

export default Constellation;