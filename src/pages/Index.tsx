import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import auroraHero from '@/assets/aurora-hero.jpg';
import StarField from '@/components/StarField';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${auroraHero})` }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="aurora-text text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Under the Aurora
            </h1>
            <div className="aurora-glow p-8 rounded-2xl bg-card/20 backdrop-blur-sm border border-primary/20">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-4">
                "In the dancing lights of the aurora borealis, I see our love story written across the sky—
                infinite, beautiful, and magical beyond words."
              </p>
              <div className="flex items-center justify-center space-x-2 text-accent">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-medium">Forever yours</span>
                <Heart className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link to="/constellation">
              <Button 
                className="w-full h-20 bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary-foreground backdrop-blur-sm group transition-all duration-300"
                variant="outline"
              >
                <div className="text-center">
                  <Sparkles className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium">Constellation</span>
                </div>
              </Button>
            </Link>

            <Link to="/store">
              <Button 
                className="w-full h-20 bg-accent/20 hover:bg-accent/30 border border-accent/40 text-accent-foreground backdrop-blur-sm group transition-all duration-300"
                variant="outline"
              >
                <div className="text-center">
                  <Heart className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium">Cookie Store</span>
                </div>
              </Button>
            </Link>

            <Link to="/organizer">
              <Button 
                className="w-full h-20 bg-secondary/20 hover:bg-secondary/30 border border-secondary/40 text-secondary-foreground backdrop-blur-sm group transition-all duration-300"
                variant="outline"
              >
                <div className="text-center">
                  <Heart className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium">LDR Organizer</span>
                </div>
              </Button>
            </Link>
          </div>

          {/* Romantic Quote */}
          <div className="mt-12 text-muted-foreground">
            <p className="text-lg">✨ A universe of love, just for us ✨</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
