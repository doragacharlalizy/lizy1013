import React from 'react';
import './Table.css'; // Import your CSS file for styling

const Tabs = ({ activeTab, onTabChange }) => {
  return (
    <div>
      {/* Personal Information */}
      <div className="personal-info">
        <div className="name">D. Lizy</div>
        <div className="email">lizydoragacharla@gmail.com</div>
        <div className="contact-number">8106868075</div>
      </div>

      {/* Tabs Container */}
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === 'table' ? 'active' : ''}`}
          onClick={() => onTabChange('table')}
          disabled={activeTab === 'table'}
        >
          Table
        </button>
        <button
          className={`tab-button ${activeTab === 'chart' ? 'active' : ''}`}
          onClick={() => onTabChange('chart')}
          disabled={activeTab === 'chart'}
        >
          Chart
        </button>
      </div>
    </div>
  );
};

export default Tabs;
