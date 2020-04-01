import React, { Fragment } from "react";
import HogTile from './HogTile';

class HogContainer extends React.Component {
  render() {
    return (
            
      <div>
        <button onClick = {this.props.filterByGrease} >filter by grease</button>
        <select onChange= {this.props.sortByFunc}>
          <option ></option>
          <option value='reset'>Reset</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>

        {this.props.hogsArray.map(hog => {
          return <HogTile hogStuff={hog} />
        })}
        
      </div>
    );
  }
}

export default HogContainer;
