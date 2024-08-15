import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { LoginForm, SellerPage, SignupForm, Home } from './pages/MainPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: 
          // <AuthLayout authentication={false}>
            <Home />
          // </AuthLayout>
        ,
      },
      {
        path: '/login',
        element: 
          // <AuthLayout authentication={false}>
            <LoginForm />
          // </AuthLayout>
        ,
      },
      {
        path: "/signup",
        element: (
          // <AuthLayout authentication={false}>
              <SignupForm />
          // </AuthLayout>
        ),
      },
      {
        path: "/seller",
        element: (
          // <AuthLayout authentication={false}>
              <SellerPage />
          // </AuthLayout>
        ),
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
