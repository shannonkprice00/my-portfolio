import React, { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./Footer";
import ThankYou from "./pages/ThankYou";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe
      formSubmitted={formSubmitted} handleContactForm={handleContactForm}/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    } 
    if (formSubmitted) {
      return <ThankYou />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  const handleContactForm = () => setFormSubmitted(true);
 

  return (
    <div>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage(formSubmitted)}
    <Footer />
  </div>
  )
}

