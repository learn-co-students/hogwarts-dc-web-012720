import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from './PigContainer.component'
import FilterGreased from './FilterPigs.component'
import SortPigs from './SortPigs.component'

class App extends Component {

  constructor() {
    super();
    this.state = {
      hiddenFatties: [],
      filterType: 'all',
      sortType: "A-Z"
    }
  }

  filterPigs = (event) => {
    this.setState({
      filterType: event.target.value
    }, () => console.log(this.state.filterType))
  }

  sortPigs = (event) => {
    this.setState({
      sortType: event.target.value
    })
  }

  sendPigs = () => {
    let pigs = hogs
    pigs = pigs.filter(pig => this.state.hiddenFatties.includes(pig.name) != true)


    if (this.state.filterType !== "all") {
      pigs = pigs.filter(pig => pig.greased.toString() === this.state.filterType)      
    }
    switch (this.state.sortType) {
      case "A-Z":
        pigs = pigs.sort((a, b) => (a.name > b.name) ? 1 : -1)
        break;
      case "Z-A":
        pigs = pigs.sort((a, b) => (a.name < b.name) ? 1 : -1)
        break;
      case "ASC":
        pigs = pigs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
        break;
      case "DEC":
        pigs = pigs.sort((a, b) => (a.weight < b.weight) ? 1 : -1)
        break;
      default:
        pigs = pigs.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }
    return pigs
  }

  showAllFatties = () => {
    this.setState({
      hiddenFatties: []
    })
  }

  HideAFatty = (event, pigData) => {
    this.setState({
      hiddenFatties: (this.state.hiddenFatties.concat(pigData))
    })

  }


  render() {
    return (
      <div className="App">
        <Nav />
        <FilterGreased filterPigs={this.filterPigs} />

        <SortPigs sortPigs={this.sortPigs} />
        <button onClick={this.showAllFatties}>Show All Fatties</button>
        <PigContainer pigData={this.sendPigs()} filterType={this.state.filterType} sortPigs={this.state.sortType} hideAFatty={this.HideAFatty} />
      </div>
    );
  }
}

export default App;
