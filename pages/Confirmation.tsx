
import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(180,249,6,0.05)_0%,rgba(22,24,17,0)_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="size-12 bg-primary rounded-full shadow-neon flex items-center justify-center text-background-dark font-black">
                <span className="material-symbols-outlined text-3xl font-black">check</span>
              </div>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-primary">Booking Confirmed</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white">
              You're in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">the game!</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-lg leading-relaxed">
              Your reservation for <strong className="text-white">The Arena</strong> is secured. Please scan the QR code to finalize the payment and receive your digital pass.
            </p>
          </div>

          <div className="rounded-3xl border border-border-dark bg-surface-dark overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
              <img 
                src="https://picsum.photos/seed/stadium-lights/800/450" 
                className="w-full h-full object-cover opacity-60" 
                alt="Stadium" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Venue</p>
                <h4 className="text-2xl font-black text-white italic">Cancha 5 - The Arena</h4>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 h-14 rounded-2xl bg-surface-dark border border-border-dark text-white font-bold flex items-center justify-center gap-3 hover:bg-border-dark transition-all">
              <span className="material-symbols-outlined">calendar_today</span>
              Add to Calendar
            </button>
            <button className="flex-1 h-14 rounded-2xl bg-surface-dark border border-border-dark text-white font-bold flex items-center justify-center gap-3 hover:bg-border-dark transition-all">
              <span className="material-symbols-outlined">share</span>
              Share Invite
            </button>
          </div>
        </div>

        <div className="w-full lg:max-w-sm">
          <div className="bg-surface-dark rounded-3xl border border-border-dark overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
            <div className="bg-background-dark/50 p-6 border-b border-dashed border-border-dark flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Order #88392</span>
              <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] font-black uppercase text-primary">Awaiting Payment</span>
              </div>
            </div>

            <div className="p-8 flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Date</p>
                  <p className="text-lg font-bold text-white">Fri, Oct 24</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Time</p>
                  <p className="text-lg font-bold text-white">20:00 - 21:00</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Format</p>
                  <p className="text-lg font-bold text-white">5 v 5</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Total Due</p>
                  <p className="text-2xl font-black text-primary">$45.00</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 pt-4 border-t border-border-dark">
                <div className="text-center">
                  <p className="text-sm font-bold text-white mb-1">Scan to Pay</p>
                  <p className="text-xs text-text-secondary">Use your preferred banking app</p>
                </div>
                <div className="bg-white p-4 rounded-3xl shadow-glow relative">
                  <div className="size-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=GOLES-BOOKING-88392" alt="QR Code" className="size-40 opacity-90" />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-primary/50 animate-[bounce_3s_infinite] shadow-glow"></div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-text-secondary">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  SECURE 256-BIT ENCRYPTED PAYMENT
                </div>
              </div>
            </div>

            <div className="p-6 bg-background-dark/50 flex flex-col gap-4">
              <button className="w-full h-14 bg-primary text-background-dark font-black rounded-2xl shadow-neon flex items-center justify-center gap-3 hover:scale-[1.02] transition-all">
                <span className="material-symbols-outlined font-black">download</span>
                Download Ticket
              </button>
              <Link to="/" className="text-center text-xs font-bold text-text-secondary hover:text-white transition-colors">Return to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
