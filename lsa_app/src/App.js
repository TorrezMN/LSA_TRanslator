import logo from './logo.svg';
import './g_assets/fonts/lsa.ttf';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [text_to_show, setTextToShow] = useState("");


   const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setTextToShow(text_to_show + " " + event.target.value);
    }
    if (event.key === 'Escape') {
      setTextToShow(' ');
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <center>
          <input 
    className='input_text_orig' 
    type='text' 
    id='text_orig'  
    placeholder = 'Escriba aqui.'
    onKeyDown={handleKeyDown} ></input>
        </center>
        <center>
          <p className="texto_prueba">
            {text_to_show}
          </p>
        </center>
      </header>
    </div>
  );
}

export default App;
