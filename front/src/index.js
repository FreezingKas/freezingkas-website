import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WriteUps from './components/WriteUps'
import Projects from './components/Projects'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="write-ups" element={<WriteUps/>} />
      <Route path="projects" element={<Projects/>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
