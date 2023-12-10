import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Movie from './pages/Movie.jsx';
import Search from './pages/Search.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App></App>}>
        <Route path='/' element={<Home/>}/>
        <Route path='movies/:id' element={<Movie/>}/>
        <Route path='search' element={<Search/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
