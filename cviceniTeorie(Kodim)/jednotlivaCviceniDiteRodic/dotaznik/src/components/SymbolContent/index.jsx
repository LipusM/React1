const c = console.log.bind(document)

import React from 'react';
import './style.css';

const SymbolContent = ({ type }) => {
    if (type === 'symbolQuestion') {
      return (
        <>
          <path
            fill="none"
            strokeWidth="8"
            d="m 73.083205,78.57419 c 10e-6,-14.79308 11.992188,-26.78528 26.785285,-26.78528 14.7931,0 26.78528,11.9922 26.78528,26.78528 0,21.42823 -26.78528,16.07117 -26.78528,37.4994"
          />
          <circle fill="#5a5a5a" cx="100" cy="142" r="8" />
        </>
      );
    }
  
    if (type === 'symbolTick') {
      return (
        <path 
          fill="none"
          strokeWidth="8"
          d="M 57.141863,94.671752 89.285972,126.81586 142.85949,73.242346"
        />
      )
    }
    
    return null;
  };

  export default SymbolContent