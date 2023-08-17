import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function App() {

  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGallery();
  },[]) 
  // ^ to avoid infinite console.logs in the future, use '[]'!

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

  function likeClick(id) {
    console.log('Like!', id)
    axios.put(`/gallery/like/${id}`)
    .then((response)=>{
        console.log('response in client PUT', response)
        getGallery();
    })
    .catch((error)=>{
        alert ('NO LIKING RIGHT NOW')
        console.log('error in client side PUT', error)
    })
}



  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Louie</h1>
      </header>
      <h2>He is the Louiest!</h2>
      <GalleryList
        galleryList={galleryList} getGallery={getGallery} likeClick={likeClick}/>
      
    </div >
  );
}

export default App;


