import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript and Popper.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { GoogleAuth } from './GoogleAuth.jsx';
import { Auth0Provider, useAuth0  } from '@auth0/auth0-react';
const router = createBrowserRouter([
  {
    path:"/",
    element:<GoogleAuth/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Auth0Provider
    domain="dev-x04tf7uf3dce71s4.us.auth0.com"
    clientId="NulSlhId7FbB7Ldc6b8XktfLo3Ts2DHu"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
    
  </Auth0Provider>,
    
  </React.StrictMode>,
)
