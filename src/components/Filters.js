import React from 'react'

class Filters extends React.Component {

    render() {
        return (
            <div>
                <label for='greased'>Only Greased Pigs </label>
                <input name="greased" type="checkbox" onChange={(e) => this.props.greased(e)}></input>
                <br></br>
                <label for='name'>Sort By Name </label>
                <input name="name" type="checkbox" onChange={(e) => this.props.nameSort(e)}></input>
                <br></br>
                <label for='weight'>Sort By Weight </label>
                <input name="weight" type="checkbox" onChange={(e) => this.props.weightSort(e)}></input>
            </div>
        )
    }
}

export default Filters