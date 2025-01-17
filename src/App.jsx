import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import AboutPage from './pages/AboutPage';
    import TestimonialsPage from './pages/TestimonialsPage';
    
    function App() {
      return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      );
    }
    
    export default App;
