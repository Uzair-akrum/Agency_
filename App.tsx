import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FloatingAgent } from './components/FloatingAgent';
import { PageLoader } from './components/PageLoader';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const GenerativeAI = lazy(() => import('./pages/GenerativeAI').then(module => ({ default: module.GenerativeAI })));
const WebDevelopment = lazy(() => import('./pages/WebDevelopment').then(module => ({ default: module.WebDevelopment })));
const BookCall = lazy(() => import('./pages/BookCall').then(module => ({ default: module.BookCall })));

// Layout component to wrap pages
const Layout: React.FC = () => {
  const location = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Don't show Navbar/FloatingAgent on the standalone BookCall page if desired, 
  // but usually for a landing page feel, we might keep the Navbar or remove it for focus.
  // Based on the screenshot, it looks like a standalone focused page.
  // I will conditionally render Navbar/Agent only if not on /book-call to match the focused "form" look in the screenshot.
  const isBookCallPage = location.pathname === '/book-call';

  return (
    <div className="min-h-screen bg-tangent-bg text-white font-sans selection:bg-orange-500/30 selection:text-orange-500 overflow-x-hidden flex flex-col">
      {!isBookCallPage && <Navbar />}
      
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      {!isBookCallPage && <FloatingAgent />}
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
          <Route path="book-call" element={<BookCall />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;