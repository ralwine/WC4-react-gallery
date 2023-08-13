import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import GalleryList from '../GalleryList/GalleryList.jsx';

function GalleryItem(props) {
    
    return (<>
        
        <img src={props.galleryItems.path} />

    </>);
    
}

export default GalleryItem;