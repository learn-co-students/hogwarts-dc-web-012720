import React from "react"

class SelectionFilter extends React.Component{
    render(){
        return (
            <div>
                <h1>bruh</h1>
                <div>
                    <label for="greased"> Greased: </label>
                    <input type="radio" name="selection" id="greased" onClick={() => this.props.sortBySelection()}>
                    </input>
                    <br></br>
                    <label for="weight"> Weight: </label>
                    <input type="radio" name="selection" id="weight" onClick={ () => this.props.sortByWeight()}>
                    </input>
                    <br></br>
                    <label for="name"> Name: </label>
                    <input type="radio" name="selection" id="name" onClick={() => this.props.sortByName()}>
                    </input>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default SelectionFilter

