import { Link } from 'react-router-dom';
import { MessageSquare, School, FileText, Leaf, ClipboardList, Lightbulb, Cog, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: 'Agricultural Consultancy',
      shortDesc: 'Professional consultation to help you achieve your agricultural goals with expert guidance.',
      features: [
        'Farm business planning and strategy development',
        'Crop selection and rotation planning',
        'Market analysis and pricing strategies',
        'Financial planning and investment advice',
        'Risk management and insurance guidance',
        'Supply chain optimization',
      ],
      benefits: 'Increase profitability by 30-50% through optimized farming practices and strategic planning.',
      bgColor: 'from-green-700 to-green-900',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800',
      link: '/services/agricultural-consulting',
    },
    {
      icon: <School className="h-12 w-12" />,
      title: 'Training, Workshops and Certificate Courses',
      shortDesc: 'Comprehensive training programs and certificate courses to advance your agricultural knowledge and skills.',
      features: [
        'Sustainable farming techniques',
        'Modern agricultural practices',
        'Organic farming certification prep',
        'Pest and disease management',
        'Post-harvest handling',
        'Farm safety and best practices',
      ],
      benefits: 'Over 1000 farmers trained with 95% satisfaction rate. Hands-on training with expert instructors.',
      bgColor: 'from-blue-700 to-blue-900',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      link: '/services/training-workshops',
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: 'Guidance on Quality Standard Certification',
      shortDesc: 'Expert support to help you obtain and maintain quality standard certification.',
      features: [
        'Certification process guidance',
        'Documentation preparation and review',
        'Compliance audit support',
        'Quality management system setup',
        'Organic and GAP certification assistance',
        'International standard compliance',
      ],
      benefits: 'Successfully helped 100+ farms achieve various quality certifications with 98% success rate.',
      bgColor: 'from-emerald-600 to-emerald-800',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800',
      link: '/services/certification',
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: 'Research and Data Services',
      shortDesc: 'Data-driven insights and research to optimize your agricultural operations.',
      features: [
        'Market research and trend analysis',
        'Crop performance studies',
        'Climate impact assessments',
        'Yield forecasting models',
        'Comparative analysis reports',
        'Custom research projects',
      ],
      benefits: 'Make informed decisions backed by comprehensive research and data analysis.',
      bgColor: 'from-purple-700 to-purple-900',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      link: '/services/research-data',
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: 'Farm Development & Management',
      shortDesc: 'Complete farm development and management solutions for efficient and profitable operations.',
      features: [
        'Resource allocation and planning',
        'Labor management systems',
        'Equipment maintenance scheduling',
        'Inventory and supply management',
        'Quality control systems',
        'Performance monitoring and reporting',
      ],
      benefits: 'Streamline operations and maximize efficiency with professional farm management services.',
      bgColor: 'from-amber-700 to-amber-900',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      link: '/services/farm-management',
    },
  ];

  // Filter services for the featured section
  const featuredServices = services;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-600 via-orange-800/90 to-[#58a716] text-white">
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
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em' }}>
              How We Work
            </h2>
            <p className="text-xl text-gray-600">
              Our proven process ensures successful outcomes for every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Consultation', 
                desc: 'Initial assessment of your needs and goals',
                icon: <ClipboardList className="h-8 w-8 text-white" />
              },
              { 
                step: '02', 
                title: 'Planning', 
                desc: 'Develop customized solutions and strategies',
                icon: <Lightbulb className="h-8 w-8 text-white" />
              },
              { 
                step: '03', 
                title: 'Implementation', 
                desc: 'Execute plans with expert guidance',
                icon: <Cog className="h-8 w-8 text-white" />
              },
              { 
                step: '04', 
                title: 'Support', 
                desc: 'Ongoing monitoring and optimization',
                icon: <HeadphonesIcon className="h-8 w-8 text-white" />
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full p-4" style={{ backgroundColor: '#58a716' }}>
                    {item.icon}
                  </div>
                </div>
                <div className="text-primary-600 text-lg font-semibold mb-2">{item.step}</div>
                <h3 className="text-xl  text-gray-800 mb-2">{item.title}</h3>
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