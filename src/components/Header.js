import '../App.css';
import { useState } from 'react';

function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 return (
  <header className="sticky top-0 z-50">
   {/* Top Bar */}
   <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center bg-[#4a0083] h-[40px]">
    <div className="text-white text-xs sm:text-sm">
     Think you've got what it takes for a career in Data? Find out in just one minute! 
     <button className="text-black bg-yellow-400 px-2 py-1 ml-2 rounded">Take the test now!</button>
    </div>
   </div>

   {/* Main Navigation */}
   <nav className="flex flex-row justify-between text-white bg-black items-center h-[50px] px-4">
    <div>DataScientest</div>

    {/* Desktop Navigation */}
    <div className="hidden lg:flex flex-row justify-around w-[500px]">
     <a href="#courses">Our Courses</a>
     <a href="#career">Career</a>
     <a href="#events">Events</a>
     <a href="#about">About Us</a>
     <a href="#blog">Blog</a>
    </div>

    {/* Appointment and Mobile Menu Toggle */}
    <div className="flex lg:hidden">
     <button className="mr-4 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? '✕' : '☰'}
     </button>
     <button className="hidden bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Book an Appointment</button>
    </div>

    {/* Mobile Navigation */}
    <div className={`lg:hidden absolute top-[50px] w-full bg-black left-0 text-white transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)' }}>
     <a href="#courses" className="block py-2 px-4 hover:bg-gray-700">Our Courses</a>
     <a href="#career" className="block py-2 px-4 hover:bg-gray-700">Career</a>
     <a href="#events" className="block py-2 px-4 hover:bg-gray-700">Events</a>
     <a href="#about" className="block py-2 px-4 hover:bg-gray-700">About Us</a>
     <a href="#blog" className="block py-2 px-4 hover:bg-gray-700">Blog</a>
    </div>

      {/* Appointment Button for Desktop */}
    <div className="hidden lg:block">
     <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Book an Appointment</button>
    </div>
   </nav>
  </header>
 );
}

export default Header;