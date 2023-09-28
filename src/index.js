import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isname = false;

root.render(
// 
  // --- more than one h1 tagsss
  // <>  
  // <h1 >Hello WOred {2+23} {isname ? 'Jonny' : "gudda"}</h1>
  
  // <h1>sdfddf</h1>
  
  // </>

    <React.StrictMode>
      <App />
    </React.StrictMode>
    
);


reportWebVitals();
