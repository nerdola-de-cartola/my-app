import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App2 title='Hello World'>
      Today is gonna be a great day
    </App2>

    <App2 title='Hello Again'>
      Tomorrow is gonna be a better day
    </App2>

    <App3>

    </App3>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
