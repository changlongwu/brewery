import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout.jsx';
import BreweryView from './routes/BreweryView.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <BrowserRouter>
  // <Routes>
  //   <Route path='/brewery/' element={<Layout/>}>
  //     <Route index={true} element={<App/>} />
  //     <Route index={false} path='/breweryDetail/:id' element={<BreweryView />} />
  //   </Route>
  // </Routes>
  // </BrowserRouter>
)
