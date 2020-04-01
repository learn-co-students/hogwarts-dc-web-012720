import React from 'react';
import PigTiles from './PigTiles'

export default class PigContainer extends React.Component {


    // constructor(props) {
    //     super()
    //     this.state = {
    //         pigs: props.pigData
    //     }
    // }

    render() {

        return (
            <div>
                {this.props.pigData.map((pig, i) => <PigTiles pigData={pig} key={Math.floor(Math.random() * 10000)} hideAFatty={this.props.hideAFatty} />)}

                {/* {this.props.pigData.map((pig, i) => <PigTiles pigData={pig} key={i} hideAFatty={this.props.hideAFatty} />)} */}
            </div>
        )

    }
}
