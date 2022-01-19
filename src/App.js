import React from "react";
import {CardList} from "./components/card-list/card-list.component";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters:[]
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState( {monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList name="Yi">
          <h1>Yi</h1>
          {
            this.state.monsters.map(monster => (
              <h1 key={monster.id}>{monster.name}</h1>
            ))
          }
        </CardList>
      </div>
    );
  }
}

export default App;
