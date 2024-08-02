import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Course from './components/pages/course/Course';
import Masterclass from './components/pages/Masterclass/Masterclass';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hirefromus from './components/pages/Hirefromus/Hirefromus';
import About from './components/pages/About/About';
import Pricing from './components/pages/pricing/Pricing';
import ContactUs from './components/pages/contact/ContactUs';
import Whatsup from './components/Whatsup';
import Register from './components/pages/Register/Register';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/course" element={<Course />} />
        <Route path="/masterclass" element={<Masterclass />} />
        <Route path="/hire" element={<Hirefromus />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/pricing/:title" element={<Pricing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
      <Whatsup />
    </BrowserRouter>
  );
};

export default App;
