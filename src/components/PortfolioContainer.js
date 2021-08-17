import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About'; 
import Projects from './pages/Projects';
import Contact from './pages/Contact'; 
import Resume from './pages/Resume'; 


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }
  