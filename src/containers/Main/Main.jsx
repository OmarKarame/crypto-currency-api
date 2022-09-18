import './Main.scss';
import Nav from '../Nav/Nav';
import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import mockApi from '../../mockApi';

const Main = () => {
  const [coins, setCoins] = useState([]);
  const [coinCardsJSX, setCoinCardsJSX] = useState([]);

  const [positiveChange, setPositiveChange] = useState(() => false);
  const [negativeChange, setNegativeChange] = useState(() => false);
  const [priceBelow, setPriceBelow] = useState(() => false);

  const getCoins = () => {
    setCoins(mockApi.data.coins);
  }

  // runs only when coins array changes
  useEffect(() => {
    getCoins()
    filterCards(positiveChange, negativeChange, priceBelow)
  }, [coins])

  // runs when a filter is clicked
  useEffect(() => {
    filterCards(positiveChange, negativeChange, priceBelow)
  }, [positiveChange, negativeChange, priceBelow])


  const handleCards = (positiveChange, negativeChange, priceBelow, priceValue) => {
    filterCards(positiveChange, negativeChange, priceBelow, parseFloat(priceValue));
  }

  const filterCards = (filterA, filterB, filterC, priceValue) => {
    if ((!filterA && !filterB && !filterC) || (filterA && filterB && !filterC)) {
      setCoinCardsJSX(coins.map((coin, index) => { return <Card key = {index} symbol={coin.symbol} name={coin.name} icon={coin.iconUrl} price={coin.price} priceChange={coin.change}/>}))
    }
    else if (filterA && filterB && filterC || !filterA && !filterB && filterC) {
      // filter through the cards based on the value that was inputed in the input box
      setCoinCardsJSX(coins.map((coin, index) => { return <Card key = {index} symbol={coin.symbol} name={coin.name} icon={coin.iconUrl} price={coin.price} priceChange={coin.change}/>}))
    }
    else if (filterA && !filterB && !filterC) {
      setCoinCardsJSX(coins.filter((coin) => {return coin.change > 0}).map((coin, index) => { return <Card key = {index} symbol={coin.symbol} name={coin.name} icon={coin.iconUrl} price={coin.price} priceChange={coin.change}/>}))
    }
    else if (!filterA && filterB && !filterC) {
      setCoinCardsJSX(coins.filter((coin) => {return coin.change < 0}).map((coin, index) => { return <Card key = {index} symbol={coin.symbol} name={coin.name} icon={coin.iconUrl} price={coin.price} priceChange={coin.change}/>}))
    }
}

  return (
    <div className='main'>
      {/* add button to open and close nav by using conditional rendering */}
      <Nav positiveChange={positiveChange} setPositiveChange={setPositiveChange}  negativeChange={negativeChange} setNegativeChange={setNegativeChange} priceBelow={priceBelow} setPriceBelow={setPriceBelow}/> 
      {coinCardsJSX}
    </div>
  )
}

export default Main


















// Failed api call

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