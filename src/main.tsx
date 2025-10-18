import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import './App.css'
import App from './App.tsx';
import Homepage from './pages/home.tsx'; // Import homepage!
import About from './pages/about.tsx';
import Services from './pages/services.tsx';
import Projects from './pages/projects.tsx';
import Blog from './pages/blog.tsx';
import Contact from './pages/contact.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} /> {/* Homepage at root */}
          <Route path="about" element={<About />} /> {/* About at /about */}
          <Route path="services" element={<Services />} /> {/* About at /about */}
          <Route path="projects" element={<Projects />} /> {/* About at /about */}
          <Route path="blog" element={<Blog />} /> {/* About at /about */}
          <Route path="contact" element={<Contact />} /> {/* About at /about */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);