import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'));
const ContactPopup = lazy(() => import('./components/ContactPopup'));

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/products', element: <Products /> },
  { path: '/products/:id', element: <ProductDetail /> },
  { path: '/services', element: <Services /> },
  { path: '/projects', element: <Projects /> },
  { path: '/contact', element: <Contact /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:id', element: <BlogDetail /> },
];

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Dispatch prerender event after a short timeout to ensure lazy loaded components are mounted
    setTimeout(() => {
      document.dispatchEvent(new Event('prerender-trigger'));
    }, 1500);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
              </div>
            }>
              <Routes>
                {routes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
              </Routes>
              <FloatingWhatsApp />
              <ContactPopup />
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
