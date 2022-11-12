import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';


export default function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
        <Textform heading="Enter the text to analyze below" mode={mode}/>
      </div>
    </>
  );
    
}
