// src/pages/About.tsx
import { Target, Eye, Users, Award, Handshake, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Dr. Rajitha Silva',
      role: 'Chief Agricultural Consultant',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      bio: 'Ph.D. in Agricultural Sciences with 20+ years of experience in crop management.',
    },
    {
      name: 'Nimal Fernando',
      role: 'Soil Science Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Expert in soil analysis and sustainable farming practices.',
    },
    {
      name: 'Priya Jayawardena',
      role: 'Agri-Tech Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'Specializes in implementing modern technology solutions in agriculture.',
    },
    {
      name: 'Chaminda Perera',
      role: 'Training Coordinator',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      bio: 'Passionate about farmer education and capacity building programs.',
    },
  ];

  const partners = [
    'Ministry of Agriculture',
    'Sri Lanka Export Development Board',
    'Ceylon Chamber of Commerce',
    'Agricultural Research Institute',
    'National Agricultural Bank',
    'Organic Certification Association',
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in all our services and solutions.',
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Integrity',
      description: 'Honest advice and transparent practices guide everything we do.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'Working together with farmers for mutual success and growth.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible agricultural practices.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl  mb-6">About Us</h1>
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
              <h2 className="text-4xl  text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2010, Asian Agricultural Consultancies emerged from a vision to revolutionize farming practices across Sri Lanka and the broader Asian region. Our journey began with a small team of passionate agricultural experts who recognized the need for professional consultancy services that could bridge the gap between traditional farming wisdom and modern agricultural science.
                </p>
                <p>
                  Over the years, we have grown into a leading consultancy firm, serving hundreds of farmers, agribusinesses, and agricultural enterprises. Our deep understanding of Asian agricultural systems, combined with expertise in cutting-edge farming technologies, positions us uniquely to deliver solutions that are both practical and transformative.
                </p>
                <p>
                  Based in Rathmalana, we maintain strong connections with local farming communities while leveraging global best practices and innovations. Our work spans rice paddies, tea plantations, vegetable farms, and fruit orchards, helping cultivate success across diverse agricultural landscapes.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-8 rounded-xl shadow-xl">
                <div className="text-4xl  mb-2">14+</div>
                <div className="text-primary-100">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl  text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower farmers and agribusinesses with expert knowledge, innovative solutions, and sustainable practices that enhance productivity, profitability, and environmental stewardship. We are committed to being the trusted partner for agricultural excellence across Asia.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl  text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be recognized as the leading agricultural consultancy in Asia, known for transforming farming communities through innovation, education, and sustainable practices. We envision a future where every farmer has access to world-class expertise and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl  text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-primary-600 mx-auto mb-4">{value.icon}</div>
                <h3 className="text-xl  text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl  text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Expert professionals dedicated to your agricultural success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl  text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
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
            <h2 className="text-4xl  text-gray-800 mb-4">Our Partners & Clients</h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading organizations in the agricultural sector
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <p className="text-gray-700 font-semibold text-center">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-16 bg-primary-600 text-white">
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
      </section>
    </div>
  );
};

export default About;