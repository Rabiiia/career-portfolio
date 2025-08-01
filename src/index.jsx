import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 👈️ Her importeres App.jsx
import './input.css'; // <- Import your CSS here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);