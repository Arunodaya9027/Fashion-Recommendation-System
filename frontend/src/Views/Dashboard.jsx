// Dashboard.jsx

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import BeingCasualSection from "../components/Variables/BeingCasualSection";
import CelebsFashionSection from "../components/Variables/CelebsFashionSection";
import FashionPicksSection from "../components/Variables/FashionPicksSection";

import ContactUsSection from "../components/Variables/ContactUsSection";
import ExploreSection from "../components/Variables/ExploreSection";
import Footer from "../components/Footer/Footer";
import "./Dashboard.css";

const Dashboard = () => {
    const [initialNavbarPosition, setInitialNavbarPosition] = useState(0);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  
    // Handle scroll event to fix/unfix the navbar
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsNavbarFixed(scrollPosition === 0 || scrollPosition > initialNavbarPosition);
      };
  
      // Initial check to set the initial state
      handleScroll();
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [initialNavbarPosition]);

    return (
        <>
            <div className={`dashboard-header ${isNavbarFixed ? "fixed" : ""}`}>
                {/* Your photo or video with fading effect
                Add your photo or video component here */}
                <Navbar initialPosition={initialNavbarPosition} />
            </div>

            <div className="dashboard-content">
                <FashionPicksSection />
                <CelebsFashionSection />
                <BeingCasualSection />
                <ExploreSection />
                <ContactUsSection />
                
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
