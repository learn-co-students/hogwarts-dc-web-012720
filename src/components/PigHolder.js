import React from 'react'
import Pig from './Pig'

class PigHolder extends React.Component {

  getPigs = () => {
    let arr = []
    this.props.pigs.forEach(pig => {
        arr.push(<div><Pig pig={pig} showPig={this.props.showPig} key={pig.name}/></div>)
    })
    return arr
  }

  render() {
    return (
        <ul className="ui grid container">{this.getPigs()}</ul>
    )
  }
}

export default PigHolder
