// import { Link } from 'react-router-dom';
// import { TrendingUp, ArrowRight } from 'lucide-react';

const ResearchDataServices = () => {
  const service = {
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
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-r from-yellow-600 via-orange-800/90 to-green-800 text-white overflow-hidden`}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em' }}>
            {service.title}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Data-Driven Agricultural Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage our research and analytics to make informed decisions and boost your farm’s performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Benefits</h3>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">{service.benefits}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Unlock Insights with Research
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us to explore how our research services can drive your farm’s success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
            <Link
              to="/brochure"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors text-lg border-2 border-white"
            >
              Download Brochure
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ResearchDataServices;