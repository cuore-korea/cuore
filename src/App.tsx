import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  // Check if admin route is accessed
  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin') {
      setShowAdmin(true);
    }
  }, []);

  if (showAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;