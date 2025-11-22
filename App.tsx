import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FloatingAgent } from './components/FloatingAgent';
import { Home } from './pages/Home';
import { GenerativeAI } from './pages/GenerativeAI';
import { WebDevelopment } from './pages/WebDevelopment';

// Layout component to wrap pages
const Layout: React.FC = () => {
  const location = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-tangent-bg text-white font-sans selection:bg-orange-500/30 selection:text-orange-500 overflow-x-hidden flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <FloatingAgent />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/generative-ai" element={<GenerativeAI />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;