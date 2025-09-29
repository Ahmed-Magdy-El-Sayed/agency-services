import React from 'react';
import ReactDOM from 'react-dom/client';
import './Sass/index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root');
if(rootElement){
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <BrowserRouter /* basename={"/ReactApp"} */>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}else {
  console.error('Root element not found');
}
