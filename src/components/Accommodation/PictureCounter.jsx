import React from 'react';

function PictureCounter({ pictures, pictureIndex }) {
    // Ne pas afficher le compteur s'il n'y a qu'une seule image
    if (pictures.length <= 1) {
        return null;
    }
    
    return (
        <div className='picture_counter'>
            {pictureIndex + 1}/{pictures.length}
        </div>
    )
}

export default PictureCounter;