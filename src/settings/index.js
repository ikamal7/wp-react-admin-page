import { render } from '@wordpress/element';
import App from './App';

// setTimeout( () => {
//     render(
//         <App />,
//         document.getElementById( 'sl-app' )
//     );

// }, 0 );


render(
    <App />,
    document.getElementById( 'rbasp-app' )
);