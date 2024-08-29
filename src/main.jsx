import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { LoginForm, SellerPage, SignupForm, Home } from './pages/MainPage.jsx';
import { PurchasesPage, SellerDashboard, ProfilePage } from './components/mainComponent.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<SignupForm />} />
      <Route path='/seller' element={<SellerPage />}>
        <Route path='' element={<SellerDashboard />} />
        <Route path='dashboard' element={<SellerDashboard />} />
        <Route path='products' element={<>Products Page Under construction</>} />
        <Route path='chats' element={<>Chats Page Under construction</>} />  
        <Route path='out-deals' element={<>Out Deals Page Under construction</>} />
        <Route path='sells' element={<PurchasesPage />} />
        <Route path='your-info' element={<ProfilePage />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
