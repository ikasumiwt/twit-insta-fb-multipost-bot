// index.js

import React from 'react';

import App from './app.js';

window.addEventListener( 'DOMContentLoaded', () => {

    let app = React.createElement( App, {} );
    React.render( app, document.body );
}, false );
