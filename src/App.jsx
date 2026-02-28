import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './Layout.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Work from './pages/Work.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

function PageShell() {
  const { pathname } = useLocation();

  const currentPageName = (() => {
    if (pathname === '/' || pathname === '') return 'Home';
    if (pathname.startsWith('/about')) return 'About';
    if (pathname.startsWith('/work')) return 'Work';
    if (pathname.startsWith('/services')) return 'Services';
    if (pathname.startsWith('/contact')) return 'Contact';
    return 'Home';
  })();

  return (
    <Layout currentPageName={currentPageName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <HashRouter>
      <PageShell />
    </HashRouter>
  );
}
