// app/(main)/components/Header/Header.tsx
"use client";
// Navbar.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, User } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-xiketic/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/images/ninja.png" 
              alt="NinjaReader" 
              width={100} 
              height={100} 
              className="w-12 h-12"
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-12">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search our store"
                className="w-full bg-transparent border border-white/10 rounded-l-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-maximum-blue-green"
              />
              <button className="absolute right-0 top-0 h-full px-6 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="relative">
              <ShoppingBag className="w-6 h-6 text-white hover:text-maximum-blue-green transition-colors" />
              <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-selective-yellow text-xiketic text-xs rounded-full">
                0
              </span>
            </button>
            <button>
              <User className="w-6 h-6 text-white hover:text-maximum-blue-green transition-colors" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="flex items-center justify-between py-4">
            {/* Main Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {['Home', 'Blog', 'Shop', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-white hover:text-maximum-blue-green transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-2 text-white">
              <span className="text-maximum-blue-green">24/7 Support:</span>
              <Link href="tel:+254762804598" className="hover:text-maximum-blue-green transition-colors">
                (+254)-762-804-598
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;