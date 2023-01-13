import React from 'react';

const Community = () => {
  return (
    <div className='wpb-admin-block wpb-admin-block-community'>
      <header className='wpb-admin-block-header'>
        <div className='wpb-admin-block-header-icon'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 46 41.82'>
            <defs></defs>
            <title>Like</title>
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_1-2' data-name='Layer 1'>
                <g id='thumb-up'>
                  <path
                    className='cls-1'
                    d='M0,41.82H8.36V16.73H0Zm46-23a4.19,4.19,0,0,0-4.18-4.18H28.65L30.74,5V4.39a4.39,4.39,0,0,0-.84-2.3L27.6,0,13.8,13.8a3.51,3.51,0,0,0-1.25,2.93V37.64a4.19,4.19,0,0,0,4.18,4.18H35.55a4.13,4.13,0,0,0,3.76-2.51l6.27-14.85A3.56,3.56,0,0,0,45.79,23V18.82H46Z'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h4 className='wpb-admin-title'>Join the Community</h4>
      </header>
      <div className='wpb-admin-block-content'>
        <p>
          Join the Facebook community and discuss with fellow developers and
          users. Best way to connect with people and get feedback on your
          projects.
        </p>

        <a
          href='http://www.facebook.com/groups/'
          className='button button-primary'
          target='_blank'
        >
          Join Facebook Community
        </a>
      </div>
    </div>
  );
};

export default Community;
