import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import GalleryList from '../GalleryList/GalleryList.jsx';

function GalleryItem(props) {
    const [imgDesc, setImgDesc] = useState(false);

    const imageClick = () => {
        console.log('Image clicked!')
        setImgDesc(!imgDesc)
    }
    // now how do we get this image to change state?

    const likeClick = () =>{
        console.log('Liked')
        //axios.put('gallery/likes/')
    }
    return (
        <div className="louieImages" onClick={imageClick}>
            
            {imgDesc ? <p>{props.galleryItems.description} </p> : <img src={props.galleryItems.path}/>}
            <button onClick={likeClick}>Like🤙</button>
        </div>
    );

}

export default GalleryItem;