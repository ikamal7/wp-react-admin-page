import React from 'react';
import ElementPlus from '../icons/ElementPlus';

const Product = () => {
  return (
    <div className='wpb-sidebar-block'>
      <div className='wpb-admin-sidebar-logo'>
        <ElementPlus />
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
