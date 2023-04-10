import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistic from './Component/Statistic/Statistic';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import Blog from './Component/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/statistic',
        element: <Statistic />,
      },
      {
        path: '/jobs',
        element: <AppliedJobs />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
