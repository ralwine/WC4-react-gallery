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
    }
    return (
        <div className="louieImages">
            <img onClick={imageClick} src={props.galleryItems.path} />
            {imgDesc && <p>{props.galleryItems.description}</p>}
            <button onClick={likeClick}>Like🤙</button>
        </div>
    );

}

export default GalleryItem;