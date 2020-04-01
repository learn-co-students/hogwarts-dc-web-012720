import React, { Fragment } from "react";
import HogTile from './HogTile';

class HogContainer extends React.Component {
  render() {
    return (
            
      <div>
        <button onClick = {this.props.filterByGrease} >filter by grease</button>

        {this.props.hogsArray.map(hog => {
          return <HogTile hogStuff={hog} />
        })}
        
      </div>
    );
  }
}

export default HogContainer;
