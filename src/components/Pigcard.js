import React from "react";
import PigDetail from "./PigDetail.js"
class Pigcard extends React.Component {

    constructor(){
        super()
        this.state = {
            details: false,
            showMe: true
        }
    }

    getImages = () => {
        let pig_images = this.props.pigObj.name.toLowerCase()
        console.log(this.props.pigObj.name)
        let desired_Image = pig_images.split(' ').join("_")

        console.log(desired_Image)
        if (desired_Image === "cherub"){
            let url = desired_Image + '.png'
            console.log(url)
            return require(`../hog-imgs/${url}`)
        } else {
            let url = desired_Image + '.jpg'
            console.log(url)
        return require(`../hog-imgs/${url}`)
        }

    }


    getPigDetail = () => {
        console.log("you hit this function")
        this.setState({
            details: !this.state.details
        })
    }

    hidePig = () => {
        this.setState({
            showMe: !this.state.showMe
        })
        console.log(this.state.showMe)
    }

    render() {
        return (
            (this.state.showMe ? (
            <div className="pigTile">

                <div>
                    <h3>{this.props.pigObj.name}</h3>
                    <img src={this.getImages()}/>
                </div>
                <button onClick={this.getPigDetail}>Get details</button>
                <button onClick={() => this.hidePig()}>Hide Me!</button>
                {this.state.details ? 
                    // (this.state.showMe ? (
                        (<div>
                            <ul>
                                <li>speciality: {this.props.pigObj.specialty}</li>
                                <li>greased: {this.props.pigObj.greased}</li>
                                <li>weight: {this.props.pigObj.weight}</li>
                                <li> Highest Medal Achieved: 
                                    {this.props.pigObj["highest medal achieved"]}
                                </li>
                            </ul>
                        </div>) : (null) 
                }

            </div>) : (<button onClick={this.hidePig}>Show Me!</button>)
        )
        )
    }
}

export default Pigcard