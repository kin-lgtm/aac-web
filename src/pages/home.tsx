import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, MessageSquare, FileText, School } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: 'Greenhouse Construction',
      description: 'Expertly designed and built polyhouses and protected crop spaces.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800',
      bgColor: 'from-purple-600 to-purple-800',
      icon: <Leaf className="h-12 w-12" />,
      
    },
    {
      title: 'Consultation',
      description: 'Professional consultation to help you achieve your agricultural goals.',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800',
      bgColor: 'from-yellow-700 to-yellow-900',
      icon: <MessageSquare className="h-12 w-12" />,
    },
    {
      title: 'Agriculture Project Proposal Writing',
      description: 'Expertly crafted proposals and business plans to secure your agricultural funding.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      bgColor: 'from-red-800 to-red-950',
      icon: <FileText className="h-12 w-12" />,
    },
    {
      title: 'Trainings',
      description: 'Comprehensive training programs to advance your agricultural knowledge.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      bgColor: 'from-green-700 to-green-900',
      icon: <School className="h-12 w-12" />,
    },
  ];

  const projects = [
    {
      title: 'Organic Rice Cultivation Project',
      location: 'Ampara District',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800',
      impact: 'Increased yield by 35%',
    },
    {
      title: 'Tea Plantation Modernization',
      location: 'Nuwara Eliya',
      image: 'https://images.unsplash.com/photo-1564412048748-adc18f1c3b77?w=800',
      impact: 'Improved quality standards',
    },
    {
      title: 'Smart Irrigation System',
      location: 'Anuradhapura',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      impact: '40% water savings',
    },
  ];

  const testimonials = [
    {
      name: 'Sunil Perera',
      role: 'Rice Farmer',
      text: 'The consultancy helped me double my yield using sustainable practices. Highly recommended!',
    },
    {
      name: 'Lakshmi Fernando',
      role: 'Tea Estate Owner',
      text: 'Their expertise in modern farming techniques transformed our plantation operations.',
    },
  ];

  const blogPosts = [
    {
      title: 'Future of Smart Farming in Asia',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400',
      date: 'Oct 15, 2025',
      category: 'Technology',
    },
    {
      title: 'Organic Certification Guide',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400',
      date: 'Oct 10, 2025',
      category: 'Sustainability',
    },
    {
      title: 'Water Management Tips',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      date: 'Oct 5, 2025',
      category: 'Tips',
    },
  ];
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400',
      alt: 'Organic Farming',
      caption: 'Sustainable organic farming practices in action.',
    },
    {
      src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
      alt: 'Rice Fields',
      caption: 'Lush rice fields thriving with modern techniques.',
    },
    {
      src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400',
      alt: 'Farmer at Work',
      caption: 'Dedicated farmers cultivating the land.',
    },
    {
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      alt: 'Crop Harvest',
      caption: 'Harvesting crops with precision and care.',
    },
    {
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      alt: 'Crop Harvest',
      caption: 'Harvesting crops with precision and care.',
    },
    {
      src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400',
      alt: 'Organic Farming',
      caption: 'Sustainable organic farming practices in action.',
    },
    {
      src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
      alt: 'Rice Fields',
      caption: 'Lush rice fields thriving with modern techniques.',
    },
    {
      src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400',
      alt: 'Organic Farming',
      caption: 'Sustainable organic farming practices in action.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div>
      <section className="relative h-[calc(100vh-100px)] min-h-[600px] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero.avif"
            alt="Asian Agriculture"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-block border-t-2 border-b-2 border-white py-2 px-8">
                <p className="text-white text-sm md:text-base tracking-widest font-light uppercase">
                  - Asian Agriculture Consultancy -
                </p>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight uppercase" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>
              Empowering Asian Agriculture for a Sustainable Future
            </h1>
            <div className="inline-block border-t-2 border-b-2 border-white py-2 px-8 mb-8">
              <p className="text-white text-sm md:text-base tracking-widest font-light uppercase">
                Professional agricultural consultancy services
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-12">
              <Link
                to="/services"
                className="bg-white text-black px-8 py-4 rounded-lg  hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center text-lg uppercase tracking-wide"
              >
                Explore Services
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg  hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center text-lg uppercase tracking-wide"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-gradient-to-r from-yellow-600/50 to-green-800/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl  text-gray-800 mb-6" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>
              Leading Agricultural Consultancy in Sri Lanka
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With decades of combined experience, we provide comprehensive agricultural solutions that blend time-tested farming knowledge with cutting-edge technology. Our mission is to empower farmers and agribusinesses across Asia to achieve sustainable growth and profitability.
            </p>
            <Link
              to="/about"
              className="text-green-900 font-semibold hover:text-primary-700 inline-flex items-center text-lg"
            >
              Read More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive agricultural solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-100 flex"
              >
                {/* Left side - Colored section with text */}
                <div className={`w-1/2 bg-gradient-to-br ${service.bgColor} p-8 flex flex-col justify-between text-white`}>
                  <div>
                    <h3 className="text-2xl  mb-3">{service.title}</h3>
                    <p className="text-white text-opacity-90 text-sm">{service.description}</p>
                  </div>
                  <button className="self-start bg-white text-gray-800 px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md text-sm">
                    Learn More
                  </button>
                </div>
                
                {/* Right side - Image */}
                <div 
                  className="w-1/2 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Success Stories Slider */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from our agricultural projects
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-96">
                <img
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl  mb-2">{projects[currentSlide].title}</h3>
                  <p className="text-lg mb-2">{projects[currentSlide].location}</p>
                  <p className="text-primary-300 font-semibold">{projects[currentSlide].impact}</p>
                </div>
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-primary-600' : 'w-3 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em' }}>
              Our Work in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our impact through images of sustainable farming and thriving agricultural communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* <div className="p-6 text-center">
                  <p className="text-gray-600 font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {image.caption}
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-yellow-600/50 to-green-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by farmers and agribusinesses across Sri Lanka
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg"
              >
                <div className="text-primary-600 text-5xl mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 italic">{testimonial.text}</p>
                <div>
                  <p className=" text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights and updates from the world of agriculture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                  <h3 className="text-xl  text-gray-800 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <Link
                    to="/blog"
                    className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center group/link"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              View All Blog Posts
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;