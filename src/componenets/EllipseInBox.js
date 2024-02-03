import React from 'react';
import logoline from '../componenets/images/logoline.png';

const EllipseInBox = () => {
  const ellipseStyle = {
    width: '80.15px',
    height: '80.15px',
    top: '54.32px',
    left: '61.03px',
    background: '#FCFCFF',
    position: 'absolute',
    borderRadius: '50%',
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={ellipseStyle}></div>
      
    </div>
  );
};

export default EllipseInBox;
