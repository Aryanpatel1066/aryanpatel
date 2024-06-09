import React, { useState } from 'react';
import "../App.css"

const Education = () => {
  const [activeTab, setActiveTab] = useState('gph');

  return (
    
      <div className="content">
        <div className="educationHeading">Education</div>
        <div className="slider-container">
      <div className="tabs">
        <button
          className={activeTab === 'gph' ? 'active' : ''}
          onClick={() => setActiveTab('gph')}
        >
          Diploma (CE)
        </button>
        <button
          className={activeTab === 'ldrp' ? 'active' : ''}
          onClick={() => setActiveTab('ldrp')}
        >
          BE (CE)
        </button>
      </div>
        {activeTab === 'gph' && (
          <div className="tab-content">
            <h3>Diploma Engineer(CE) </h3>
            <p>Oct 2020 - Sep 2023 <span className='grade'><span className='helightGrade'>Grade:</span> 8.43</span></p>
            <p>
              I completed my diploma  <a href="https://www.gphn.cteguj.in">polytechnic himatnagar.com</a>.
            </p>
          </div>
        )}
        {activeTab === 'ldrp' && (
          <div className="tab-content">
            <h3>Bechlor Of Engineering(
              CE) - LDRP</h3>
            <p>Sap 2023 - Apr 2026 <span className='grade'><span className='helightGrade'>Grade:</span> 7.60</span></p>
            <p>
              pursuing BE at LDRP  <a href="https://www.ldrp.ac.in">ldrp.com</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
