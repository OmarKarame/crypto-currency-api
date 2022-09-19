import './Main.scss';
import Nav from '../Nav/Nav';
import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import mockApi from '../../mockApi';
import SearchBar from '../../components/SearchBar/SearchBar';

const Main = ({displayNav}) => {
  const [coins, setCoins] = useState([]);
  const [coinCardsJSX, setCoinCardsJSX] = useState([]);
  const [priceValue, setPriceValue] = useState("");
  const [positiveChange, setPositiveChange] = useState(() => false);
  const [negativeChange, setNegativeChange] = useState(() => false);
  const [priceBelow, setPriceBelow] = useState(() => false);

  const getCoins = () => setCoins(mockApi.data.coins);

  useEffect(() => {
    getCoins()
    filterCards(positiveChange, negativeChange, priceBelow)
  }, [coins])

  useEffect(() => {
    filterCards(positiveChange, negativeChange, priceBelow, priceValue)
  }, [positiveChange, negativeChange, priceBelow, priceValue])

  const handleCards = (str) => {
    if (str != "") {
      searchCards(str)
    }
    else {
      filterCards(positiveChange, negativeChange, priceBelow, priceValue)
    }
  }

  const filterCards = (filterA, filterB, filterC, priceValue) => {
    console.log(filterC, priceValue);
    if ((!filterA && !filterB && !filterC) || (filterA && filterB && !filterC) || (filterA && filterB && filterC && priceValue == '') || (!filterA && !filterB && filterC && priceValue == '')) {
      setCoinCardsJSX(coins.map((coin, index) => {return <Card key = {index} symbol={coin.symbol} name={coin.name} icon={coin.iconUrl} price={coin.price} priceChange={coin.change}/>}))
    }
    else if ((filterA && filterB && filterC && priceValue != '') || (!filterA && !filterB && filterC && priceValue != '')) {
      setCoinCardsJSX(coins.filter((coin) => {return coin.price < parseFloat(priceValue)}).map((coin, index) => {return <Card key = {index} symbol={coin.symbol} name={coin.name} icon={coin.iconUrl} price={coin.price} priceChange={coin.change}/>}))
    }
    else if (filterA && !filterB && filterC && priceValue != '') {
      setCoinCardsJSX(coins.filter((coin) => {return coin.change > 0 && coin.price < parseFloat(priceValue)}).map((coin, index) => { return <Card key = {index} symbol={coin.symbol} name={coin.name} icon={coin.iconUrl} price={coin.price} priceChange={coin.change}/>}))
    }
    else if (!filterA && filterB && filterC && priceValue != '') {
      setCoinCardsJSX(coins.filter((coin) => {return coin.change < 0 && coin.price < parseFloat(priceValue)}).map((coin, index) => { return <Card key = {index} symbol={coin.symbol} name={coin.name} icon={coin.iconUrl} price={coin.price} priceChange={coin.change}/>}))
    }
    else if ((filterA && !filterB && !filterC) || (filterA && !filterB && filterC && priceValue == '')) {
      setCoinCardsJSX(coins.filter((coin) => {return coin.change > 0}).map((coin, index) => { return <Card key = {index} symbol={coin.symbol} name={coin.name} icon={coin.iconUrl} price={coin.price} priceChange={coin.change}/>}))
    }
    else if ((!filterA && filterB && !filterC) || (!filterA && filterB && filterC && priceValue == '')) {
      setCoinCardsJSX(coins.filter((coin) => {return coin.change < 0}).map((coin, index) => { return <Card key = {index} symbol={coin.symbol} name={coin.name} icon={coin.iconUrl} price={coin.price} priceChange={coin.change}/>}))
    }
}
  
  const searchCards = (searchTerm) => setCoinCardsJSX(coinCardsJSX.filter((coinCard) => coinCard.props.name.toLowerCase().startsWith(searchTerm.toLowerCase())).map((coinCard, index) => { return <Card key = {index} symbol={coinCard.props.symbol} name={coinCard.props.name} icon={coinCard.props.icon} price={coinCard.props.price} priceChange={coinCard.props.priceChange}/>}))

  return (
    <div className='main'>
      {/* add button to open and close nav by using conditional rendering */}
      { displayNav && <Nav 
        positiveChange={positiveChange} 
        setPositiveChange={setPositiveChange}  
        negativeChange={negativeChange} 
        setNegativeChange={setNegativeChange} 
        priceBelow={priceBelow} 
        setPriceBelow={setPriceBelow}
        setPriceValue={setPriceValue}
        /> }
      <SearchBar handleCards={handleCards}/>
      {coinCardsJSX}
    </div>
  )
}

export default Main


















// Failed api call (unable to grant access to local host (CORS))

  // const [url, setUrl] = useState("https://api.coinranking.com/v2/coins?rapidapi-key=coinrankingadd53d7b222ee7d6ca4c78899be92e33de82aa7191ede888");
  

  // const getCoins = () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-Access-Token': 'coinrankingadd53d7b222ee7d6ca4c78899be92e33de82aa7191ede888',
  //       search: 'Bit'
  //     }
  //   };
  //   const data = fetch(url, options).then(response => response.json()).catch(err => console.log(err));
  //   setCoins(data.coins);
  //   console.log(coins);
  // }