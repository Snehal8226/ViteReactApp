import { Typography } from '@mui/material';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SipleNavigation from './SipleNavigation';
import Submissionform from '../../ViteFirstProj/src/components/Submissionform';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    //element: <Typography variant='h1'>Hello World...!</Typography>
    element: <SipleNavigation />
  },
  {
    path: "/test-route",
    element: <Typography variant='h3'>Test Route......!</Typography>
  },
  {
    path: "/Submissionform",
    element: <Submissionform />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
