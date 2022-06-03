import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Table from './modules/queue';
import NewItem from './modules/new_item';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new W3CWebSocket('ws://127.0.0.1:8080');
client.onopen = (conn) => {
  console.log('WebSocket Client Connected');
  localStorage.setItem('turnNumber', 1);
};
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="nuevo" element={<NewItem client={client} />} />
      <Route path="turnos" element={<Table client={client} />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
