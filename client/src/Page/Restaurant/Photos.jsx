import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

//Component
import PhotosCollection from '../../Components/restaurant/PhotosCollection';

const Photos = () => {
    const [photos, setPhotos] = useState
                                    (["https://b.zmtcdn.com/data/pictures/1/19170081/f256137cc40af547a542f7ca4b37dbd7.jpg",
                                        "https://b.zmtcdn.com/data/pictures/1/19170081/39733a51923278db60c04cbca093dea7.jpg",
                                    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);
    return (
        <>
                {isMenuOpen && (
                    <ImageViewer
                        src={ photos }
                        currentIndex={ CurrentImg }
                        disableScroll={ false }
                        onClose={ closeViewer }
                    />
                )}
                <div className="flex flex-wrap gap-2">
                {
                    photos.map((photo) => (
                        <PhotosCollection image={photo} openViewer={openViewer}/>
                    ))
                }
            </div>
        </>
    )
}

export default Photos;
