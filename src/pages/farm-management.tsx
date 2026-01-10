

const FarmManagement = () => {
  const service = {
    title: 'Farm Development & Management',
    shortDesc: 'Complete farm operations management and optimization',
    features: [
      'Resource allocation and planning',
      'Automation and mechanization',
      'Labor management systems',
      'Equipment maintenance scheduling',
      'Inventory and supply management',
      'Quality control systems',
      'Performance monitoring and reporting',
      'Work-place safety',
      'Record keeping',
    ],
    bgColor: 'from-teal-600 to-teal-800',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-r from-yellow-600 via-orange-800/90 to-[#58a716] text-white overflow-hidden`}>
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
            <h2 className="text-4xl text-gray-800 mb-4" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>
              Complete Management and Optimization of Farm Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our farm management services streamline your operations, saving time and boosting productivity.
            </p>
          </div>
          <div>
            <h3 className="text-3xl text-gray-800 mb-12 text-center" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>What We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full p-4" style={{ backgroundColor: '#58a716' }}>
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature}</h4>
                  <p className="text-sm text-gray-600">Optimize farm operations</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Farm Management
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us to learn how our management services can enhance your farm’s efficiency.
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

export default FarmManagement;