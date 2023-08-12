// import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({galleryList}) {
    return (
        <>
            

            {galleryList?.map(galleryItems => (


                <img src={galleryItems.path} />


            ))}
        </>);
}

export default GalleryList;
