import React from "react";

class PigTiles extends React.Component {
    constructor() {
        super()
        this.state = {
            showPig: false
        }
    }

    showPigDetails = () => {
        let change = (this.state.showPig) ? false : true
        this.setState({
            showPig: change
        })
    }

    render() {
        let { name, specialty, greased, weight } = this.props.pigData
        let medal = this.props.pigData["highest medal achieved"]
        let imgName = name.toLowerCase().split(' ').join('_') + '.jpg'
        return (
            <div className="pigTile" >
                <h1 onClick={this.showPigDetails}>{name}</h1>
                <button onClick={(event) => this.props.hideAFatty(event, name)}>Hide This Fatty</button>
                {this.state.showPig ?

                    <div>

                        <img src={require(`../hog-imgs/${imgName}`)} />
                        <h4>Specialty: {specialty}</h4>
                        <h4>Grease Status: {greased ? "Oily Boy" : "Dry Guy"}</h4>
                        <h4>Weight: {weight}</h4>
                        <h4>Highest Medal Achieved: {medal}</h4>

                    </div>

                    : null

                }
            </div>
        )
    }
}

export default PigTiles