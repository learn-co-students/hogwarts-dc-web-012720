import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Pigs_container from "./Pigs_container";
import SelectionFilter from "./SelectionFilter";

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      pigs: hogs
    }
  }


  sortBySelection = () => {
    let greased_pigs = this.state.pigs.filter(pig => {
      return pig.greased === true
    })
    this.setState({
      pigs: greased_pigs
    })
    //console.log("You reached sortBySelection")
    return greased_pigs

  }

  sortByName = () => {
    let sorted_by_name_arr = this.state.pigs.sort( (initial_pig, next_pig) => {
      if (initial_pig.name < next_pig.name){
        return -1
      } else {
        return 1
      }
    })

    this.setState({
      pigs: sorted_by_name_arr
    })
  }


  sortByWeight = () => {
    let sorted_by_weight = this.state.pigs.sort ( (initial_pig, next_pig) => {
      if (initial_pig.weight < next_pig.weight){
        return -1
      } else {
        return 1
      }
    })

    this.setState({
      pigs: sorted_by_weight
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <SelectionFilter sortBySelection={this.sortBySelection} sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
        <Pigs_container pig_arr={this.state.pigs} />
      </div>
    );
  }
}

export default App;
