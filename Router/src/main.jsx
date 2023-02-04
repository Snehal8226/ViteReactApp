import { Typography } from '@mui/material';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Submissionform from '../../ViteFirstProj/src/components/Submissionform';
import './index.css'
import SimpleBottomNavigation from './simplebottomnavigation';




const router = createBrowserRouter([
  {
    path: "/",
    //element: <Typography variant='h1'>Hello World...!</Typography>
    element: <SimpleBottomNavigation />
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
