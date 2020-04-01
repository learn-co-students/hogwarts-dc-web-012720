import React, {Component} from 'react'
 

export default class HogTile extends React.Component {
    
    state = {
        showingInfo: false
    }

   changeInfoDisplay = () => {
        this.setState({
            showingInfo: !this.state.showingInfo
        })
   }

   showCode(specialty, greased, weight, medal) {
    return (
        <div>
            <h2>Specialty: {specialty}</h2>
            <h2>Greased: {`${greased}`}</h2>
            <h2>Weight: {weight}</h2>
            <h2>Medal: {medal}</h2> 
        </div>
    )
   }

    
    render() {
        let {name, specialty, greased, weight, 'highest medal achieved': medal} = this.props.hogStuff
        let pictureName = name.split(' ').join('_').toLowerCase()
        let image = require(`../hog-imgs/${pictureName}.jpg`)
        return (
            <div className="pigTile" onClick={this.changeInfoDisplay}>
            <h1>Name: {name}</h1>
            <img src={image} />
            {this.state.showingInfo ? this.showCode(specialty, greased, weight, medal) : null} 
            </div>
        )
    }
}

