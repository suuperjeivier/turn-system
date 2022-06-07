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
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new W3CWebSocket('ws://127.0.0.1:8080');

client.onopen = (conn) => {
  console.log('WebSocket Client Connected');
  localStorage.setItem('turnNumber', 1);
};

//db
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwhcqRAQmDV4FuLrGGhw9hCQWkfSgjvbQ",
  authDomain: "turnos-web-bee2d.firebaseapp.com",
  projectId: "turnos-web-bee2d",
  storageBucket: "turnos-web-bee2d.appspot.com",
  messagingSenderId: "459950778019",
  appId: "1:459950778019:web:9dcaaba7e76abfb7250116",
  measurementId: "G-L00FEXV2R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

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
