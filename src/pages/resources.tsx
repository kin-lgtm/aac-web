import { Download, ExternalLink } from 'lucide-react';

const Resources = () => {
  const downloads = [
    {
      title: 'Organic Farming Guide',
      description: 'A comprehensive guide to transitioning to organic farming, including best practices and certification tips.',
      link: '/downloads/organic-farming-guide.pdf',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400',
    },
    {
      title: 'Crop Yield Optimization Report',
      description: 'In-depth analysis of strategies to maximize crop yields using modern agricultural techniques.',
      link: '/downloads/crop-yield-report.pdf',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
    },
    {
      title: 'Consultancy Brochure',
      description: 'Learn more about our services and how we can help your agricultural business thrive.',
      link: '/brochure',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400',
    },
  ];

  const usefulLinks = [
    {
      title: 'Department of Agriculture',
      description: 'Official resources and information from the Sri Lankan Department of Agriculture.',
      url: 'https://www.doa.gov.lk',
    },
    {
      title: 'Export Development Board',
      description: 'Support and guidance for agricultural exports from Sri Lanka.',
      url: 'https://www.srilankabusiness.com',
    },
    {
      title: 'Tea Research Institute',
      description: 'Research and innovation in tea cultivation and production.',
      url: 'https://www.tri.lk',
    },
    {
      title: 'Coconut Research Institute',
      description: 'Advanced research and development for coconut industry.',
      url: 'https://www.cri.lk',
    },
    {
      title: 'Rubber Research Institute',
      description: 'Scientific research and technical services for rubber cultivation.',
      url: 'https://www.rrisl.lk',
    },
    {
      title: 'Hector Kobbekaduwa Agrarian Research Institute',
      description: 'Research on agrarian development and agricultural policies.',
      url: 'https://www.harti.gov.lk',
    },
    {
      title: 'Meteorological Department',
      description: 'Weather forecasts and climate information for agricultural planning.',
      url: 'https://www.meteo.gov.lk',
    },
    {
      title: 'Food and Agriculture Organization',
      description: 'Global resources for sustainable agriculture and food security.',
      url: 'https://www.fao.org',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-600 via-orange-800/90 to-green-800 text-white overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em' }}>
            Resources
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Access our collection of guides, reports, and useful links to support your agricultural journey.
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-10 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em' }}>
              Downloads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download useful guides, reports, and brochures to enhance your agricultural knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloads.map((resource, index) => (
              <div
                key={index}
                className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="inline-flex items-center bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Download
                    <Download className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em' }}>
              Useful Links
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore external resources to stay informed and connected with the agricultural community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usefulLinks.map((link, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{link.title}</h3>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Visit Site
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Resources;