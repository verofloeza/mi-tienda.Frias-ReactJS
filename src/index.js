import './index.css';

import App from './App';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyB0jmkSYTQYGjJCPAQ6wMyxPqfO1brDiuw",
  authDomain: "mitienda-reactjs.firebaseapp.com",
  projectId: "mitienda-reactjs",
  storageBucket: "mitienda-reactjs.appspot.com",
  messagingSenderId: "374751160255",
  appId: "1:374751160255:web:23bcf3a74bc1d41f85630a"
};

 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
        <App />

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
