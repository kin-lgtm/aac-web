// src/pages/Services.tsx
import { useState } from 'react';
import { ChevronDown, ChevronUp, Sprout, GraduationCap, FlaskConical, Laptop, TrendingUp, FileCheck, Droplet, Leaf } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(0);

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
    },
    {
      icon: <FlaskConical className="h-12 w-12" />,
      title: 'Soil Testing & Analysis',
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
    },
    {
      icon: <FileCheck className="h-12 w-12" />,
      title: 'Organic Certification Assistance',
      shortDesc: 'Complete support for organic farming certification',
      features: [
        'Certification process guidance',
        'Documentation preparation',
        'Farm inspection readiness',
        'Organic standards compliance training',
        'Transition planning from conventional farming',
        'Ongoing compliance support',
      ],
      benefits: 'Successfully assisted over 100 farms in achieving organic certification with 98% success rate.',
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
    },
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive agricultural solutions designed to meet your unique farming needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Complete Agricultural Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From planning to execution, we provide end-to-end services that transform agricultural operations and maximize returns
            </p>
          </div>

          {/* Services Grid - Quick View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-primary-50 transition-all cursor-pointer"
                onClick={() => toggleService(index)}
              >
                <div className="text-primary-600 mx-auto mb-4">{service.icon}</div>
                <h3 className="font-bold text-gray-800">{service.title}</h3>
              </div>
            ))}
          </div>

          {/* Detailed Services - Expandable */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary-300 transition-all"
              >
                <button
                  onClick={() => toggleService(index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-primary-600">{service.icon}</div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.shortDesc}</p>
                    </div>
                  </div>
                  {expandedService === index ? (
                    <ChevronUp className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {expandedService === index && (
                  <div className="px-6 pb-6 pt-0 border-t border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-4">
                          What We Offer:
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start">
                              <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-4">
                          Why Choose This Service:
                        </h4>
                        <div className="bg-primary-50 p-6 rounded-lg">
                          <p className="text-gray-700 leading-relaxed">{service.benefits}</p>
                        </div>
                        <div className="mt-6">
                          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors w-full">
                            Request This Service
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Started Today
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us for a free consultation and discover how we can help your agricultural business thrive
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Schedule Consultation
            </button>
            <button className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors text-lg border-2 border-white">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;