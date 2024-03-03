import React from 'react';
import { __ } from '@wordpress/i18n';

const Docs = () => {
  return (
    <div className='wpb-admin-block wpb-admin-block-docs'>
      <header className='wpb-admin-block-header'>
        <div className='wpb-admin-block-header-icon'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 46 46'>
            <defs></defs>
            <title>{__('Documentation', 'domain')}</title>
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_1-2' data-name='Layer 1'>
                <rect
                  className='cls-1'
                  x='15.84'
                  y='17.13'
                  width='14.32'
                  height='1.59'
                ></rect>
                <rect
                  className='cls-1'
                  x='15.84'
                  y='24.19'
                  width='14.32'
                  height='1.59'
                ></rect>
                <rect
                  className='cls-1'
                  x='15.84'
                  y='20.66'
                  width='14.32'
                  height='1.59'
                ></rect>
                <path
                  className='cls-1'
                  d='M23,0A23,23,0,1,0,46,23,23,23,0,0,0,23,0Zm5.47,9.9,4.83,4.4H28.47Zm-2.29,23v3.2H15.49a2.79,2.79,0,0,1-2.79-2.79V12.69A2.79,2.79,0,0,1,15.49,9.9H27.28v5.59h6V27.72H15.84v1.59H29.78v1.94H15.84v1.59H26.19Zm11.29,2.52H33.88V39H31.37V35.42H27.78V32.9h3.59V29.31h2.52V32.9h3.59Z'
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <h4 className='wpb-admin-title'>{__('Documentation', 'domain')}</h4>
      </header>
      <div className='wpb-admin-block-content'>
        <p>
          Get started by spending some time with the documentation to get
          familiar with Guten Plus. Build awesome websites for you or your
          clients with ease.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam enim eos aspernatur cupiditate esse at inventore deserunt accusantium praesentium quis, est eius consequatur, placeat ducimus delectus dignissimos, vero et consectetur.</p>
        <a
          href='https://wpbranch.com/docs/'
          className='button button-primary'
          target='_blank'
        >
          Documentation
        </a>
      </div>
    </div>
  );
}

export default Docs;
