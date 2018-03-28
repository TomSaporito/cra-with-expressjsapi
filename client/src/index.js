import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { lazyStyles } from './utils/utilities';
import registerServiceWorker from './registerServiceWorker';










document.addEventListener('DOMContentLoaded', function(){
    lazyStyles(document.querySelectorAll('[data-lazy-style="bootstrap"]'), true, 'afterBegin', function(){
        ReactDOM.render(<App/>, document.getElementById('root'));
        registerServiceWorker();
    });
})

