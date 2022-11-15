import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

//components
import Root from './components/landing-root';
import ErrorPage from './components/errorpage';
import Login from './components/login';
import Dashboard from './components/dashboard';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,

  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)



