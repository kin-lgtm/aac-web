import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Define interfaces for navigation items
interface NavItem {
  name: string;
  href: string;
  hasSubmenu?: boolean;
}

interface SubmenuItem {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState<boolean>(false);
  const location = useLocation();

  const navigation: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services', hasSubmenu: true },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const servicesSubmenu: SubmenuItem[] = [
    { name: 'Agricultural Consulting', href: '/services/agricultural-consulting' },
    { name: 'Training & Workshops', href: '/services/training-workshops' },
    { name: 'Organic Certification Assistance', href: '/services/certification' },
    { name: 'Research & Data Services', href: '/services/research-data' },
    { name: 'Farm Management', href: '/services/farm-management' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white h-[100px] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="bg-green-600 p-3 rounded-full overflow-hidden">
              <img
                src="/logo.png"
                alt="Asian Agricultural Consultancies Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="text-gray-800">
              <h1 className="text-2xl font-bold">Asian Agricultural</h1>
              <p className="text-sm text-green-600">Consultancies</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.href}
                    className={`text-gray-800 hover:text-green-600 px-4 py-3 rounded-md text-base font-medium transition-all duration-300 flex items-center space-x-1 ${
                      isActive(item.href) ? ' text-green-700' : ''
                    }`}
                    onMouseEnter={() => item.hasSubmenu && setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => item.hasSubmenu && setIsServicesDropdownOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.hasSubmenu && (
                      <ChevronDown 
                        className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                          isServicesDropdownOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </Link>
                  {item.hasSubmenu && (
                    <div
                      className={`w-[240px] absolute top-full left-0 bg-white shadow-xl rounded-lg mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
                        isServicesDropdownOpen 
                          ? 'opacity-100 translate-y-0 visible' 
                          : 'opacity-0 -translate-y-2 invisible'
                      }`}
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <div className="py-2">
                        {servicesSubmenu.map((subItem, index) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all duration-200"
                            onClick={() => setIsServicesDropdownOpen(false)}
                            style={{
                              transitionDelay: isServicesDropdownOpen ? `${index * 50}ms` : '0ms'
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-green-600 p-3 rounded-md"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-50 backdrop-blur-sm rounded-lg mb-4 border border-gray-200">
            <div className="px-4 pt-4 pb-3 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`text-gray-800 hover:text-green-600 block px-4 py-3 rounded-md text-lg font-medium transition-all duration-300 flex items-center space-x-2 hover:bg-green-50 ${
                      isActive(item.href) ? 'bg-green-100 text-green-700' : ''
                    }`}
                    onClick={() => (item.hasSubmenu ? null : setIsMenuOpen(false))}
                  >
                    <span>{item.name}</span>
                    {item.hasSubmenu && (
                      <ChevronDown className="h-4 w-4 ml-auto" />
                    )}
                  </Link>
                  {item.hasSubmenu && (
                    <div className="pl-6 space-y-1 mt-2 border-l-2 border-green-200 ml-4">
                      {servicesSubmenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="text-gray-700 hover:text-green-600 block px-4 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-green-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;