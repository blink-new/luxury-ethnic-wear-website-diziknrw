import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Heart, ShoppingBag, Search, Menu, Star, ArrowRight } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const featuredProducts = [
    {
      id: 1,
      name: "Royal Silk Saree",
      price: "$299",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=600&fit=crop",
      category: "Sarees",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Embroidered Lehenga",
      price: "$599",
      originalPrice: "$799",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=600&fit=crop",
      category: "Lehengas",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Designer Anarkali",
      price: "$449",
      originalPrice: "$599",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop",
      category: "Anarkalis",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Banarasi Silk Dupatta",
      price: "$149",
      originalPrice: "$199",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
      category: "Dupattas",
      rating: 4.6,
      reviews: 78
    }
  ]

  const collections = [
    {
      name: "Wedding Collection",
      description: "Exquisite bridal wear for your special day",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=400&fit=crop",
      itemCount: "120+ pieces"
    },
    {
      name: "Festival Specials",
      description: "Celebrate traditions with vibrant colors",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=400&fit=crop",
      itemCount: "85+ pieces"
    },
    {
      name: "Contemporary Fusion",
      description: "Modern designs with traditional essence",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
      itemCount: "95+ pieces"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-primary">
                Ethereal
              </h1>
              <span className="ml-2 text-sm text-accent font-medium">ETHNIC</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Collections</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Sarees</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Lehengas</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Anarkalis</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">About</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-primary font-medium">Collections</a>
              <a href="#" className="block text-gray-700 hover:text-primary font-medium">Sarees</a>
              <a href="#" className="block text-gray-700 hover:text-primary font-medium">Lehengas</a>
              <a href="#" className="block text-gray-700 hover:text-primary font-medium">Anarkalis</a>
              <a href="#" className="block text-gray-700 hover:text-primary font-medium">About</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Timeless
            <span className="block text-accent">Elegance</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light animate-slide-up">
            Discover our curated collection of luxury ethnic wear, 
            where tradition meets contemporary sophistication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg">
              Explore Collections
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg">
              View Lookbook
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-primary mb-4">
              Curated Collections
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each piece tells a story of heritage, craftsmanship, and timeless beauty
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge variant="secondary" className="mb-2 bg-accent text-white">
                      {collection.itemCount}
                    </Badge>
                    <h4 className="text-xl font-serif font-bold">{collection.name}</h4>
                    <p className="text-sm opacity-90">{collection.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-primary mb-4">
              Featured Pieces
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked selections from our master artisans
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute top-4 left-4 bg-accent text-white">
                    {product.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                      <span className="ml-1 text-sm text-gray-400">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h4 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-serif font-bold mb-4">
            Stay Connected
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Be the first to know about new collections and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-serif font-bold mb-4">Ethereal Ethnic</h4>
              <p className="text-gray-400 mb-4">
                Celebrating the artistry of traditional craftsmanship with contemporary elegance.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Collections</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sarees</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lehengas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Anarkalis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dupattas</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Care Instructions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ethereal Ethnic. All rights reserved. Crafted with love for tradition.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App