import { useState, useEffect } from 'react';
import StoryboardApp from './components/StoryboardApp';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DetailedFeatures from './components/DetailedFeatures';
import AppScreenshots from './components/AppScreenshots';
import ReviewShowcase from './components/ReviewShowcase';
import Personalization from './components/Personalization';
import MicroFeatures from './components/MicroFeatures';
import Security from './components/Security';
import FAQ from './components/FAQ';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  if (window.location.hash === '#script') {
    return <StoryboardApp />;
  }

  return (
    <div className="app-container">
      {/* Dynamic Background */}
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      
      <Header scrolled={scrolled} />
      
      <main>
        <Hero />
        <Features />
        <AppScreenshots />
        <DetailedFeatures />
        <ReviewShowcase />
        <Personalization />
        <MicroFeatures />
        <Security />
        <FAQ />
        <DownloadSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
