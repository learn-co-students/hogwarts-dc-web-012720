import React, {Component} from 'react'
// import pigPics from '../hog-imgs';

export default class HogTile extends React.Component {
    render() {
        let {name, specialty, greased, weight, 'highest medal achieved': medal} = this.props.hogStuff
        return (
            <div>
                <h1>Name: {name}</h1>
                <h2>Specialty: {specialty}</h2>
            <h2>Greased: {`${greased}`}</h2>
            <h2>Weight: {weight}</h2>
            <h2>Medal: {medal}</h2>
            </div>
        )
    }
}