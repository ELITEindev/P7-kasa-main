import React, { useState } from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import PictureCounter from './PictureCounter';

function Carousel({ pictures, title }) {
    const [pictureIndex, setPictureIndex] = useState(0);

    const handleArrowClick = (direction) => {
        // Calculate the new index of the image according to the direction
        let newPictureIndex;
        if (direction === 'previous') {
            newPictureIndex = pictureIndex === 0 ? pictures.length - 1 : pictureIndex - 1;
        } else if (direction === 'next') {
            newPictureIndex = pictureIndex === pictures.length - 1 ? 0 : pictureIndex + 1;
        }

        // Updates the state with the new image index
        setPictureIndex(newPictureIndex);
    };

    return (
        <section className='carousel'>
            <img
                src={pictures[pictureIndex]}
                alt={`${title} ${pictureIndex + 1}`}
            />
            <PictureCounter pictures={pictures} pictureIndex={pictureIndex} />
            {pictures.length > 1 && (
                <div className='carousel_arrows'>
                    <div
                        className='carousel_arrow'
                        onClick={() => handleArrowClick('previous')}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} className='arrow' />
                    </div>
                    <div
                        className='carousel_arrow'
                        onClick={() => handleArrowClick('next')}
                    >
                        <FontAwesomeIcon icon={faAngleRight} className='arrow' />
                    </div>
                </div>
            )}
        </section>
    )
}

export default Carousel;

