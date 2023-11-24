import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ActualResult from './components/ActualResult';
import DigitalMarketing from './components/DigitalMarketing';
import Feature from './components/Feature';
import Footer from './components/Footer';
import GrowthPartner from './components/GrowthPartner';
import Header from './components/Header';
import Learn from './components/Learn';
import MarketingPlan from './components/MarketingPlan';
import ReadyGoals from './components/ReadyGoals';
import SatisfiedClients from './components/SatisfiedClients';
import React, { useState, useEffect } from 'react';
import BackToTop from './assets/images/png/back-to-top.png';
import { Preloader } from './components/Iconimg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1000,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (

    <div>
      {screenLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <>
            <Header />
            <Feature />
            <SatisfiedClients />
            <DigitalMarketing />
            <MarketingPlan />
            <GrowthPartner />
            <ActualResult />
            <Learn />
            <ReadyGoals />
            <Footer />
            <div>
                <img onClick={() => top()} src={BackToTop} alt='BackToTop' className={backToTop ? "back_to_top mw_50" : "d-none" } />
            </div>
          </>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
