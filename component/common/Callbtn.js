import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const CallNowBanner = () => {
  return (
    <div className="call-now-banner">
      <div className="call-icon">
        <FaPhoneAlt />
      </div>
      <div className="call-text">
        <span className="call-now">CALL US NOW</span>
        <span className="phone-number"><a href="tel:++1(855) 236-1030" className='text-decoration-none text-white'>+1(855) 236-1030</a></span>
      </div>
    </div>
  );
};

export default CallNowBanner;
