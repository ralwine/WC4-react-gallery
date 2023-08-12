import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import axios from 'axios';

function App() {

  let [GalleryList, setGalleryList] = useState([]);

  useEffect(() =>{
    getGallery();
  })

  // GET in here!
  const getGallery = () =>{
    axios
      .get('/gallery')
      .then((response)=>{
        setGalleryList(response.data);
      })
      .catch((error) => {
        alert(`Failed to retrieve images.`)
        console.log('Error getting images in APP', error)
      })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Louie</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/louie_window.jpeg"/>
      </div>
    );
}

export default App;
