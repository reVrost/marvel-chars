import React, { Component } from 'react';
import './App.css';
import { getChars } from './api/MarvelAPI';
import SuperHeroList from './components/SuperHeroList';
import SuperHeroSearch from './components/SuperHeroSearch';

const LIMIT = 20;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { heroes: [], offset: 0 };
    this.searchCharacters = this.debounce(this.searchCharacters.bind(this), 200);
  }
  
  componentDidMount() {
    this.searchCharacters();
  }

  debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  next() {
    this.searchCharacters(this.state.startsWith, Math.min(this.state.offset + LIMIT, this.state.total));
  }

  previous() {
    this.searchCharacters(this.state.startsWith, Math.max(this.state.offset - LIMIT, 0))
  }

  searchCharacters(startsWith, offset) {
    getChars(startsWith, offset).then(x => {
      this.setState({ startsWith: startsWith, heroes: x.results, total: x.total, offset: x.offset });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App__Title">MARVEL</div>
        <div>
          <SuperHeroSearch onChange={this.searchCharacters.bind(this)} />
          <div className="App__SearchPagination">
            {(this.state.offset + LIMIT < this.state.total) ? <div className="App__PagButton" onClick={this.next.bind(this)}>Next</div> : ""}
            {(this.state.offset !== 0) ? <div className="App__PagButton" onClick={this.previous.bind(this)}>Previous</div> : ""}
          </div>
        </div>
        <SuperHeroList heroes={this.state.heroes} />
      </div>
    );
  }
}

export default App;
