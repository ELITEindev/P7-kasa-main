import React from 'react';

function Banner({title, imgBackground}) {
    return (
        <div className="banner">
            <h1 className='banner_title'>{title}</h1>
            <img src={imgBackground} alt='Bannière Kasa' className='banner_img' />
        </div>
    )
}

export default Banner;