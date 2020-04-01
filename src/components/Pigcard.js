import React from "react";
import PigDetail from "./PigDetail.js"
class Pigcard extends React.Component {

    constructor(){
        super()
        this.state = {
            details: false
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

    render() {
        return (

            <div className="pigTile" onClick={this.getPigDetail}>
                <div>
                    <h3>{this.props.pigObj.name}</h3>
                    <img src={this.getImages()}/>
                </div>

                {this.state.details ? 
                (<div>
                    <ul>
                        <li>speciality: {this.props.pigObj.specialty}</li>
                        <li>greased: {this.props.pigObj.greased}</li>
                        <li>weight: {this.props.pigObj.weight}</li>
                        <li> Highest Medal Achieved: 
                            {this.props.pigObj["highest medal achieved"]}
                        </li>
                    </ul>
                </div>)
                :
                (null)
                }

            </div>
        )
    }
}

export default Pigcard