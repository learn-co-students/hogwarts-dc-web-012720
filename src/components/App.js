import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  state = {
    hogsArray: hogs,
    filteredByGrease: false
  }

  filterByGrease = () => {
    this.setState({
      filteredByGrease: !this.state.filteredByGrease
    })
  
    if (this.state.filteredByGrease === true) {
      let newArr = this.state.hogsArray.filter
      (hog => hog.greased === true )
      this.setState({
        hogsArray: newArr
      })
      // console.log('true')
    } else {
      this.setState({
        hogsArray: hogs
      })
      // console.log('false')
    }
    // () => console.log(this.state.filteredByGrease))

  }
  
  sortByFunc = (event) => {
    let option = event.currentTarget.value

    if (option === 'name') {
      //sort by name
      let newArr = this.state.hogsArray.sort(
        (a,b) => (a.name > b.name) ? 1 : -1
      )

      this.setState({
        hogsArray: newArr
      })
    } else if (option === 'weight'){
      //sort by weight
      let newArr = this.state.hogsArray.sort(
        (a,b) => (a.weight > b.weight) ? 1 :-1
      )

      this.setState({
        hogsArray: newArr
      })
    } else {
      //reset
      this.setState({
        hogsArray: hogs
      })
    }
    
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogContainer hogsArray={this.state.hogsArray} filterByGrease = {this.filterByGrease}
        sortByFunc = {this.sortByFunc}/>

      </div>
    );
  }
}

export default App;
