import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, MessageSquare, FileText, School, Calendar, Tag } from 'lucide-react';
import { useState } from 'react';
import blogPosts from '../data/blogPosts.json';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: 'Agricultural Consultancy',
      description: 'Professional consultation to help you achieve your agricultural goals with expert guidance.',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800',
      bgColor: 'from-green-700 to-green-900',
      icon: <MessageSquare className="h-12 w-12" />,
      href: '/services/agricultural-consulting'
    },
    {
      title: 'Training, Workshops and Certificate Courses',
      description: 'Comprehensive training programs and certificate courses to advance your agricultural knowledge and skills.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      bgColor: 'from-blue-700 to-blue-900',
      icon: <School className="h-12 w-12" />,
      href: '/services/training-workshops'
    },
    {
      title: 'Guidance on Quality Standard Certification',
      description: 'Expert support to help you obtain and maintain quality standard certification.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800',
      bgColor: 'from-emerald-600 to-emerald-800',
      icon: <Leaf className="h-12 w-12" />,
      href: '/services/certification'
    },
    {
      title: 'Research and Data Services',
      description: 'Data-driven insights and research to optimize your agricultural operations.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      bgColor: 'from-purple-700 to-purple-900',
      icon: <FileText className="h-12 w-12" />,
      href: '/services/research-data'
    },
    {
      title: 'Farm Development & Management',
      description: 'Complete farm development and management solutions for efficient and profitable operations.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      bgColor: 'from-amber-700 to-amber-900',
      icon: <Leaf className="h-12 w-12" />,
      href: '/services/farm-management'
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

  // const testimonials = [
  //   {
  //     name: 'Sunil Perera',
  //     role: 'Rice Farmer',
  //     text: 'The consultancy helped me double my yield using sustainable practices. Highly recommended!',
  //   },
  //   {
  //     name: 'Lakshmi Fernando',
  //     role: 'Tea Estate Owner',
  //     text: 'Their expertise in modern farming techniques transformed our plantation operations.',
  //   },
  // ];

  const categories = [
    { value: 'technology', label: 'Technology' },
    { value: 'sustainability', label: 'Sustainability' },
    { value: 'crops', label: 'Crops' },
    { value: 'farmers', label: "Farmers' Voices" },
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

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % projects.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  // };

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
                  - Asian Agriculture Consultancies -
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
              With more than a decade of combined experience, we provide comprehensive agricultural solutions that blend time-tested farming knowledge with cutting-edge technology. Our mission is to empower farmers and agribusinesses across Asia to achieve sustainable growth and profitability.
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
                  <Link to={service.href} className="self-start bg-white text-gray-800 px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md text-sm">
                    Learn More
                  </Link>
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
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from our agricultural projects
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden shadow-2xl">
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
            {/* <button
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
            </button> */}
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
      {/* <section className="py-20 bg-gradient-to-r from-yellow-600/50 to-green-800/50">
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
      </section> */}

      {/* Blog Preview */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights and updates from the world of agriculture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                      {categories.find(c => c.value === post.category)?.label}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl  text-gray-800 mb-3 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                    <button className="text-gray-600 font-semibold border-2 border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-600 hover:text-white hover:border-gray-600 transition-all inline-flex items-center gap-2">
                      Read More
                    </button>
                  </div>

                  <div className="flex gap-2 mt-4 flex-wrap">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;