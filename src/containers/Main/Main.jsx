import './Main.scss';
import Nav from '../Nav/Nav';
import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import mockApi from '../../mockApi';

const Main = () => {
  const [coins, setCoins] = useState([]);
  const [coinCardsJSX, setCoinCards] = useState([]);

  const getCoins = () => {
    setCoins(mockApi.data.coins);
  }

  // Calls the getCoins function only when the coins array changes (It will only run once)
  useEffect(() => {
    getCoins()
    setCards(false, false, false)
  }, [coins])

  // use if/else statements to determine which set of cards are displayed (pass the filters states as parameters)
  const setCards = (filterA, filterB, filterC) => {
    console.log(filterA);
    if ((!filterA && !filterB && !filterC) || (filterA, filterB, !filterC)) {
      setCoinCards(coins.map((coin, index) => {
        return (
          <Card 
            key = {index}
            symbol={coin.symbol} 
            name={coin.name}
            icon={coin.iconUrl}
            price={coin.price}
            priceChange={coin.change}
          />
        )
      }))
    }
  }
  return (
    <div className='main'>
      {/* add button to open and close nav by using conditional rendering */}
      <Nav setCards={setCards}/> 
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