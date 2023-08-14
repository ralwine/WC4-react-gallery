import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { response } from 'express';
import GalleryList from '../GalleryList/GalleryList.jsx';
import getGallery from '../App/App.jsx'

function GalleryItem(props) {
    console.log('Liked', props.galleryItems.id)
    
    

    
    // now how do we get this image to change state?

    function likeClick() {
        console.log('Like!', props.galleryItems.id)
        axios.put(`/gallery/like/${props.galleryItems.id}`)
        .then((response)=>{
            console.log('response in client PUT', response)
            getGallery();
        })
        .catch((error)=>{
            alert ('NO LIKING RIGHT NOW')
            console.log('error in client side PUT', error)
        })
    }

    const [imgDesc, setImgDesc] = useState(false);

    const imageClick = () => {
        console.log('Image clicked!')
        setImgDesc(!imgDesc)
    }
    
    return (
        <>
            <div className="louieImages" onClick={imageClick}>

                {imgDesc ? <p>{props.galleryItems.description} </p> : <img src={props.galleryItems.path} />}

            </div>
            <div>
                <button onClick={likeClick}>Like🤙</button>
                <p id="likes">{0} Non-haters!</p>
            </div>
        </>
    );

}

export default GalleryItem;