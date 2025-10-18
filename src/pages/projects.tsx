// src/pages/Projects.tsx
import { useState } from 'react';
import { MapPin, Calendar, TrendingUp, Users, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Organic Rice Cultivation Initiative',
      location: 'Ampara District, Sri Lanka',
      country: 'Sri Lanka',
      crop: 'Rice',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800',
      date: '2024 - Ongoing',
      status: 'ongoing',
      description: 'Transforming 200 hectares of conventional rice farming to certified organic cultivation. Project includes soil rehabilitation, farmer training, and market linkage development.',
      outcomes: [
        'Yield increase of 35% in the second season',
        '150 farmers trained in organic practices',
        'Organic certification achieved for 180 hectares',
        'Premium market access established',
      ],
      impact: {
        farmers: 150,
        hectares: 200,
        increase: '35%',
      },
    },
    {
      id: 2,
      title: 'Tea Plantation Modernization Program',
      location: 'Nuwara Eliya, Sri Lanka',
      country: 'Sri Lanka',
      crop: 'Tea',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      date: '2023 - 2024',
      status: 'completed',
      description: 'Complete modernization of traditional tea estates with IoT sensors, automated irrigation, and quality control systems. Enhanced processing facilities and worker training programs.',
      outcomes: [
        'Quality grade improved by 2 levels',
        'Labor efficiency increased by 40%',
        'Water consumption reduced by 30%',
        'Export prices increased by 25%',
      ],
      impact: {
        farmers: 80,
        hectares: 150,
        increase: '25%',
      },
    },
    {
      id: 3,
      title: 'Smart Irrigation Systems Implementation',
      location: 'Anuradhapura, Sri Lanka',
      country: 'Sri Lanka',
      crop: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      date: '2024 - Ongoing',
      status: 'ongoing',
      description: 'Installation of sensor-based drip irrigation systems across 500 acres of vegetable farms. Real-time monitoring through mobile apps and automated scheduling.',
      outcomes: [
        'Water savings of 40%',
        'Crop yield improvement of 28%',
        'Labor cost reduction of 35%',
        'Year-round cultivation enabled',
      ],
      impact: {
        farmers: 200,
        hectares: 200,
        increase: '28%',
      },
    },
    {
      id: 4,
      title: 'Coconut Integrated Farming Model',
      location: 'Kurunegala, Sri Lanka',
      country: 'Sri Lanka',
      crop: 'Coconut',
      image: 'https://images.unsplash.com/photo-1598958718959-c1b9c961c1c0?w=800',
      date: '2023 - 2024',
      status: 'completed',
      description: 'Development of multi-crop integrated farming system under coconut canopy including cocoa, pepper, and pineapple. Comprehensive training and market development.',
      outcomes: [
        'Farm income increased by 60%',
        'Land use efficiency improved by 45%',
        'Biodiversity enhancement achieved',
        'Climate resilience strengthened',
      ],
      impact: {
        farmers: 120,
        hectares: 300,
        increase: '60%',
      },
    },
    {
      id: 5,
      title: 'Precision Agriculture Pilot Project',
      location: 'Polonnaruwa, Sri Lanka',
      country: 'Sri Lanka',
      crop: 'Rice',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800',
      date: '2024 - Ongoing',
      status: 'ongoing',
      description: 'Introduction of drone technology for crop monitoring, pest detection, and precision spraying. Data analytics platform for yield prediction and resource optimization.',
      outcomes: [
        'Pesticide use reduced by 50%',
        'Early pest detection accuracy: 92%',
        'Input cost savings of 30%',
        'Yield prediction accuracy: 88%',
      ],
      impact: {
        farmers: 100,
        hectares: 250,
        increase: '32%',
      },
    },
    {
      id: 6,
      title: 'Fruit Export Quality Enhancement',
      location: 'Embilipitiya, Sri Lanka',
      country: 'Sri Lanka',
      crop: 'Fruits',
      image: 'https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?w=800',
      date: '2023 - 2024',
      status: 'completed',
      description: 'Comprehensive quality improvement program for mango and papaya exporters. Installation of pack houses, cold storage, and GlobalGAP certification assistance.',
      outcomes: [
        'Export volume increased by 80%',
        'Rejection rate decreased from 15% to 3%',
        '20 farms GlobalGAP certified',
        'New markets accessed in Middle East',
      ],
      impact: {
        farmers: 60,
        hectares: 100,
        increase: '80%',
      },
    },
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'ongoing', label: 'Ongoing' },
    { value: 'completed', label: 'Completed' },
  ];

  const countries = [
    { value: 'all', label: 'All Locations' },
    { value: 'Sri Lanka', label: 'Sri Lanka' },
  ];

  const crops = [
    { value: 'all', label: 'All Crops' },
    { value: 'Rice', label: 'Rice' },
    { value: 'Tea', label: 'Tea' },
    { value: 'Vegetables', label: 'Vegetables' },
    { value: 'Coconut', label: 'Coconut' },
    { value: 'Fruits', label: 'Fruits' },
  ];

  const [selectedCrop, setSelectedCrop] = useState('all');

  const filteredProjects = projects.filter(project => {
    const statusMatch = selectedFilter === 'all' || project.status === selectedFilter;
    const countryMatch = selectedCountry === 'all' || project.country === selectedCountry;
    const cropMatch = selectedCrop === 'all' || project.crop === selectedCrop;
    return statusMatch && countryMatch && cropMatch;
  });

  const totalFarmers = projects.reduce((sum, p) => sum + p.impact.farmers, 0);
  const totalHectares = projects.reduce((sum, p) => sum + p.impact.hectares, 0);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-600 via-orange-800/90 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl  mb-6" style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>Our Projects</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Transforming agriculture through innovative projects and sustainable solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl  text-primary-600 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl  text-primary-600 mb-2">
                {totalFarmers}+
              </div>
              <div className="text-gray-600">Farmers Impacted</div>
            </div>
            <div>
              <div className="text-4xl  text-primary-600 mb-2">
                {totalHectares}+
              </div>
              <div className="text-gray-600">Hectares Covered</div>
            </div>
            <div>
              <div className="text-4xl  text-primary-600 mb-2">
                {projects.filter(p => p.status === 'ongoing').length}
              </div>
              <div className="text-gray-600">Ongoing Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <Filter className="h-5 w-5" />
              <span>Filter by:</span>
            </div>
            
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
            >
              {filters.map(filter => (
                <option key={filter.value} value={filter.value}>{filter.label}</option>
              ))}
            </select>

            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
            >
              {countries.map(country => (
                <option key={country.value} value={country.value}>{country.label}</option>
              ))}
            </select>

            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
            >
              {crops.map(crop => (
                <option key={crop.value} value={crop.value}>{crop.label}</option>
              ))}
            </select>

            <div className="ml-auto text-gray-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        project.status === 'ongoing'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-800 text-white'
                      }`}
                    >
                      {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800">
                      {project.crop}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl  text-gray-800 mb-3"style={{fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em'}}>
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h4 className=" text-gray-800 mb-3">Key Outcomes:</h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <div className="bg-primary-100 rounded-full p-1 mr-2 mt-0.5">
                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
                    <div className="text-center">
                      <Users className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                      <div className=" text-gray-800">{project.impact.farmers}</div>
                      <div className="text-xs text-gray-600">Farmers</div>
                    </div>
                    <div className="text-center">
                      <MapPin className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                      <div className=" text-gray-800">{project.impact.hectares}</div>
                      <div className="text-xs text-gray-600">Hectares</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                      <div className=" text-gray-800">{project.impact.increase}</div>
                      <div className="text-xs text-gray-600">Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No projects found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedFilter('all');
                  setSelectedCountry('all');
                  setSelectedCrop('all');
                }}
                className="mt-4 text-primary-600 font-semibold hover:text-primary-700"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl  mb-6">
            Want to Start a Project with Us?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's work together to transform your agricultural operations
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Discuss Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;