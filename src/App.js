import React, { Component } from "react";
import "./App.scss";
import monster from "./monster";
import CardList from "./card-list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: monster,
      searchField: " ",
    };
  }

  render() {
    const { collections, searchField } = this.state;
    const filterCollections = collections.filter((collection) =>
      collection.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filterCollections)
    return (
      <div className="App">
        <input
          type="search"
          placeholder=" Search Monsters"
          onChange={(e) => {
            this.setState({ searchField: e.target.value })
            }}
        />
        <CardList collections={filterCollections} />
      </div>
    );
  }
}
export default App;
