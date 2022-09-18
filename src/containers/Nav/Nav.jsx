import './Nav.scss';
import { useState, useEffect } from 'react';

const Nav = (props) => {
    const {positiveChange, setPositiveChange, negativeChange, setNegativeChange, priceBelow, setPriceBelow} = props;

    const toggleChange = (event) => {
        if (event.target.value == "positive-change") {
            setPositiveChange(!positiveChange);
        }
        else if (event.target.value == "negative-change") {
            setNegativeChange(!negativeChange);
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
        {/* Add search bar, a button to filter, and a button to reset */}
    </div>
  )
}

export default Nav