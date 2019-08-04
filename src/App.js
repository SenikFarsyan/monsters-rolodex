import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log(err));
  }
  handleInputChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMosters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleInputChange={this.handleInputChange}
          placeholder='search for monster'
        />
        <CardList monsters={filteredMosters} />
      </div>
    );
  }
}

export default App;
