import './Nav.scss';
import { useState, useEffect } from 'react';

const Nav = ({setCards}) => {
    const [positiveChange, setPositiveChange] = useState(false);
    const [negativeChange, setNegativeChange] = useState(false);
    const [priceBelow, setPriceBelow] = useState(false);

    // research a way to create one function to take on the task of the three below (use the event keyword)
    const togglePositiveChange = () => {
        setPositiveChange(!positiveChange);
        setCards(positiveChange, negativeChange, priceBelow);
    }

    const toggleNegativeChange = () => {
        setNegativeChange(!negativeChange);
        setCards(positiveChange, negativeChange, priceBelow);
    }

    const togglePriceBelow = () => {
        setPriceBelow(!priceBelow);
        setCards(positiveChange, negativeChange, priceBelow);
    }

  return (
    <div className='nav'>
        <div className='positive-change'>
            <input type="checkbox" className='positive-change__input' onClick={togglePositiveChange}/>
            <label htmlFor="positive-change">Coins that are increasing in value</label>
        </div>
        <div className='negative-change'>
            <input type="checkbox" className='negative-change__input' onClick={toggleNegativeChange}/>
            <label htmlFor="positive-change">Coins that are decreasing in value</label>
        </div>
        {/* Add search bar, a button to filter, and a button to reset */}
    </div>
  )
}

export default Nav