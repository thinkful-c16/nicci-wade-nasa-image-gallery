import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import photos from './dummy-rover.json';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App photos={photos}/>, document.getElementById('root'));
registerServiceWorker();
