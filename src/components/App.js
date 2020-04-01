import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigHolder from './PigHolder'
import InfoBox from './InfoBox'
import Filters from './Filters'

class App extends Component {

  constructor() {
    super()

    this.state={
      activePig: null,
      pigs: hogs
    }
  }

  greased = (e) => {
    if (e.target.checked === true) {

      let arr = this.state.pigs.filter(pig => {
        return pig.greased === true
      })

      this.setState({
        pigs: arr
      })

    } else {
      this.setState({
        pigs: hogs
      })
    }
  }

  nameSort = (e) => {
    if (e.target.checked === true) {

      let newArr = this.state.pigs.sort()

      this.setState({
        pigs: newArr
      })

    } else {

      this.setState({
        pigs: hogs
      })

    }
  }

  weightSort = (e) => {
    if (e.target.checked === true) {



    } else {

      this.setState({
        pigs: hogs
      })

    }
  }

  showPig = (pig) => {
    this.setState({
      activePig: pig
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filters greased={this.greased} nameSort={this.nameSort} weightSort={this.weightSort}/>
        <br></br>
        <div className="ui grid container">
          <div className="ui ten wide column">
            <PigHolder showPig={this.showPig} pigs={this.state.pigs}/>
          </div>
          <div className="ui six wide column">
            <InfoBox pig={this.state.activePig}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
