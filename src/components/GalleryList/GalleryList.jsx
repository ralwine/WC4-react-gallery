//import galleryItems from '../../../server/modules/gallery.data.js';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({galleryList,likeClick}) {
    console.log('hey in list!' )
    return (
        <div className="GalleryList">
            {galleryList.map((gallery) =>{
                return <GalleryItem key={gallery.id} galleryItems={gallery} likeClick={likeClick}/>
            })} 
        </div>
    )
}

export default GalleryList;

