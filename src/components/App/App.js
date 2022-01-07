import React from 'react';
import './App.css';
import Intro from '../Intro/Intro.js'
import Series from '../../containers/Series/Series.js';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series." />
        <Series />
      </div>
    );
  }
}

export default App;
