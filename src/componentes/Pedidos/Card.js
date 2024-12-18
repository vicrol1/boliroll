import React from 'react'
import bolis from '../../Assets/bolis.jpg'
import './Card.css'

function Card(props) {
    return ( <>
    
        <div className='card'>
            <img src={bolis}></img>
            <div>{props.nombre}</div>
            <div>{props.price}</div>

        </div>
    
    </> );
}

export default Card;