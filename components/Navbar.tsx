
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname === '/dashboard';

  if (isAdmin) return null; // Admin dashboard has its own sidebar

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border-dark bg-background-dark/95 backdrop-blur-sm px-6 lg:px-10 py-4">
      <Link to="/" className="flex items-center gap-4 group">
        <div className="size-8 text-primary group-hover:scale-110 transition-transform">
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-xl font-black leading-tight tracking-tight text-white">GOLES</h2>
      </Link>
      <nav className="hidden md:flex flex-1 justify-center gap-9">
        <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>Home</Link>
        <Link to="/booking" className={`text-sm font-medium transition-colors ${location.pathname === '/booking' ? 'text-primary font-bold' : 'text-text-secondary hover:text-primary'}`}>Bookings</Link>
        <Link to="/dashboard" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">Admin</Link>
      </nav>
      <div className="flex items-center gap-3">
        <button className="flex size-10 items-center justify-center rounded-lg bg-border-dark text-white hover:bg-[#434b32] transition-colors relative">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full border-2 border-border-dark"></span>
        </button>
        <button className="flex size-10 items-center justify-center rounded-lg bg-border-dark text-white hover:bg-[#434b32] transition-colors">
          <span className="material-symbols-outlined text-[20px]">account_circle</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
