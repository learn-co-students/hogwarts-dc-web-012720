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
  render() {
    return (
      <div className="App">
        <Nav />
        <HogContainer hogsArray={this.state.hogsArray} filterByGrease = {this.filterByGrease}/>

      </div>
    );
  }
}

export default App;
