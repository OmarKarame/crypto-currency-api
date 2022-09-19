import './App.scss';
import { useEffect, useState } from 'react';
import Main from './containers/Main/Main';
import Header from './components/Header/Header';

function App() {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <div className="App">
      <Header displayNav={displayNav} setDisplayNav={setDisplayNav}/>
      <Main displayNav={displayNav}/>
    </div>
  );
}

export default App;