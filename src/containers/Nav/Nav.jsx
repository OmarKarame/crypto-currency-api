import './Nav.scss';
import { useState, useEffect } from 'react';

const Nav = (props) => {
    const {positiveChange, setPositiveChange, negativeChange, setNegativeChange, priceBelow, setPriceBelow, setPriceValue} = props;

    const toggleChange = (event) => {
        if (event.target.value == "positive-change") {
            setPositiveChange(!positiveChange);
        }
        else if (event.target.value == "negative-change") {
            setNegativeChange(!negativeChange);
        }
        else if (event.target.value == "price-below__search"){
            setPriceBelow(true);
        }
        else if (event.target.value == "price-below__stop"){
            setPriceBelow(false);
        }
    }

    const togglePriceValue = (event) => {
        if (priceBelow) {
            setPriceValue(event.target.value);
        }
    }

  return (
    <div className='nav'>
        <div className='positive-change'>
            <input type="checkbox" className='positive-change__input' value="positive-change" onClick={toggleChange}/>
            <label htmlFor="positive-change">Coins that are increasing in value</label>
        </div>
        <div className='negative-change'>
            <input type="checkbox" className='negative-change__input' value="negative-change" onClick={toggleChange}/>
            <label htmlFor="negative-change">Coins that are decreasing in value</label>
        </div>
        <div className='price-below'>
            <input type="text" className="search-box" placeholder="Below value..." onChange={togglePriceValue}/>
            <button value="price-below__search" onClick={toggleChange}>Search</button>
            <button value="price-below__stop" onClick={toggleChange}>Stop</button>
        </div>
    </div>
  )
}

export default Nav