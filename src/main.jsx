import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { LoginForm, SellerPage, SignupForm, Home, PageNotFound } from './pages/MainPage.jsx';
import { InDealsPage, PurchasesPage,OutDealsPage,ProductPage, SellerDashboard, BuyerDashboard, BuyerProfilePage, SellerProfilePage, AddProduct } from './components/mainComponent.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import BuyerPage from './pages/BuyerPage.jsx';

//TO BE CHANGED FOR BUYER
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<SignupForm />} />
      <Route path='/seller' element={<SellerPage />}>
        <Route path='' element={<SellerDashboard />} />
        <Route path='dashboard' element={<SellerDashboard />} />
        <Route path='products' element={<ProductPage/>} />
        <Route path='chats' element={<>Chats Page Under construction</>} />
        <Route path='out-deals' element={<OutDealsPage/>} />
        <Route path='sells' element={<PurchasesPage />} />
        <Route path='your-info' element={<SellerProfilePage />} />
      </Route>
      <Route path='/buyer' element={<BuyerPage />}>
        <Route path='' element={<BuyerDashboard />} />
        <Route path='dashboard' element={<BuyerDashboard />} />
        <Route path='add-products' element={<AddProduct />} />
        <Route path='chats' element={<>Chats Page Under construction</>} />
        <Route path='in-deals' element={<InDealsPage/>} />
        <Route path='purchases' element={<PurchasesPage />} />
        <Route path='your-info' element={<BuyerProfilePage />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);