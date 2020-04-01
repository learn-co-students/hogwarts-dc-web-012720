import React from 'react'

class InfoBox extends React.Component {

    render() {
        if (this.props.pig !== null) {
            return (
                <div className="ui card">
                    <h2 className="headerText">Pig Info</h2>
                    <div>
                        <hr></hr>
                        <h3>{this.props.pig.name}</h3>
                        {this.props.pig.greased ? <p>Greased</p> : <p>Not Greased</p>}
                        <p>Highest Medal Achieved: {this.props.pig['highest medal achieved']}</p>
                        <p>Specialty: {this.props.pig.specialty}</p>
                        <p>Weight: {this.props.pig.weight}</p>
                    </div>
                </div>
            )
        } else {
            return null
        }
        
    }
}

export default InfoBox;