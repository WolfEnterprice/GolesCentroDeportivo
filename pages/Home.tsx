
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/70 via-background-dark/50 to-background-dark z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-[20s] scale-110" 
            style={{ backgroundImage: "url('https://picsum.photos/seed/stadium/1920/1080')" }}
          ></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-primary shadow-neon"></span>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Open 24/7</span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter mb-6 max-w-5xl">
            BOOK YOUR FIELD <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">DOMINATE THE GAME</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl leading-relaxed">
            The ultimate experience for 5v5, 7v7 and 11v11 on professional synthetic turf. Feel the passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button 
              onClick={() => navigate('/booking')}
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover hover:shadow-neon text-background-dark px-10 py-5 rounded-xl text-lg font-black uppercase tracking-wider transition-all transform hover:-translate-y-1"
            >
              Book Now
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white hover:bg-white/5 text-white px-10 py-5 rounded-xl text-lg font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">play_circle</span>
              See Video
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Categories</h2>
            <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight italic">OUR FIELDS</h3>
          </div>
          <button onClick={() => navigate('/booking')} className="text-white hover:text-primary flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-colors group">
            See All Fields
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Fútbol 5', price: '35', img: 'https://picsum.photos/seed/f5/600/400', desc: 'Fast-paced, dynamic matches. Latest generation turf.' },
            { title: 'Fútbol 7', price: '50', img: 'https://picsum.photos/seed/f7/600/400', desc: 'The perfect balance of skill and strategy.' },
            { title: 'Fútbol 11', price: '120', img: 'https://picsum.photos/seed/f11/600/400', desc: 'Full stadium experience for the pros.' },
          ].map((field, idx) => (
            <div key={idx} className="group relative bg-surface-dark rounded-2xl overflow-hidden border border-border-dark hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent z-10 opacity-80"></div>
                <img src={field.img} alt={field.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 z-20 bg-background-dark/80 backdrop-blur px-3 py-1 rounded text-white text-xs font-bold border border-border-dark">
                  AVAILABLE NOW
                </div>
              </div>
              <div className="p-6 relative z-20 -mt-8">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white text-2xl font-black italic tracking-tighter">{field.title}</h4>
                  <span className="material-symbols-outlined text-primary">sports_soccer</span>
                </div>
                <p className="text-text-secondary text-sm mb-6">{field.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border-dark">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">From</span>
                    <span className="text-white font-bold text-lg">${field.price}.00 <span className="text-xs font-normal text-gray-400">/ hr</span></span>
                  </div>
                  <button onClick={() => navigate('/booking')} className="bg-border-dark hover:bg-primary hover:text-background-dark text-white p-3 rounded-xl transition-all">
                    <span className="material-symbols-outlined">calendar_add_on</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
