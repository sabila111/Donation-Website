import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './component/layout/MainLayout.jsx';
import Home from './component/home/Home.jsx';
import Donation from './component/donation/Donation.jsx';
import Statistics from './component/statistics/Statistics.jsx';
import ErrorPage from './component/error/ErrorPage.jsx';
import DonatioCardDetail from './component/donationCardDetail.jsx/DonatioCardDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('/cardsDonation.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donationCardDetail/:id",
        element: <DonatioCardDetail></DonatioCardDetail>,
        loader:()=> fetch('/cardsDonation.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
