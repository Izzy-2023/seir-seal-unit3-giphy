// App.js

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Gif from "./components/Gif"

function App() {
  const [gifSource, setGifSource] = useState({});
  
  const handleSubmit = async () => {
    const apiKey = 'WN073PPq8eMoNuHwdmHpV5AceZhZHwa7';
    const gifSource = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

    try {
      let res = await fetch(gifSource);
      let json = await res.json();
      console.log(json);

      setGifSource(json);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  };

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Button handleSubmitApp={handleSubmit}/>
      {gifSource.data ? 
        <Gif gifSource={gifSource}/> 
        :
        <h2>Pull Random Gifs</h2>
      }
    </div>
  );
}

export default App;
