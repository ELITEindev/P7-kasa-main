import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ id, title, cover }) {
    return ( 
        <Link className='card' to={`/accommodation/${id}`}>
            <div className='card_overlay'></div>
            <img className='card_img' src={cover} alt={title}/>
            <h2 className='card_title'>{title}</h2>
        </Link>
    )
}

export default Card;
