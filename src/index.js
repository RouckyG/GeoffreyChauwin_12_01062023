import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Error from './pages/error/Error';
import TopNavBar from './components/topNavBar/TopNavBar';
import LeftNavBar from './components/leftNavBar/LeftNavBar';
import FetchUserData from './utils/FetchUserData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <LeftNavBar/>
        <TopNavBar/>
        <Routes>
          <Route exact path="/" element={<Dashboard />}/>
          <Route path="/user/:id" element={<FetchUserData />}/>
          <Route exact path="/*" element={<Error />}/>
        </Routes>
    </Router>
  </React.StrictMode>
);

