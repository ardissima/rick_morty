import logo from './logo.png';
import './App.scss';
import CharactersList from './List'
import React, {Component} from 'react';
import { characters } from './mock';

class App extends Component {

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='principal'>
            Lista dei Personaggi
          </div>
        </header>
        {<CharactersList characters={characters.results} />}
      </div>
    );
  }
}

export default App;
