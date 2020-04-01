import React from "react";
import Pigcard from "./Pigcard.js";

class Pigs_container extends React.Component {


    receivePigsArr = () => {
        return this.props.pig_arr
    }

    mapThroughPigsArr = () => {
        let pig_arr = this.receivePigsArr().map(pig => <Pigcard key={pig.name} pigObj={pig} />)
        return pig_arr
    }

    render() {

        return (
            <div>
                {this.mapThroughPigsArr()}
            </div>
    );
  }
}

export default Pigs_container;
