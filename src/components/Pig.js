import React from 'react'

class Pig extends React.Component {

    getImage = () => {
        let name = this.props.pig.name
        name = name.split(" ").join("_").toLowerCase()
        let imageSrc = require(`../hog-imgs/${name}.jpg`)
        let image = <img src={imageSrc} alt={this.props.pig.name}/>
        return image
    }

    render() {
        return <div className="ui card eight wide column" onClick={() => this.props.showPig(this.props.pig)}>{this.getImage()}{this.props.pig.name}</div>
    }
}

export default Pig;