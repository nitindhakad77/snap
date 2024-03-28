import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleFeatures = () => {
    setFeaturesOpen(!featuresOpen);
  };

  const toggleCompany = () => {
    setCompanyOpen(!companyOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
                <img className="h-10 w-auto mr-2" src="/logo.svg" alt="Logo" />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-black hover:text-black focus:outline-none">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            </button>
          </div>

          <div className="hidden md:flex flex-grow justify-center space-x-4">
            <div className="relative">
              <button onClick={toggleFeatures} className="text-black hover:bg-white px-3 py-2 rounded-md">
                Features
              </button>
              {featuresOpen && (
                <div className="absolute z-10 left-0 mt-2 w-56 bg-white shadow-lg rounded-md">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <span className="mr-2">📝</span> Todo List
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <span className="mr-2">📅</span> Calendar
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <span className="mr-2">🔔</span> Reminders
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <span className="mr-2">📆</span> Planning
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={toggleCompany} className="text-black hover:bg-white px-3 py-2 rounded-md">
                Company
              </button>
              {companyOpen && (
                <div className="absolute z-10 left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">History</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Team</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog</a>
                </div>
              )}
            </div>
            <a href="#" className="text-black hover:bg-white px-3 py-2 rounded-md">Careers</a>
            <a href="#" className="text-black hover:bg-white px-3 py-2 rounded-md">About</a>
          </div>

          <div className="hidden md:flex">
            <a href="#" className="text-black hover:bg-white px-3 py-2 rounded-md">Login</a>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md ml-4">Register</a>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-black hover:bg-gray-700 block px-3 py-2 rounded-md">Features</a>
          <a href="#" className="text-black hover:bg-gray-700 block px-3 py-2 rounded-md">Company</a>
          <a href="#" className="text-black hover:bg-gray-700 block px-3 py-2 rounded-md">Careers</a>
          <a href="#" className="text-black hover:bg-gray-700 block px-3 py-2 rounded-md">About</a>
          <a href="#" className="text-black hover:bg-gray-700 block px-3 py-2 rounded-md">Login</a>
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold block px-3 py-2 rounded-md mt-1">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
