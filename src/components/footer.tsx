import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <span className="text-primary-600">AAC</span> - Asian Agricultural Consultancies
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              No. 53, Sri Dharmarama Road, Rathmalana
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/agricultural-consulting" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Agricultural Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/training-workshops" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Training & Workshops
                </Link>
              </li>
              <li>
                <Link to="/services/farm-management" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Farm Management
                </Link>
              </li>
              <li>
                <Link to="/services/research-data" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Research & Data Services
                </Link>
              </li>
              <li>
                <Link to="/services/organic-certification" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Organic Certification
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Get in Touch
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-sm text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-gray-600" />
                info@asianagriculture.com
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-gray-600" />
                +94 11 123 4567
              </li>
            </ul>
            
            <div className="mt-4 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-gray-600" />
              <select className="bg-transparent text-sm text-gray-600 focus:outline-none">
                <option value="en" className="text-gray-800">English</option>
                <option value="si" className="text-gray-800">Sinhala</option>
                <option value="ta" className="text-gray-800">Tamil</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} ACC - Asian Agricultural Consultancies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;