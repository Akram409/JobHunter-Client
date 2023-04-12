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
import Home from './Component/Home/Home';
import FeaturedJobDetails from './Component/FeaturedJobDetails/FeaturedJobDetails';
import Error from './Component/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch("FeaturedJobs.json")
      },
      {
        path: '/statistic',
        element: <Statistic />,
        loader: () => fetch("Assignment.json")
      },
      {
        path: '/jobs',
        element: <AppliedJobs />,
        loader: () => fetch("FeaturedJobs.json")
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/featuredJob/:id',
        element: <FeaturedJobDetails />,
      },
      // {
      //   path: "*",
      //   element: <Error />,
      // }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
