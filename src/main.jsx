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
import ProductList from './components/ProductList/ProductList.jsx';
import NewProduct from './components/NewProduct/NewProduct.jsx';
import Category from './components/Category/Category.jsx';
import Texttile from './components/Textile/Texttile.jsx';
import PendingOrder from './components/PendingOrder/PendingOrder.jsx';
import DeliveredOrder from './components/DeliveredOrder/DeliveredOrder.jsx';
import Discount from './components/Discount/Discount.jsx';
import Registration from './components/Registration/Registration.jsx';
// import Discount from '@mui/icons-material';

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
      },
      {
        path: '/productlist',
        element: <ProductList />
      },
      {
        path: '/newproduct',
        element: <NewProduct />
      },
      {
        path: '/category',
        element: <Category />
      },
      {
        path: '/textile',
        element: <Texttile />
      },
      {
        path: '/pendingOrder',
        element: <PendingOrder />
      },
      {
        path: '/deliveredOrder',
        element: <DeliveredOrder />
      },
      {
        path: '/discount',
        element: <Discount />
      },
      {
        path: '/registration',
        element: <Registration />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
