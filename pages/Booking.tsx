
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldType, BookingStatus, TimeSlot } from '../types';

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [selectedField, setSelectedField] = useState<FieldType>(FieldType.V5);
  const [selectedDate, setSelectedDate] = useState(5);
  const [selectedSlot, setSelectedSlot] = useState<string | null>('14:00 - 15:00');

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '08:00 - 09:00', price: 40, status: BookingStatus.BOOKED, period: 'Morning' },
    { id: '2', time: '09:00 - 10:00', price: 40, status: BookingStatus.AVAILABLE, period: 'Morning' },
    { id: '3', time: '10:00 - 11:00', price: 40, status: BookingStatus.AVAILABLE, period: 'Morning' },
    { id: '4', time: '11:00 - 12:00', price: 40, status: BookingStatus.AVAILABLE, period: 'Morning' },
    { id: '5', time: '13:00 - 14:00', price: 45, status: BookingStatus.AVAILABLE, period: 'Afternoon' },
    { id: '6', time: '14:00 - 15:00', price: 45, status: BookingStatus.AVAILABLE, period: 'Afternoon' },
    { id: '7', time: '15:00 - 16:00', price: 45, status: BookingStatus.BOOKED, period: 'Afternoon' },
    { id: '8', time: '16:00 - 17:00', price: 45, status: BookingStatus.AVAILABLE, period: 'Afternoon' },
    { id: '9', time: '18:00 - 19:00', price: 60, status: BookingStatus.AVAILABLE, period: 'Night', isPremium: true },
    { id: '10', time: '19:00 - 20:00', price: 60, status: BookingStatus.BOOKED, period: 'Night', isPremium: true },
    { id: '11', time: '20:00 - 21:00', price: 60, status: BookingStatus.BOOKED, period: 'Night', isPremium: true },
    { id: '12', time: '21:00 - 22:00', price: 60, status: BookingStatus.AVAILABLE, period: 'Night', isPremium: true },
  ];

  const handleBooking = () => {
    if (selectedSlot) navigate('/confirmation');
  };

  return (
    <div className="container mx-auto px-4 lg:px-10 py-10 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Book Your Match</h1>
          <p className="text-text-secondary text-lg">Select a date and time to secure your field.</p>
        </div>

        <div className="flex p-1.5 bg-border-dark rounded-2xl shadow-xl">
          {Object.values(FieldType).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedField(type)}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                selectedField === type ? 'bg-primary text-background-dark shadow-glow' : 'text-gray-400 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sidebar */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-8">
          <div className="bg-surface-dark border border-border-dark rounded-3xl p-8 sticky top-28 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <button className="p-2 hover:bg-border-dark rounded-full transition-colors text-gray-400 hover:text-white">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <h3 className="text-lg font-bold text-white uppercase tracking-widest">March 2024</h3>
              <button className="p-2 hover:bg-border-dark rounded-full transition-colors text-gray-400 hover:text-white">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-4">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                <div key={d} className="text-xs font-bold text-gray-600 py-2">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {[...Array(31)].map((_, i) => {
                const day = i + 1;
                const isSelected = selectedDate === day;
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`aspect-square flex items-center justify-center rounded-full text-sm transition-all ${
                      isSelected ? 'bg-primary text-background-dark font-black shadow-glow' : 'text-white hover:bg-border-dark'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-border-dark">
              <div className="flex items-center gap-3 text-xs">
                <span className="size-3 rounded-full bg-primary shadow-glow"></span>
                <span className="text-white font-medium">Selected</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="size-3 rounded-full border border-gray-600"></span>
                <span className="text-gray-400">Available</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="size-3 rounded-full bg-border-dark"></span>
                <span className="text-gray-600">Booked</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-8 relative overflow-hidden">
            <h4 className="font-bold text-xl mb-3 text-white">Night Owl Special</h4>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">Book after 10 PM and get 15% off your next match. Perfect for late-night enthusiasts!</p>
            <button className="text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center gap-2">
              Learn More <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Slots Content */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-12 pb-32">
          {['Morning', 'Afternoon', 'Night'].map((period) => (
            <section key={period}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-border-dark text-primary rounded-xl">
                  <span className="material-symbols-outlined">
                    {period === 'Morning' ? 'wb_sunny' : period === 'Afternoon' ? 'partly_cloudy_day' : 'nights_stay'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  {period === 'Morning' ? 'Mañana' : period === 'Afternoon' ? 'Tarde' : 'Noche'}
                  <span className="text-gray-500 text-lg font-medium">{period}</span>
                  {period === 'Night' && (
                    <span className="px-3 py-1 rounded-md text-[10px] uppercase font-black bg-primary text-background-dark tracking-widest">Premium</span>
                  )}
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {timeSlots.filter(s => s.period === period).map((slot) => {
                  const isSelected = selectedSlot === slot.time;
                  const isBooked = slot.status === BookingStatus.BOOKED;

                  return (
                    <button
                      key={slot.id}
                      disabled={isBooked}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`group relative flex flex-col items-start p-5 rounded-2xl border transition-all duration-300 ${
                        isBooked 
                          ? 'opacity-30 grayscale cursor-not-allowed bg-border-dark border-transparent' 
                          : isSelected
                            ? 'bg-primary/10 border-primary ring-1 ring-primary shadow-glow'
                            : 'bg-surface-dark border-border-dark hover:border-primary/50'
                      }`}
                    >
                      <span className={`text-lg font-bold mb-1 transition-colors ${isSelected ? 'text-white' : isBooked ? 'text-gray-500' : 'text-gray-300 group-hover:text-white'}`}>
                        {slot.time}
                      </span>
                      <div className="flex justify-between w-full items-center mt-2">
                        <span className={`text-sm font-bold ${isSelected ? 'text-primary' : 'text-primary/70'}`}>
                          {isBooked ? 'Booked' : `$${slot.price}`}
                        </span>
                        {!isBooked && (
                          <div className={`size-5 rounded-full border flex items-center justify-center transition-all ${isSelected ? 'bg-primary border-primary' : 'border-gray-600'}`}>
                            {isSelected && <span className="material-symbols-outlined text-background-dark text-[14px] font-black">check</span>}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Summary */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border-dark bg-background-dark/80 backdrop-blur-xl z-[60] px-8 py-5 shadow-2xl">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-8 text-white">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-border-dark rounded-xl text-primary"><span className="material-symbols-outlined">calendar_month</span></div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Date</p>
                <p className="font-bold">March {selectedDate}, 2024</p>
              </div>
            </div>
            <div className="h-10 w-px bg-border-dark hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-border-dark rounded-xl text-primary"><span className="material-symbols-outlined">schedule</span></div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Time</p>
                <p className="font-bold">{selectedSlot || 'Not Selected'}</p>
              </div>
            </div>
            <div className="h-10 w-px bg-border-dark hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-border-dark rounded-xl text-primary"><span className="material-symbols-outlined">sports_soccer</span></div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Field</p>
                <p className="font-bold">{selectedField} Synthetic</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Total</p>
              <p className="text-3xl font-black text-primary leading-none">$45.00</p>
            </div>
            <button 
              onClick={handleBooking}
              className="bg-primary hover:bg-primary-hover text-background-dark font-black py-4 px-10 rounded-xl shadow-glow transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              Confirm Booking
              <span className="material-symbols-outlined font-black">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
