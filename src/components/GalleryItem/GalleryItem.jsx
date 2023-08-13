import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import GalleryList from '../GalleryList/GalleryList.jsx';

function GalleryItem(props)   {
    
    const imageClick = () => {
        console.log('Image clicked!')
    }
    
    return (
        
        <img onClick= {imageClick} src={props.galleryItems.path} />


    );
   
}

export default GalleryItem;