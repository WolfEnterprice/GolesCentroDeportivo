
import React from 'react';
import { Reservation, BookingStatus, FieldType } from '../types';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const reservations: Reservation[] = [
    { id: '1', customerName: 'Diego Maradona', avatar: 'https://i.pravatar.cc/150?u=diego', fieldType: FieldType.V7, dateTime: 'Oct 24, 20:00', price: 80, status: BookingStatus.CONFIRMED },
    { id: '2', customerName: 'Lionel Messi', avatar: 'https://i.pravatar.cc/150?u=leo', fieldType: FieldType.V5, dateTime: 'Oct 24, 18:00', price: 60, status: BookingStatus.PENDING },
    { id: '3', customerName: 'Cristiano Ronaldo', avatar: 'https://i.pravatar.cc/150?u=cr7', fieldType: FieldType.V11, dateTime: 'Oct 25, 21:00', price: 150, status: BookingStatus.CONFIRMED },
    { id: '4', customerName: 'Neymar Jr', avatar: 'https://i.pravatar.cc/150?u=ney', fieldType: FieldType.V7, dateTime: 'Oct 23, 19:30', price: 80, status: BookingStatus.CANCELLED },
  ];

  return (
    <div className="flex h-screen bg-background-dark overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border-dark flex flex-col p-6 gap-8 bg-background-dark/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-10 bg-primary rounded-full shadow-glow flex items-center justify-center">
            <span className="material-symbols-outlined text-background-dark font-black">sports_soccer</span>
          </div>
          <div>
            <h1 className="text-xl font-black text-white">GOLES</h1>
            <p className="text-xs text-text-secondary">Admin Console</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-border-dark text-primary font-bold transition-all">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:bg-border-dark hover:text-white transition-all">
            <span className="material-symbols-outlined">calendar_month</span>
            Reservations
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:bg-border-dark hover:text-white transition-all">
            <span className="material-symbols-outlined">schedule</span>
            Schedule
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:bg-border-dark hover:text-white transition-all">
            <span className="material-symbols-outlined">payments</span>
            Finance
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:bg-border-dark hover:text-white transition-all">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </nav>

        <div className="mt-auto">
          <Link to="/booking" className="flex w-full items-center justify-center gap-3 bg-primary text-background-dark font-black py-4 rounded-xl shadow-neon hover:scale-105 transition-all">
            <span className="material-symbols-outlined font-black">add_circle</span>
            New Booking
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-8 border-b border-border-dark">
          <div>
            <h2 className="text-3xl font-black text-white">Dashboard Overview</h2>
            <p className="text-text-secondary">Welcome back, Manager</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">search</span>
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-surface-dark border-none rounded-xl pl-10 pr-4 py-2.5 w-64 text-sm text-white focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex items-center gap-4 pl-6 border-l border-border-dark">
              <div className="text-right">
                <p className="text-sm font-bold text-white">Alex Morgan</p>
                <p className="text-xs text-text-secondary">Super Admin</p>
              </div>
              <img src="https://i.pravatar.cc/150?u=admin" className="size-10 rounded-full border-2 border-primary" alt="Admin" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 scrollbar-thin">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Total Reservations', value: '1,248', trend: '+12%', icon: 'sports_soccer' },
              { label: 'Monthly Income', value: '$14,500', trend: '+8%', icon: 'attach_money' },
              { label: 'Occupancy Rate', value: '85%', trend: '+5%', icon: 'stadium' },
            ].map((stat, i) => (
              <div key={i} className="bg-surface-dark p-6 rounded-3xl border border-border-dark hover:border-primary/50 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-background-dark rounded-xl text-primary"><span className="material-symbols-outlined">{stat.icon}</span></div>
                  <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-full">{stat.trend}</span>
                </div>
                <p className="text-text-secondary text-sm font-medium">{stat.label}</p>
                <h3 className="text-3xl font-black text-white mt-1 group-hover:text-primary transition-colors">{stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="bg-surface-dark rounded-3xl border border-border-dark overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-border-dark flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Recent Reservations</h3>
              <button className="text-primary text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-background-dark/50 text-gray-500 text-[10px] uppercase font-black tracking-widest">
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Field</th>
                    <th className="px-6 py-4">Date & Time</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark">
                  {reservations.map((res) => (
                    <tr key={res.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <img src={res.avatar} className="size-8 rounded-full border border-border-dark" alt="" />
                          <span className="font-bold text-white">{res.customerName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-300 font-medium">{res.fieldType}</td>
                      <td className="px-6 py-5 text-gray-300">{res.dateTime}</td>
                      <td className="px-6 py-5 text-white font-black">${res.price}.00</td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          res.status === BookingStatus.CONFIRMED ? 'bg-green-500/10 text-green-500' :
                          res.status === BookingStatus.PENDING ? 'bg-yellow-500/10 text-yellow-500' :
                          'bg-red-500/10 text-red-500'
                        }`}>
                          {res.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="text-gray-500 hover:text-white transition-colors">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
