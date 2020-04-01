import React, { Fragment } from "react";
import HogTile from './HogTile';

class HogContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.hogsArray.map(hog => {
          return <HogTile hogStuff={hog} />
        })}
        
      </div>
    );
  }
}

export default HogContainer;
