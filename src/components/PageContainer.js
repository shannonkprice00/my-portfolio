import React, { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./Footer";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
    <Footer />
  </div>
  )
}

