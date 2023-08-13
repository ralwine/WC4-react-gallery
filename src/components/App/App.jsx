import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList.jsx';
//import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function App() {

  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGallery();
  },[])

  // GET in here!
  const getGallery = () => {
    axios
      .get('/gallery')
      .then((response) => {
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
      <h2>He is the Louiest!</h2>
      <GalleryList
        galleryList={galleryList} />




    </div >
  );
}

export default App;


