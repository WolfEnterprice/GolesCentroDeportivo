
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import Confirmation from './pages/Confirmation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
