import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Frame 55@2x.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
        <header className=" top-0 left-0 right-0 z-50 text-white flex justify-center items-center drop-shadow-xl">
        <nav className="container mx-auto px-4 lg:px-4 lg:pt-2  w-full lg:ml-20 lg:mt-10 rounded-2xl lg:mr-20 h-14 bg-[#525aa0]">
          <div className="flex justify-between items-center">
            <div className="sm:hidden">
              <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes className="w-6 h-6 mr-4" /> : <FaBars className="w-6 h-6" />}
              </button>
              {isMobileMenuOpen && (
                <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-white py-6 px-6">
                  <p onClick={closeMobileMenu}>
                    <FaTimes className="w-10 h-10 ml-72 mb-2 text-red-500" />
                  </p>
                  <ul className="block space-y-2">
                    <Link
                      to="/"
                      className=''
                      onClick={closeMobileMenu}
                    >
                      <li className="flex gap-1 p-4 rounded hover:cursor-pointer hover:text-[#00ccbb] text-[#00ccbb]">
                        <FaHome className="w-6 h-6" />
                        Home
                      </li>
                    </Link>
                    {/* Other menu items */}
                  </ul>
                </div>
              )}
            </div>

            {/* Logo */}
            <img src={Logo} className="hidden sm:block w-26 h-6" alt="logo" />

            <div className="hidden sm:block flex items-center space-x-6">
              <ul className="flex space-x-6">
                <li className='dancing-script font-serif'><a href="#" className='dancing-script font-serif'>Find Work</a></li>
                <li><a href="#">Find Talent</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
             
            </div>
            <div className='hidden sm:block -px-12'>
                <button className=" border-white hover:border-transparent rounded px-4 py-1 mr-4">Login</button>
                <button className="bg-white hover:bg-transparent text-black hover:text-white border border-white hover:border-transparent rounded-2xl px-4 py-2">Join Now</button>
              </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
