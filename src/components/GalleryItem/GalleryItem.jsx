import { useState, useEffect } from 'react';
import axios from 'axios';
//import { response } from 'express';
import GalleryList from '../GalleryList/GalleryList.jsx';
import getGallery from '../App/App.jsx'

function GalleryItem({galleryItems, likeClick}) {
    console.log('Liked')
    
    
    const [imgDesc, setImgDesc] = useState(false);
    
    // now how do we get this image to change state?

    
    

    const imageClick = () => {
        console.log('Image clicked!')
        setImgDesc(!imgDesc)
    }
    
    return (
        <>
            <div className="louieImages" onClick={imageClick}>

                {imgDesc ? <p>{galleryItems.description} </p> : <img src={galleryItems.path} />}

            </div>
            <div>
                <button onClick={() => likeClick(galleryItems.id)}>Like🤙</button>
                <p id="likes">{galleryItems.likes} Non-haters!</p>
            </div>
        </>
    );

}

export default GalleryItem;