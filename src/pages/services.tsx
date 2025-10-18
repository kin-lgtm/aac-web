import { Link } from 'react-router-dom';
import { Sprout, GraduationCap, FlaskConical, Laptop, TrendingUp, Droplet, Leaf } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sprout className="h-12 w-12" />,
      title: 'Agricultural Consulting',
      shortDesc: 'Comprehensive agribusiness consulting for sustainable growth',
      features: [
        'Farm business planning and strategy development',
        'Crop selection and rotation planning',
        'Market analysis and pricing strategies',
        'Financial planning and investment advice',
        'Risk management and insurance guidance',
        'Supply chain optimization',
      ],
      benefits: 'Increase profitability by 30-50% through optimized farming practices and strategic planning.',
      bgColor: 'from-purple-600 to-purple-800',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800',
      link: '/services/agricultural-consulting',
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: 'Training & Workshops',
      shortDesc: 'Professional training programs for farmers and agricultural workers',
      features: [
        'Sustainable farming techniques',
        'Modern agricultural practices',
        'Organic farming certification prep',
        'Pest and disease management',
        'Post-harvest handling',
        'Farm safety and best practices',
      ],
      benefits: 'Over 1000 farmers trained with 95% satisfaction rate. Hands-on training with expert instructors.',
      bgColor: 'from-green-700 to-green-900',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      link: '/services/training-workshops',
    },
    {
      icon: <FlaskConical className="h-12 w-12" />,
      title: 'Organic Certification Assistance',
      shortDesc: 'Comprehensive soil health assessment and recommendations',
      features: [
        'Complete soil nutrient analysis',
        'pH level testing and adjustment plans',
        'Organic matter content evaluation',
        'Micronutrient deficiency identification',
        'Soil texture and structure analysis',
        'Custom fertilizer recommendations',
      ],
      benefits: 'Scientifically-backed recommendations that improve soil health and crop yields by up to 40%.',
      bgColor: 'from-yellow-700 to-yellow-900',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800',
      link: '/services/certification',
    },
    {
      icon: <Laptop className="h-12 w-12" />,
      title: 'Smart Farming Solutions',
      shortDesc: 'Cutting-edge technology integration for modern agriculture',
      features: [
        'Drone-based crop monitoring and spraying',
        'IoT sensors for soil moisture and climate',
        'AI-powered pest detection systems',
        'Automated irrigation systems',
        'Farm management software implementation',
        'Data analytics and yield prediction',
      ],
      benefits: 'Reduce operational costs by 25% while increasing efficiency and crop quality through technology.',
      bgColor: 'from-blue-600 to-blue-800',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      link: '/services/smart-farming',
    },
    {
      icon: <Droplet className="h-12 w-12" />,
      title: 'Farm Management',
      shortDesc: 'Complete farm operations management and optimization',
      features: [
        'Resource allocation and planning',
        'Labor management systems',
        'Equipment maintenance scheduling',
        'Inventory and supply management',
        'Quality control systems',
        'Performance monitoring and reporting',
      ],
      benefits: 'Streamline operations and maximize efficiency with professional farm management services.',
      bgColor: 'from-teal-600 to-teal-800',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
      link: '/services/farm-management',
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Research & Data Services',
      shortDesc: 'Agricultural research and data-driven insights',
      features: [
        'Market research and trend analysis',
        'Crop performance studies',
        'Climate impact assessments',
        'Yield forecasting models',
        'Comparative analysis reports',
        'Custom research projects',
      ],
      benefits: 'Make informed decisions backed by comprehensive research and data analysis.',
      bgColor: 'from-indigo-600 to-indigo-800',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      link: '/services/research-data',
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: 'Export/Import Advice',
      shortDesc: 'International trade consultation for agricultural products',
      features: [
        'Export market identification',
        'Quality standards compliance',
        'Documentation and certification',
        'Logistics and shipping coordination',
        'International pricing strategies',
        'Trade regulation guidance',
      ],
      benefits: 'Successfully facilitated exports for 50+ clients to markets across Asia, Europe, and Middle East.',
      bgColor: 'from-green-600 to-green-800',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800',
      link: '/services/export-import',
    },
  ];

  // Filter services for the new section
  const featuredServices = services.filter(service =>
    [
      'Agricultural Consulting',
      'Training & Workshops',
      'Farm Management',
      'Research & Data Services',
      'Organic Certification Assistance',
    ].includes(service.title)
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-600 via-orange-800/90 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl mb-6" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em' }}>Our Services</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive agricultural solutions designed to meet your unique farming needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl text-gray-800 mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em' }}>
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive agricultural solutions tailored to your needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredServices.map((service, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-100 flex"
                  >
                    {/* Left side - Colored section with text */}
                    <div className={`w-1/2 bg-gradient-to-br ${service.bgColor} p-8 flex flex-col justify-between text-white`}>
                      <div>
                        <h3 className="text-2xl mb-3">{service.title}</h3>
                        <p className="text-white text-opacity-90 text-sm">{service.shortDesc}</p>
                      </div>
                      <Link
                        to={service.link}
                        className="self-start bg-white text-gray-800 px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md text-sm"
                      >
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
       
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">
              Our proven process ensures successful outcomes for every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial assessment of your needs and goals' },
              { step: '02', title: 'Planning', desc: 'Develop customized solutions and strategies' },
              { step: '03', title: 'Implementation', desc: 'Execute plans with expert guidance' },
              { step: '04', title: 'Support', desc: 'Ongoing monitoring and optimization' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
};

export default Services;