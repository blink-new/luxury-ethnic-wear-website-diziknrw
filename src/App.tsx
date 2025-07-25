import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, Heart, Star, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-display font-bold text-primary tracking-wide">ETHEREAL</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12">
              <a href="#" className="text-gray-900 hover:text-accent transition-colors font-medium text-lg">Collections</a>
              <a href="#" className="text-gray-900 hover:text-accent transition-colors font-medium text-lg">New Arrivals</a>
              <a href="#" className="text-gray-900 hover:text-accent transition-colors font-medium text-lg">About</a>
              <a href="#" className="text-gray-900 hover:text-accent transition-colors font-medium text-lg">Contact</a>
            </nav>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="p-2 text-gray-700 hover:text-accent transition-colors">
                <Search className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-700 hover:text-accent transition-colors">
                <Heart className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-700 hover:text-accent transition-colors relative">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-accent transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-6 space-y-6">
              <a href="#" className="block text-gray-900 hover:text-accent transition-colors font-medium text-lg">Collections</a>
              <a href="#" className="block text-gray-900 hover:text-accent transition-colors font-medium text-lg">New Arrivals</a>
              <a href="#" className="block text-gray-900 hover:text-accent transition-colors font-medium text-lg">About</a>
              <a href="#" className="block text-gray-900 hover:text-accent transition-colors font-medium text-lg">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557938458-746fdc207538?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwc3R5bGV8ZW58MHwwfHx8MTc1MzQ0MzAwOXww&ixlib=rb-4.1.0&q=85')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight tracking-wide">
            Modern
            <span className="block text-accent">Elegance</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Contemporary ethnic wear that bridges tradition and innovation
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 tracking-wide">
              Curated Collections
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully selected pieces that blend contemporary design with cultural heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contemporary Fusion */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1655678204995-0e1eb3d2fdbc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBldGhuaWMlMjB3ZWFyJTIwZmFzaGlvbiUyMGNvbnRlbXBvcmFyeSUyMHRyYWRpdGlvbmFsJTIwY2xvdGhpbmd8ZW58MHwwfHx8MTc1MzQ0MzAwNXww&ixlib=rb-4.1.0&q=85"
                  alt="Contemporary Fusion"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-display font-bold mb-3">Contemporary Fusion</h3>
                  <p className="text-lg opacity-90">Modern silhouettes meet traditional craftsmanship</p>
                </div>
              </div>
            </div>

            {/* Minimalist Ethnic */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1505464069456-1145548d5c83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxjb250ZW1wb3JhcnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwc3R5bGV8ZW58MHwwfHx8MTc1MzQ0MzAwOXww&ixlib=rb-4.1.0&q=85"
                  alt="Minimalist Ethnic"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-display font-bold mb-3">Minimalist Ethnic</h3>
                  <p className="text-lg opacity-90">Clean lines with cultural essence</p>
                </div>
              </div>
            </div>

            {/* Statement Pieces */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1659345246648-a5d3bf5aec23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBldGhuaWMlMjB3ZWFyJTIwZmFzaGlvbiUyMGNvbnRlbXBvcmFyeSUyMHRyYWRpdGlvbmFsJTIwY2xvdGhpbmd8ZW58MHwwfHx8MTc1MzQ0MzAwNXww&ixlib=rb-4.1.0&q=85"
                  alt="Statement Pieces"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-display font-bold mb-3">Statement Pieces</h3>
                  <p className="text-lg opacity-90">Bold designs for special occasions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 tracking-wide">
              New Arrivals
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Fresh designs that redefine contemporary ethnic fashion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Product 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="https://images.unsplash.com/flagged/photo-1553802922-e345434156e6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxjb250ZW1wb3JhcnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwc3R5bGV8ZW58MHwwfHx8MTc1MzQ0MzAwOXww&ixlib=rb-4.1.0&q=85"
                  alt="Modern Blazer Set"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-xl">Modern Blazer Set</h3>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">(24)</span>
                </div>
                <p className="text-2xl font-bold text-primary">$299</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1591116228990-036b37b07a09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxjb250ZW1wb3JhcnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwc3R5bGV8ZW58MHwwfHx8MTc1MzQ0MzAwOXww&ixlib=rb-4.1.0&q=85"
                  alt="Minimalist Ensemble"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-xl">Minimalist Ensemble</h3>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">(18)</span>
                </div>
                <p className="text-2xl font-bold text-primary">$189</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1685953851497-9b67b25f0ed7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw4fHxjb250ZW1wb3JhcnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwc3R5bGV8ZW58MHwwfHx8MTc1MzQ0MzAwOXww&ixlib=rb-4.1.0&q=85"
                  alt="Contemporary Skirt"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-xl">Contemporary Skirt</h3>
                <div className="flex items-center space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <Star className="h-4 w-4 text-gray-300" />
                  <span className="text-sm text-gray-500 ml-2">(12)</span>
                </div>
                <p className="text-2xl font-bold text-primary">$149</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1609561812031-24e3312230f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw3fHxjb250ZW1wb3JhcnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwc3R5bGV8ZW58MHwwfHx8MTc1MzQ0MzAwOXww&ixlib=rb-4.1.0&q=85"
                  alt="Modern Traditional"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-xl">Modern Traditional</h3>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">(31)</span>
                </div>
                <p className="text-2xl font-bold text-primary">$249</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-wide">
            Stay in Style
          </h2>
          <p className="text-2xl mb-12 opacity-90 leading-relaxed">
            Get exclusive access to new collections and special offers
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-8 py-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent text-lg rounded-l-lg sm:rounded-r-none rounded-r-lg"
            />
            <button className="bg-accent text-white px-10 py-5 font-semibold hover:bg-accent/90 transition-colors sm:ml-0 mt-4 sm:mt-0 text-lg rounded-r-lg sm:rounded-l-none rounded-l-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-display font-bold mb-6 tracking-wide">ETHEREAL</h3>
              <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
                Contemporary ethnic wear that celebrates cultural heritage through modern design and exceptional craftsmanship.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-7 w-7" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-7 w-7" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-7 w-7" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-xl">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Care Instructions</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold mb-6 text-xl">Customer Service</h4>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-10 text-center text-gray-400 text-lg">
            <p>&copy; 2024 Ethereal. All rights reserved. Crafted with passion for modern ethnic fashion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;