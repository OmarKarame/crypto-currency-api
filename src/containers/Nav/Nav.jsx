import React from 'react';
import { useState } from 'react';

const Nav = ({setCards}) => {
    const [positiveChange, setPositiveChange] = useState(false);
    const [negativeChange, setNegativeChange] = useState(false);
    const [priceBelow, setPriceBelow] = useState(false);

    //create a function that determines which filters are used
    const toggleFilter = (variable, setVariable) => {
        setVariable(!variable);
        setCards(positiveChange, negativeChange, priceBelow)
    }

  return (
    <div className='nav'>
        <div className='positive-change'>
            <input type="checkbox" className='positive-change__input' onClick={toggleFilter(positiveChange, setPositiveChange)} />
            <label htmlFor="positive-change">Coins that are increasing in value</label>
        </div>
        <div className='negative-change'>
            <input type="checkbox" className='negative-change__input' onClick={toggleFilter(negativeChange, setNegativeChange)} />
            <label htmlFor="positive-change">Coins that are decreasing in value</label>
        </div>
    </div>
  )
}

export default Nav