//import galleryItems from '../../../server/modules/gallery.data.js';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList(props) {
    console.log('hey in list!', props)
    return (
        <>
            {props.galleryList.map((galleryList) =>{
                return <GalleryItem key={galleryList.id} galleryItems={galleryList} />
            })} 
        </>
    )
}

export default GalleryList;

