import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Constellation = () => {
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  // Sample constellation data - you can add your own photos here
  const constellationStars = [
    { id: 1, x: 20, y: 30, memory: "Our first date at the cafe", image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400" },
    { id: 2, x: 45, y: 15, memory: "When we watched the sunrise together", image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400" },
    { id: 3, x: 65, y: 40, memory: "Our cozy movie night", image: "https://images.unsplash.com/photo-1489599510969-5c22bd2cdb76?w=400" },
    { id: 4, x: 30, y: 60, memory: "Dancing in the kitchen", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400" },
    { id: 5, x: 75, y: 70, memory: "Stargazing on the rooftop", image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400" },
  ];

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

        {/* Constellation Map */}
        <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl border border-border min-h-[600px] overflow-hidden">
          {/* Background cosmic effect */}
          <div className="absolute inset-0 bg-cosmic opacity-50" />
          
          {/* Stars */}
          {constellationStars.map((star) => (
            <button
              key={star.id}
              className={`absolute w-6 h-6 rounded-full transition-all duration-300 hover:scale-150 ${
                selectedStar === star.id 
                  ? 'bg-primary scale-150 aurora-glow' 
                  : 'bg-foreground/80 hover:bg-primary'
              }`}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: selectedStar === star.id ? 'var(--aurora-shimmer)' : 'var(--star-glow)',
              }}
              onClick={() => setSelectedStar(selectedStar === star.id ? null : star.id)}
            />
          ))}

          {/* Connecting lines between stars */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {constellationStars.map((star, index) => {
              const nextStar = constellationStars[index + 1];
              if (!nextStar) return null;
              
              return (
                <line
                  key={`line-${star.id}`}
                  x1={`${star.x}%`}
                  y1={`${star.y}%`}
                  x2={`${nextStar.x}%`}
                  y2={`${nextStar.y}%`}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  opacity="0.3"
                />
              );
            })}
          </svg>
        </div>

        {/* Memory Display */}
        {selectedStar && (
          <Card className="mt-8 p-6 bg-card/80 backdrop-blur-sm border-primary/20">
            {(() => {
              const star = constellationStars.find(s => s.id === selectedStar);
              return star ? (
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <img 
                    src={star.image} 
                    alt={star.memory}
                    className="w-full md:w-64 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="aurora-text text-2xl font-semibold mb-3">
                      {star.memory}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This moment is forever captured in our constellation of memories. 
                      Each star represents a special time we've shared together, 
                      creating our own unique map across the universe of love.
                    </p>
                  </div>
                </div>
              ) : null;
            })()}
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