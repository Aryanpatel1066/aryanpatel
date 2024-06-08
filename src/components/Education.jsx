import React, { useState } from 'react';
import "../App.css"

const Education = () => {
  const [activeTab, setActiveTab] = useState('Multiplier');

  return (
    
      <div className="content">
        <div className="slider-container">
      <div className="tabs">
        <button
          className={activeTab === 'Multiplier' ? 'active' : ''}
          onClick={() => setActiveTab('Multiplier')}
        >
          Multiplier
        </button>
        <button
          className={activeTab === 'Acko' ? 'active' : ''}
          onClick={() => setActiveTab('Acko')}
        >
          Acko
        </button>
      </div>
        {activeTab === 'Multiplier' && (
          <div className="tab-content">
            <h3>DevOps Engineer - Multiplier</h3>
            <p>Feb 2024 - Present</p>
            <p>
              Working as DevOps engineer at <a href="https://usemultiplier.com">usemultiplier.com</a>.
            </p>
          </div>
        )}
        {activeTab === 'Acko' && (
          <div className="tab-content">
            <h3>DevOps Engineer - Acko</h3>
            <p>Jan 2022 - Jan 2024</p>
            <p>
              Worked as DevOps engineer at <a href="https://acko.com">acko.com</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
