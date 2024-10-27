"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDomainOpen, setIsDomainOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // State for Resources submenu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDomainMenu = () => {
    setIsDomainOpen(!isDomainOpen);
  };

  const toggleResourcesMenu = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setIsDomainOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-100 to-blue-50 py-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 padded-section">
      <div>
      <Link href="#home" onClick={closeMenus}>
        <img
          src="/blue-logo.svg"
          alt="CoralRevive Logo"
          className="h-14 w-auto" // Keeps aspect ratio by setting width to auto
        />
      </Link>

        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="#home" className="text-gray-800 hover:text-blue-600">Home</Link>
          {/* Domain with Submenu */}
          <div className="relative">
            <button
              onClick={toggleDomainMenu}
              className="text-gray-800 hover:text-blue-600 flex items-center focus:outline-none"
            >
              Domain
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isDomainOpen ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDomainOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                <Link href="#literature-survey" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeMenus}>Literature Survey</Link>
                <Link href="#research-gap" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeMenus}>Research Gap</Link>
                <Link href="#research-problem" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeMenus}>Research Problem</Link>
                <Link href="#research-objectives" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeMenus}>Research Objectives</Link>
                <Link href="#methodology" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeMenus}>Methodology</Link>
                <Link href="#technologies-used" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeMenus}>Technologies Used</Link>
              </div>
            )}
          </div>
          <Link href="#milestones" className="text-gray-800 hover:text-blue-600">Milestones</Link>
          {/* Resources with Submenu */}
          <div className="relative">
            <button
              onClick={toggleResourcesMenu}
              className="text-gray-800 hover:text-blue-600 flex items-center focus:outline-none"
            >
              Resources
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isResourcesOpen ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isResourcesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                <Link href="#documents" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeMenus}>Documents</Link>
                <Link href="#presentations" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeMenus}>Presentations</Link>
              </div>
            )}
          </div>
          <Link href="#about" className="text-gray-800 hover:text-blue-600">About Us</Link>
          <Link href="#contact" className="text-gray-800 hover:text-blue-600">Contact Us</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            ☰
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white p-4 space-y-4">
          <Link href="#home" className="text-gray-800" onClick={closeMenus}>Home</Link>
          <div className="relative">
            <button
              onClick={toggleDomainMenu}
              className="text-gray-800 flex items-center focus:outline-none"
            >
              Domain
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isDomainOpen ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDomainOpen && (
              <div className="mt-2 space-y-2 pl-4">
                <Link href="#literature-survey" className="block text-gray-800" onClick={closeMenus}>Literature Survey</Link>
                <Link href="#research-gap" className="block text-gray-800" onClick={closeMenus}>Research Gap</Link>
                <Link href="#research-problem" className="block text-gray-800" onClick={closeMenus}>Research Problem</Link>
                <Link href="#research-objectives" className="block text-gray-800" onClick={closeMenus}>Research Objectives</Link>
                <Link href="#methodology" className="block text-gray-800" onClick={closeMenus}>Methodology</Link>
                <Link href="#technologies-used" className="block text-gray-800" onClick={closeMenus}>Technologies Used</Link>
              </div>
            )}
          </div>
          <Link href="#milestones" className="text-gray-800" onClick={closeMenus}>Milestones</Link>
          <div className="relative">
            <button
              onClick={toggleResourcesMenu}
              className="text-gray-800 flex items-center focus:outline-none"
            >
              Resources
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isResourcesOpen ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isResourcesOpen && (
              <div className="mt-2 space-y-2 pl-4">
                <Link href="#documents" className="block text-gray-800" onClick={closeMenus}>Documents</Link>
                <Link href="#presentations" className="block text-gray-800" onClick={closeMenus}>Presentations</Link>
              </div>
            )}
          </div>
          <Link href="#about" className="text-gray-800" onClick={closeMenus}>About Us</Link>
          <Link href="#contact" className="text-gray-800" onClick={closeMenus}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
