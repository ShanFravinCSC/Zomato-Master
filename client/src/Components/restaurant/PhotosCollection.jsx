import React from 'react';

const PhotosCollection = (props) => {
    return (
        <>
            <div className="w-40 h-40 md:w-48 md:h-48 flex flex-col"
                onClick={props.openViewer}
            >
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img 
                        src={props.image} 
                        alt="menu" 
                        className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110" 
                    />
                </div>
            </div> 
        </>
    )
}

export default PhotosCollection;


