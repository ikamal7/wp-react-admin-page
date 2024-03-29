import { __ } from '@wordpress/i18n';

const Contribute = () => {
  return (
    <div className='wpb-admin-block wpb-admin-block-contribution'>
      <header className='wpb-admin-block-header'>
        <div className='wpb-admin-block-header-icon'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 46 45.69'>
            <defs></defs>
            <title>Bugs</title>
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_1-2' data-name='Layer 1'>
                <path
                  className='flexia-icon-bug'
                  d='M18.87,28.37,9.16,38.08A8.66,8.66,0,0,0,14.49,40h4.38a9.55,9.55,0,0,0,2.28-.38v5.14a1,1,0,0,0,1.9,0v-5.9A4.83,4.83,0,0,0,25,37.31l.76-.76a.92.92,0,0,0,0-1.33Z'
                ></path>
                <path
                  className='flexia-icon-bug'
                  d='M11.64,21.13c-.19-.19-.57-.38-.76-.19H9c-.38,0-.57,0-.76.38L7.07,23H1.17a1,1,0,1,0,0,1.9H6.31a9.56,9.56,0,0,0-.38,2.28V31.6a8.66,8.66,0,0,0,1.9,5.33l9.71-9.71Z'
                ></path>
                <path
                  className='flexia-icon-bug'
                  d='M24.39,14.47c.19.19.38.19.76.19a.7.7,0,0,0,.57-.19.92.92,0,0,0,.38-1.14,11.08,11.08,0,0,1-1-3,.87.87,0,0,0-1-.76H22.3a1,1,0,0,0-.76.38,1.14,1.14,0,0,0-.19.76,2.35,2.35,0,0,0,.76,1.52Z'
                ></path>
                <path
                  className='flexia-icon-bug'
                  d='M35.81,28.56h3.43a1,1,0,0,0,0-1.9H33.91L20.77,13.52A5.2,5.2,0,0,1,19.25,9.9V6.66a.9.9,0,0,0-1-1h-.19A13.52,13.52,0,0,0,16.21,3,9.12,9.12,0,0,0,9.54,0a9.71,9.71,0,0,0-5.9,2.09,1.44,1.44,0,0,0-.38.76,1,1,0,0,0,.38.76L9.54,7a5.39,5.39,0,0,1-2.86,4.19l-5.14-3a.85.85,0,0,0-1,0c-.38.19-.57.38-.57.76a8.9,8.9,0,0,0,2.67,7,9.53,9.53,0,0,0,6.85,3,4.1,4.1,0,0,0,2.09-.38L26.87,33.89,37.15,44.17a5.2,5.2,0,0,0,3.62,1.52,5,5,0,0,0,4.95-4.95,5.2,5.2,0,0,0-1.52-3.62Z'
                ></path>
                <path
                  className='flexia-icon-bug'
                  d='M34.86,24.75c.19.19.38.19.76.19H36a1,1,0,0,0,.57-1V21.51c0-.38-.38-1-.76-1a7,7,0,0,1-3.43-.76.92.92,0,0,0-1.14.38c-.19.38-.19,1,.19,1.14Z'
                ></path>
                <path
                  className='flexia-icon-bug'
                  d='M45.71,9.9c-1.52-1.52-5.14-.38-7,.57L35.81,7.62c.76-2.09,1.9-5.71.57-7a.92.92,0,0,0-1.33,0,.92.92,0,0,0,0,1.33c.38.38,0,2.67-1,5.14L28,8a.87.87,0,0,0-.76,1C26.87,14.28,31.63,19,37.34,19c.38,0,1-.38,1-.76l1-6.09c2.47-1,4.76-1.33,5.14-1A.94.94,0,1,0,45.71,9.9Z'
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <h4 className='wpb-admin-title'>Contribute to Guten Plus</h4>
      </header>
      <div className='wpb-admin-block-content'>
        <p>
          You can contribute to make Guten Plus better reporting bugs,
          creating issues, pull requests at{' '}
          <a
            href='https://github.com/WPBranch'
            target='_blank'
          >
            Github.
          </a>
        </p>
        <a
          href='https://github.com/WPBranch'
          className='button button-primary'
          target='_blank'
        >
          Report a bug
        </a>
      </div>
    </div>
  );
};

export default Contribute;
