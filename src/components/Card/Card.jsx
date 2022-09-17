import './Card.scss'
import { useState, useEffect } from 'react';

const Card = (props) => {
    const {symbol, name, icon, price, priceChange} = props;
    const roundedPrice = Math.round(parseFloat(price) * 1000) / 1000;

  return (
    <div className='card'>
        <h2>{symbol}</h2>
        <img src={icon} alt="icons" width={100} className=""/>
        <h2>{name}</h2>
        <div className='card__price-info'>
            <h3>Price: ${roundedPrice}</h3>
            <h3>{priceChange}%</h3>
        </div>
    </div>
  )
}

export default Card