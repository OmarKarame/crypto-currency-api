import './SearchBar.scss'

const SearchBar = ({handleCards}) => {
    const search = (event) => {
        handleCards(event.target.value)
    }
  return (
    <div className='search-bar'>
        <input type="text" onChange={search} placeholder="Search" className="search-bar__input"/>
    </div>
  )
}

export default SearchBar