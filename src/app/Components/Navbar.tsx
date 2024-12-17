// src/app/Components/Navbar.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-gray-900 bg-cover bg-center bg-no-repeat height={50}">
      <Image src="/Frame 16.png" alt='frame' width={400} height={10} className='float-right mr-20 mt-2'/>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 " >
        <div className="flex items-center">
          <Image src="/logo1.png" alt="Logo" width={100} height={40} />
        </div>
        {/* <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="material-icons">phone</span>
            <span>+1 (525) 456 7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons">email</span>
            <span>info@domain.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/fb.png" alt="Facebook" width={20} height={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
            </a>
          </div>
          <div>
            <span>العربية</span>
          </div>
        </div> */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="text-white">Our Services</a>
          <a href="/Exp" className="text-white">About MEFIC</a>
          <a href="#" className="text-white">Media Center</a>
          <a href="#" className="text-white">Careers</a>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Book a Consultant</button>
        </div>
       
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gray-800 text-white">
          <div className="container mx-auto py-4 px-6">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white">Our Services</a>
              <a href="#" className="text-white">About MEFIC</a>
              <a href="#" className="text-white">Media Center</a>
              <a href="#" className="text-white">Careers</a>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">Book a Consultant</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
