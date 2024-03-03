import React from 'react';
import WpbIcon from '../icons/WpbIcon';

const Product = () => {
  return (
    <div className='wpb-sidebar-block'>
      <div className='wpb-admin-sidebar-logo'>
        <WpbIcon />
      </div>
      <div className='wpb-admin-sidebar-cta'>
        <a href='https://wpbranch.com/' target='_blank'>
          Explore Demos
        </a>
      </div>
    </div>
  );
};

export default Product;
