import React from 'react';
import './App.css';
import {Header, Footer, Container} from './components/mainComponent.jsx';
import { Home, SellerPage } from './pages/MainPage.jsx';
import SignupForm from './pages/SingupForm.jsx';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <main>
      {<Outlet />}
    </main>
  )
}

export default App
