import React from 'react';

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-bubble"></div>
        <div className="loader-bubble"></div>
        <div className="loader-bubble"></div>
      </div>
    </div>
  );
}

export default Loader;
