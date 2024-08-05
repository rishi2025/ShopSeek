import React from 'react';
import './App.css';
import Button from './components/Button.jsx';

function App() {

  return (
    <div>
      <Button
        text={"JOIN"}
        subText={"NOW!"}
        bgColor={"bg-gradient-to-r from-customColors-lightPurple to-customColors-offWhite"}
        className={'text-xl w-64 h-14 shadow-sm shadow-black'}
        round={false}
      />
    </div>
  )
}

export default App
