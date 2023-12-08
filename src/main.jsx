import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Men from './components/Men/Men.jsx';
import Women from './components/Women/Women.jsx';
import Kids from './components/Kids/Kids.jsx';
import MainPage from './components/MainPage/MainPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <MainPage></MainPage>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/men',
        element: <Men></Men>,
        // loader: cartProductLoader
      },
      {
        path: '/women',
        element: <Women></Women>
      },
      // {
      //   path: '/checkout',
      //   element: <Checkout></Checkout>
      // },
      {
        path: '/kids',
        element: <Kids></Kids>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
