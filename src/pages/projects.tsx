// src/pages/Projects.tsx
import { useState, useEffect } from 'react';
import { MapPin, Calendar, TrendingUp, Users, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    farmers: 0,
    hectares: 0,
    ongoing: 0,
  });

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

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      projects: projects.length,
      farmers: totalFarmers,
      hectares: totalHectares,
      ongoing: projects.filter(p => p.status === 'ongoing').length,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedStats({
        projects: Math.floor(targets.projects * progress),
        farmers: Math.floor(targets.farmers * progress),
        hectares: Math.floor(targets.hectares * progress),
        ongoing: Math.floor(targets.ongoing * progress),
      });

      if (currentStep >= steps) {
        setAnimatedStats(targets);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

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
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {animatedStats.projects}
              </div>
              <div className="text-2xl font-bold text-gray-900">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {animatedStats.farmers}+
              </div>
              <div className="text-2xl font-bold text-gray-900">Farmers Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {animatedStats.hectares}+
              </div>
              <div className="text-2xl font-bold text-gray-900">Hectares Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {animatedStats.ongoing}
              </div>
              <div className="text-2xl font-bold text-gray-900">Ongoing Projects</div>
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
                className="bg-white shadow-lg overflow-hidden hover:shadow-xl"
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
    </div>
  );
};

export default Projects;