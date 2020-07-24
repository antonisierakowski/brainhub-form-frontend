import React from 'react';
import ReactDOM from 'react-dom';
import { createRootComponent } from './createRootComponent';
import App from './components/App';

ReactDOM.render(createRootComponent(<App />), document.getElementById('root'));
