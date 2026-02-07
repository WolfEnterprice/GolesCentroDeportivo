
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-border-dark pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 text-primary mb-6">
              <span className="material-symbols-outlined text-3xl font-black">sports_soccer</span>
              <span className="text-2xl font-black tracking-tight text-white">GOLES</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Providing premium sports facilities for the community. Professional turf, stadium lighting, and 24/7 availability.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Find a Court</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tournaments</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Member Perks</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Support</h4>
            <ul className="flex flex-col gap-4 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-text-secondary text-xs mb-4">Get the latest match alerts and promos.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 bg-surface-dark border-border-dark rounded-xl text-xs focus:ring-1 focus:ring-primary" />
              <button className="bg-primary p-2.5 rounded-xl text-background-dark"><span className="material-symbols-outlined text-xl font-bold">send</span></button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-dark gap-6">
          <p className="text-xs text-gray-600 font-medium">© 2024 GOLES Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><span className="material-symbols-outlined">facebook</span></a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><span className="material-symbols-outlined">photo_camera</span></a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><span className="material-symbols-outlined">alternate_email</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
