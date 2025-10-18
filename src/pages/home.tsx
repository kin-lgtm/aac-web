// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, TrendingUp, Sprout, FlaskConical, Laptop, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: <Sprout className="h-10 w-10" />,
      title: 'Crop Planning',
      description: 'Strategic crop planning and rotation guidance for optimal yields and soil health.',
    },
    {
      icon: <FlaskConical className="h-10 w-10" />,
      title: 'Soil Testing',
      description: 'Comprehensive soil analysis and recommendations for improved productivity.',
    },
    {
      icon: <Laptop className="h-10 w-10" />,
      title: 'Agri-Tech Solutions',
      description: 'Modern farming solutions including drones, AI, and IoT technologies.',
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: 'Farmer Training',
      description: 'Professional training programs and workshops for sustainable farming practices.',
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary-900 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1600)',
            backgroundBlendMode: 'overlay',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering Asian Agriculture for a Sustainable Future
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Professional agricultural consultancy services combining traditional wisdom with modern technology
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary inline-flex items-center">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20 inline-flex items-center backdrop-blur-sm">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Leading Agricultural Consultancy in Sri Lanka
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With decades of combined experience, we provide comprehensive agricultural solutions that blend time-tested farming knowledge with cutting-edge technology. Our mission is to empower farmers and agribusinesses across Asia to achieve sustainable growth and profitability.
            </p>
            <Link to="/about" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
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
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive agricultural solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary-600 font-semibold">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                  <Link
                    to="/blog"
                    className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
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
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Agricultural Business?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Get in touch with our experts for a free consultation
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center text-lg"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Home;