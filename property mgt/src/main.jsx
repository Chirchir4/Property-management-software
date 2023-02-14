import React from 'react'
import { render } from "react-dom";
import { BrowserRouter, Router } from 'react-router-dom'
import App from './App'
import './index.css'


const container = document.getElementById("root");
  render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  container
  )

