import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import GalleryList from '../GalleryList/GalleryList.jsx';

function GalleryItem(props) {

    const imageClick = () => {
        console.log('Image clicked!')
    }
    // now how do we get this image to change state?

    const likeClick = () =>{
        console.log('Liked')
    }
    return (
        <>
            <img onClick={imageClick} src={props.galleryItems.path} />
            <button onClick={likeClick}>Like🤙</button>
        </>
    );

}

export default GalleryItem;