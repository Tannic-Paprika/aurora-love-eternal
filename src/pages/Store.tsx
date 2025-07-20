import { ArrowLeft, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Store = () => {
  const products = [
    {
      id: 1,
      name: "Aurora Teddy Bear",
      price: "Priceless Love",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      description: "Soft and cuddly, just like our relationship"
    },
    {
      id: 2,
      name: "Constellation Necklace",
      price: "Stars Aligned",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
      description: "Wear our love story around your neck"
    },
    {
      id: 3,
      name: "Love Letters Kit",
      price: "Heartfelt Words",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
      description: "For all the sweet messages we share"
    },
    {
      id: 4,
      name: "Couple's Mug Set",
      price: "Morning Cuddles",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
      description: "Perfect for our coffee dates"
    },
    {
      id: 5,
      name: "Aurora Music Box",
      price: "Our Song",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      description: "Plays the melody of our hearts"
    },
    {
      id: 6,
      name: "Starlight Bracelet",
      price: "Eternal Promise",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400",
      description: "A promise that shines as bright as stars"
    }
  ];

  return (
    <div className="min-h-screen bg-space pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="aurora-text text-4xl font-bold mb-2">Cookie Store</h1>
            <p className="text-muted-foreground">Sweet gifts for my sweeter half</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Aurora</span>
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:aurora-glow">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="aurora-text font-bold">{product.price}</span>
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Wishlist
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Sweet Message */}
        <div className="text-center mt-12 p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border">
          <h2 className="aurora-text text-2xl font-bold mb-4">Everything here is made with love</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each item in our cookie store represents the sweetness you bring to my life. 
            While they might not be real purchases, the love behind each one is absolutely genuine. 
            You deserve all the beautiful things in the world, my love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Store;