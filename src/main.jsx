import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import FastFoods from './Foods/FastFoods.jsx';
import MixFoods from './MixFoods/MixFoods.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root, 
    children: [
      {index: true, Component: Home},

      {
        path: '/fast-foods',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        Component: FastFoods
      },
      {
        path: '/mix-foods',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c'),
        Component: MixFoods
      }

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
