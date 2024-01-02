import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Home from './components/Layout/Home.jsx';
import Men from './components/Men/Men.jsx';
import Women from './components/Women/Women.jsx';
import Kids from './components/Kids/Kids.jsx';
import OrderReview from './components/OrderReview/OrderReview.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import OrderHistory from './components/OrderHistory/OrderHistory.jsx';
import Login from './components/Login/Login.jsx';
import UserList from './components/UserList/UserList.jsx';
// import ProductDetails from './components/ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <MainPage></MainPage>
      },
      // {
      //   path: '/shop',
      //   element: <ProductDetails></ProductDetails>
      // },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/men',
        element: <Men></Men>,
      },
      {
        path: '/women',
        element: <Women></Women>
      },
      {
        path: '/kids',
        element: <Kids></Kids>
      },
      {
        path: '/orderhistory',
        element: <OrderHistory></OrderHistory>
      },
      {
        path: '/productDetails',
        element: <ProductDetails />
      },
      {
        path: '/orderReview',
        element: <OrderReview />
      },
      {
        path: '/userlist',
        element: <UserList />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
