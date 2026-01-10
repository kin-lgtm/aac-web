// src/pages/About.tsx
import { Target, Eye } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Prof. G D Kapila Kumara',
      title: 'PhD in Horticulture',
      role: 'Consultant Agronomist',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      experience: 'More than 20 years of experience in Agronomy, Horticulture, Postharvest Management, Protected Agriculture, Floriculture',
    },
    {
      name: 'Prof. C K Beneragama',
      title: 'PhD in Horticulture',
      role: 'Consultant Agronomist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      experience: 'More than 20 years of experience in Agronomy, Horticulture, Postharvest Management, Floriculture, Personality Development, Stress Management, Artificial Intelligence',
    },
    {
      name: 'Prof. P K Dissanayake',
      title: 'PhD in Horticulture',
      role: 'Consultant Horticulturist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      experience: 'More than 20 years of experience in Horticulture, Biotechnology, Fruit Cultivation, Bee Keeping, Landscape Horticulture and Architecture',
    },
    {
      name: 'Dr. (Mrs.) B M V S Basnayake',
      title: 'PhD in Plant Pathology',
      role: 'Consultant Plant Pathologist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      experience: 'More than 20 years of experience in Plant Pathology and Agricultural Technology',
    },
    {
      name: 'Mr. Gayan Abeysinghe',
      title: 'BSc. Agriculture',
      role: 'Gardening and Landscaping Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      experience: 'More than 20 years of experience in Gardening and Landscaping',
    },
    {
      name: 'Dr. Buddhi',
      title: 'BSc. Agriculture',
      role: 'Gardening and Landscaping Architect',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      experience: 'More than 15 years of experience in Gardening and Landscaping Architecture',
    },
    {
      name: 'Mrs. Kalpana Colombage',
      title: '',
      role: '',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      experience: '',
    },
  ];

  const partners = [
  {
    name: 'FAO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/db/FAO_logo.svg',
  },
  {
    name: 'IRRI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/db/FAO_logo.svg',
  },
  {
    name: 'IFAD',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/db/FAO_logo.svg',
  },
  {
    name: 'Hayleys Agriculture',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/db/FAO_logo.svg',
  },
  {
    name: 'Browns Agri Solutions',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/db/FAO_logo.svg',
  },
  {
    name: 'Lankem Agro',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/db/FAO_logo.svg',
  },
];

  const values = [
    {
      image: '/images/icon-1.png',
      title: 'Excellence',
      description: 'We strive for the highest quality in all our services and solutions.',
    },
    {
      image: '/images/icon-2.png',
      title: 'Integrity',
      description: 'Honest advice and transparent practices guide everything we do.',
    },
    {
      image: '/images/icon-3.png',
      title: 'Collaboration',
      description: 'Working together with farmers and agribusinesses for mutual success and growth.',
    },
    {
      image: '/images/icon-4.png',
      title: 'Sustainability',
      description: 'Committed to environmentally responsible agricultural practices along with socioeconomic sustainability.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-600 via-orange-800/90 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl  mb-6" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>About Us</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Bridging tradition and innovation to create a sustainable agricultural future for Asia
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl  text-gray-800 mb-6" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2010, Asian Agricultural Consultancies emerged from a vision to revolutionize farming practices across Sri Lanka and the broader Asian region. Our journey began with a small team of passionate agricultural experts who recognized the need for professional consultancy services that could bridge the gap between traditional farming wisdom and modern agricultural production & agribusiness.
                </p>
                <p>
                  Over the years, we have grown into a leading consultancy firm, serving hundreds of farmers, agribusinesses, and agricultural enterprises. Our deep understanding of Asian agricultural systems, combined with expertise in cutting-edge farming and value chain management technologies, positions us uniquely to deliver solutions that are both practical and transformative.
                </p>
                <p>
                  Based in Rathmalana, we maintain strong connections with local farming communities while leveraging global best practices and innovations. Our expertise spans food crop production, livestock production, value chain management & postharvest handling, floriculture & landscaping, agribusiness management and research & data services, helping them boost yields,  manage resources and improve profitability through science-based, tech-driven strategies across diverse agricultural landscapes.   
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800"
                alt="Our Story"
                className=" p-3 w-full h-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800"
                alt="Our Story"
                className="p-3 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-yellow-600/50 to-green-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl  text-gray-800 mb-4" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower farmers and agribusinesses with expert knowledge, innovative solutions, and sustainable practices that enhance productivity, profitability, and environmental stewardship. We are committed to being the trusted partner for agricultural excellence across Asia.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl  text-gray-800 mb-4" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be recognized as the leading agricultural consultancy in Asia, known for transforming farming communities and agribusinesses through innovation, education, and sustainable practices. We envision a future where every farmer and agribusiness have access to world-class expertise and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white shadow-xl transition-all duration-300 "
              >
                <div className="flex justify-center items-center mx-auto mb-4">
                  <img src={value.image} alt={value.title} className="h-24 w-24 object-contain" />
                </div>
                <h3 className="text-xl text-gray-800 mb-3" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Expert professionals dedicated to your agricultural success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-lg transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  {member.title && <p className="text-sm text-gray-500 mb-2">({member.title})</p>}
                  {member.role && <p className="text-primary-600 font-semibold mb-3">{member.role}</p>}
                  {member.experience && <p className="text-gray-600 text-sm leading-relaxed">{member.experience}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em' }}>
              Our Partners & Clients
            </h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading organizations in the agricultural sector
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="flex marquee gap-8">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-xl min-w-[150px]"
                  style={{ pointerEvents: 'none' }}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="h-20 w-auto object-contain mb-2"
                  />
                  <p className="text-gray-700 font-semibold text-center text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .marquee {
            display: flex;
            animation: marquee 20s linear infinite;
            white-space: nowrap;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* Registration Info */}
      {/* <section className="py-16 bg-primary-600 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="h-16 w-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl  mb-2">Officially Registered & Certified</h3>
            <p className="text-primary-100 text-lg">
              Registration Number: W/102846
            </p>
            <p className="text-primary-100 mt-2">
              No. 53, Sri Dharmarama Road, Rathmalana, Sri Lanka
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;