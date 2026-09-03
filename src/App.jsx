import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  return <>
    <ScrollToTop />
    <Navbar />
    <main id="main-content">
      <Suspense fallback={<div className="page-loader" role="status">Loading Sprout…</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/explore/:category/:slug" element={<DetailPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
    <WhatsAppButton />
  </>;
}
