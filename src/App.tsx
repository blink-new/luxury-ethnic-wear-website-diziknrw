import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, Heart, User, Star, ChevronRight, Play, Award, Truck, Shield, RefreshCw } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900 font-geist">Ethereal Ethnic</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-12">
              <a href="#home" className="text-lg text-gray-900 hover:text-indigo-600 transition-colors font-medium">Home</a>
              <a href="#collections" className="text-lg text-gray-900 hover:text-indigo-600 transition-colors font-medium">Collections</a>
              <a href="#heritage" className="text-lg text-gray-900 hover:text-indigo-600 transition-colors font-medium">Heritage</a>
              <a href="#jewelry" className="text-lg text-gray-900 hover:text-indigo-600 transition-colors font-medium">Jewelry</a>
              <a href="#testimonials" className="text-lg text-gray-900 hover:text-indigo-600 transition-colors font-medium">Reviews</a>
              <a href="#about" className="text-lg text-gray-900 hover:text-indigo-600 transition-colors font-medium">About</a>
            </nav>

            <div className="flex items-center space-x-6">
              <Search className="h-6 w-6 text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors" />
              <Heart className="h-6 w-6 text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingBag className="h-6 w-6 text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </div>
              <User className="h-6 w-6 text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors" />
              
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-lg text-gray-900 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#collections" className="block text-lg text-gray-900 hover:text-indigo-600 transition-colors">Collections</a>
              <a href="#heritage" className="block text-lg text-gray-900 hover:text-indigo-600 transition-colors">Heritage</a>
              <a href="#jewelry" className="block text-lg text-gray-900 hover:text-indigo-600 transition-colors">Jewelry</a>
              <a href="#testimonials" className="block text-lg text-gray-900 hover:text-indigo-600 transition-colors">Reviews</a>
              <a href="#about" className="block text-lg text-gray-900 hover:text-indigo-600 transition-colors">About</a>
            </div>
          </div>
        )}
      </header>

      {/* Section 1: Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1597511133277-462c9beb4cec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldGhuaWMlMjB3ZWFyJTIwc2FyZWUlMjBsZWhlbmdhJTIwdHJhZGl0aW9uYWwlMjBpbmRpYW4lMjBmYXNoaW9ufGVufDB8MHx8fDE3NTM0NDMzNzh8MA&ixlib=rb-4.1.0&q=85"
            alt="Luxury Ethnic Wear"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 font-geist leading-tight">
            Timeless
            <span className="block text-indigo-400">Elegance</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Discover the finest collection of luxury ethnic wear, where tradition meets contemporary sophistication
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Explore Collections
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 flex items-center gap-3">
              <Play className="h-6 w-6" />
              Watch Story
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Collections */}
      <section id="collections" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-6 font-geist">Curated Collections</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each piece tells a story of heritage, crafted with meticulous attention to detail and timeless appeal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Bridal Lehengas",
                description: "Exquisite bridal wear for your special day",
                image: "https://images.unsplash.com/photo-1697347815999-d4db9977ab0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBldGhuaWMlMjB3ZWFyJTIwc2FyZWUlMjBsZWhlbmdhJTIwdHJhZGl0aW9uYWwlMjBpbmRpYW4lMjBmYXNoaW9ufGVufDB8MHx8fDE3NTM0NDMzNzh8MA&ixlib=rb-4.1.0&q=85",
                price: "From ₹85,000"
              },
              {
                title: "Designer Sarees",
                description: "Contemporary sarees with traditional charm",
                image: "https://images.unsplash.com/photo-1587027512224-74fa1f061e45?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBldGhuaWMlMjB3ZWFyJTIwc2FyZWUlMjBsZWhlbmdhJTIwdHJhZGl0aW9uYWwlMjBpbmRpYW4lMjBmYXNoaW9ufGVufDB8MHx8fDE3NTM0NDMzNzh8MA&ixlib=rb-4.1.0&q=85",
                price: "From ₹45,000"
              },
              {
                title: "Festival Collection",
                description: "Vibrant pieces for celebrations",
                image: "https://images.unsplash.com/photo-1651511133191-82e8fb41ba46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBldGhuaWMlMjB3ZWFyJTIwc2FyZWUlMjBsZWhlbmdhJTIwdHJhZGl0aW9uYWwlMjBpbmRpYW4lMjBmYXNoaW9ufGVufDB8MHx8fDE3NTM0NDMzNzh8MA&ixlib=rb-4.1.0&q=85",
                price: "From ₹35,000"
              }
            ].map((collection, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/5]">
                  <img 
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-lg font-semibold mb-2">{collection.price}</p>
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                      View Collection
                    </button>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3 font-geist">{collection.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">{collection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Heritage & Craftsmanship */}
      <section id="heritage" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-8 font-geist leading-tight">
                Heritage
                <span className="block text-indigo-600">Craftsmanship</span>
              </h2>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
                Every piece in our collection is a testament to centuries-old traditions, meticulously handcrafted by master artisans who have inherited their skills through generations.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Award, title: "Master Artisans", desc: "Skilled craftspeople with decades of experience" },
                  { icon: Shield, title: "Authentic Materials", desc: "Premium fabrics and genuine embellishments" },
                  { icon: RefreshCw, title: "Timeless Design", desc: "Classic patterns with contemporary appeal" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-2xl">
                      <feature.icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-xl text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1628532730171-5428e3e0f0f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjBldGhuaWMlMjB3ZWFyJTIwc2FyZWUlMjBsZWhlbmdhJTIwdHJhZGl0aW9uYWwlMjBpbmRpYW4lMjBmYXNoaW9ufGVufDB8MHx8fDE3NTM0NDMzNzh8MA&ixlib=rb-4.1.0&q=85"
                alt="Heritage Craftsmanship"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-2xl">
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-xl">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Luxury Jewelry Collection */}
      <section id="jewelry" className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6 font-geist">Exquisite Jewelry</h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete your ethnic ensemble with our stunning collection of traditional jewelry, crafted with precious metals and gemstones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Kundan Sets",
                image: "https://images.unsplash.com/photo-1653227908311-c94d2f037674?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBqZXdlbHJ5JTIwdHJhZGl0aW9uYWwlMjBhY2Nlc3NvcmllcyUyMGV0aG5pYyUyMG9ybmFtZW50c3xlbnwwfDB8fHwxNzUzNDQzMzgxfDA&ixlib=rb-4.1.0&q=85",
                price: "₹25,000"
              },
              {
                title: "Temple Jewelry",
                image: "https://images.unsplash.com/photo-1653227907864-560dce4c252d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBqZXdlbHJ5JTIwdHJhZGl0aW9uYWwlMjBhY2Nlc3NvcmllcyUyMGV0aG5pYyUyMG9ybmFtZW50c3xlbnwwfDB8fHwxNzUzNDQzMzgxfDA&ixlib=rb-4.1.0&q=85",
                price: "₹35,000"
              },
              {
                title: "Polki Necklaces",
                image: "https://images.unsplash.com/photo-1667013878782-601f4150189c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBqZXdlbHJ5JTIwdHJhZGl0aW9uYWwlMjBhY2Nlc3NvcmllcyUyMGV0aG5pYyUyMG9ybmFtZW50c3xlbnwwfDB8fHwxNzUzNDQzMzgxfDA&ixlib=rb-4.1.0&q=85",
                price: "₹45,000"
              },
              {
                title: "Antique Bangles",
                image: "https://images.unsplash.com/photo-1676486274646-e5ab1b20957a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjBqZXdlbHJ5JTIwdHJhZGl0aW9uYWwlMjBhY2Nlc3NvcmllcyUyMGV0aG5pYyUyMG9ybmFtZW50c3xlbnwwfDB8fHwxNzUzNDQzMzgxfDA&ixlib=rb-4.1.0&q=85",
                price: "₹18,000"
              }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-geist">{item.title}</h3>
                <p className="text-xl text-indigo-400 font-semibold">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105">
              View All Jewelry
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Customer Testimonials */}
      <section id="testimonials" className="py-32 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-6 font-geist">What Our Clients Say</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover why thousands of customers trust us for their most special occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Priya Sharma",
                role: "Bride",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                rating: 5,
                text: "The bridal lehenga I purchased was absolutely stunning. The craftsmanship and attention to detail exceeded all my expectations. I felt like a princess on my wedding day!"
              },
              {
                name: "Anita Patel",
                role: "Fashion Enthusiast",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                rating: 5,
                text: "Ethereal Ethnic has become my go-to destination for ethnic wear. Their collection is unmatched, and the quality is consistently exceptional. Highly recommended!"
              },
              {
                name: "Meera Gupta",
                role: "Designer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                rating: 5,
                text: "As a fashion designer myself, I appreciate the artistry and skill that goes into each piece. The traditional techniques combined with modern aesthetics are truly remarkable."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: About & Services */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-8 font-geist leading-tight">
                About
                <span className="block text-indigo-600">Ethereal Ethnic</span>
              </h2>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
                Founded with a passion for preserving traditional craftsmanship while embracing contemporary elegance, Ethereal Ethnic has been at the forefront of luxury ethnic fashion for over five decades.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our commitment to excellence, authentic materials, and exceptional customer service has made us the preferred choice for discerning customers worldwide.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 flex items-center gap-3">
                Learn More
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1610047879156-17b33d3d2c10?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjBldGhuaWMlMjB3ZWFyJTIwc2FyZWUlMjBsZWhlbmdhJTIwdHJhZGl0aW9uYWwlMjBpbmRpYW4lMjBmYXNoaW9ufGVufDB8MHx8fDE3NTM0NDMzNzh8MA&ixlib=rb-4.1.0&q=85"
                alt="About Us"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Truck,
                title: "Free Worldwide Shipping",
                description: "Complimentary shipping on all orders above ₹50,000"
              },
              {
                icon: Shield,
                title: "Authenticity Guarantee",
                description: "100% authentic products with certificate of authenticity"
              },
              {
                icon: RefreshCw,
                title: "Easy Returns",
                description: "30-day hassle-free return policy for your peace of mind"
              }
            ].map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-indigo-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                  <service.icon className="h-10 w-10 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-geist">{service.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6 font-geist">Stay Updated</h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Subscribe to our newsletter for exclusive collections, styling tips, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-8 py-4 rounded-2xl text-gray-900 text-xl focus:outline-none focus:ring-4 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-geist">Ethereal Ethnic</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Luxury ethnic wear that celebrates tradition with contemporary elegance.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Collections</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Bridal Wear</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Designer Sarees</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Festival Collection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jewelry</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Customer Care</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <p>+91 98765 43210</p>
                <p>info@etherealethnic.com</p>
                <p>Mumbai, Maharashtra<br />India</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ethereal Ethnic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;