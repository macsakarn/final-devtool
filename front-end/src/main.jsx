import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainPage from "./page/Main";
import OTPPage from "./page/OTP";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="otp" element={<OTPPage />} />
    </Routes>
  </BrowserRouter>
)
