import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Scrape from '../python-web-scrape/Scrape'
import './global.css'
import './fonts.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Scrape />
  </React.StrictMode>
)
