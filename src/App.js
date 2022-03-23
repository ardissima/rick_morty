import logo from './logo.png';
import './App.scss';
import CharactersList from './List/index.tsx'
import React, { useState } from 'react';

const App = ()=> {

const [showList, setShowList] = useState(false);

  return(
    <div className="App">
      <header className="App-header">
        <img src={'logo'} className="App-logo" alt="logo" />
      </header>
      <button onClick={()=>setShowList(!showList)}>
        Lista dei Personaggi
      </button>
      {showList && <CharactersList title={'Ecco la lista'} characters={[{name: 'Nome 1'},{name: 'Nome 2'}]} />}
    </div>
  );
}

export default App;
