import React from 'react'
import { useState } from 'react'
import './Header.scss'

const Header = ({displayNav, setDisplayNav}) => {
    const [filtersClassName, setFiltersClassName] = useState("filters");
    
    const toggleFiltersClassName = () => {
        setDisplayNav(!displayNav);
        if (filtersClassName == "filters") {    
            setFiltersClassName('close')
        }
        else {
            setFiltersClassName('filters')
        }
    }

  return (
    <div className='header'>
        <button className={`header__${filtersClassName}`} onClick={toggleFiltersClassName}>{filtersClassName}</button>
        <h1 className='header__'>Crypto Currency API</h1>
        <h2 className='header__name'>Omar Karame</h2>
    </div>
  )
}

export default Header