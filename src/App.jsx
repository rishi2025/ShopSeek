import React from 'react';
import './App.css';
import Home from './pages/Home';
import {Header, Footer, Container} from './components/mainComponent.jsx';

function App() {

  return (
    <Container className={'bg-gradient-to-r from-customColors-radialPurpleL to-customColors-radialPurpleD min-h-screen'} px='px-0'>
      <Header />
      <Home />
      <Footer />
    </Container>
  )
}

export default App
