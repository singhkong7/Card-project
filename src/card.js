import React from "react";
import './card.scss';
const  Card= ({id ,name, price}) =>
{
    return (
        <div className='card'>
                <h2>{name}</h2>
                <span>{price}</span>
            </div>


    );
    
};
export default Card;