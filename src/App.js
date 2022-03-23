import logo from './logo.png';
import './App.scss';
import List from './List/index.tsx'
import React, { useState } from 'react';

const App = ()=> {

const [showList, setShowList] = useState(false);

  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>setShowList(!showList)}>
          Lista dei Personaggi
        </button>
        {showList && <List title={'Ecco la lista'}/>}
      </header>
    </div>
  );
}

export default App;
