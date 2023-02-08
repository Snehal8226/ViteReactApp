import { Typography } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Confirm from './Confirm';
import ErrorPage from './error-page';
import Home from './Home';
import './index.css'
import SimpleNavigation from './SimpleNavigation';
import Submissionform from './Submissionform';
import Success from './Success';
import Welcome from './welcome';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleNavigation />, 
    children: [
      {
  
        path: "/welcome",
        element: <Welcome />,
      },
      {
  
        path: "/Submissionform",
        element: <Submissionform />,
      },
      {
        path: "/confirm",
        element:<Confirm />
        },
       {
        path: "/success",
        element:<Success />
        },
        {
          path: "/home",
          element:<Home />
          },
    ]                          //element: <Typography variant='h1'>Hello World...!</Typography>
    
  },
  {
    path: "/test-route",
    element: <Typography variant='h3'>Test Route......!</Typography>
  },
  
  /*{
  
    path: "/errorpage",
    element: <ErrorPage />
  },*/
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
