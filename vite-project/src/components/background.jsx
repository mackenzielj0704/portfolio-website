import "./background.css"
import { ReactSketchCanvas } from 'react-sketch-canvas';

function Background () {

    let square1 = {
        left: "10%",
        top: "80%"
    }

    let rect1 = {
        left: "4%",
        top: "11%"
    }

    let circle1 = {
        left: "-8%",
        top: "30%"
    }
    let rect2 = {
        left: "80%",
        top: "20%"
    }
    let octo1 = {
        left: "70%",
        top: "10%"
    }
    let tri1 = {
        left: "-15%",
        top: "70%"
    }
    let tri2 = {
        left: "0%",
        top: "5%"
    }
    let tri3 = {
        left: "65%",
        top: "50%"
    }
    let tri4 = {
        left: "50%",
        top: "5%"
    }

    return (
        <div className="background">
            <div className="square" style={square1} id="square"></div>
            <div className="rectangleWidth" style={rect1}></div>
            <div className="circle" style={circle1}></div>
            <div className="rectangleHeight" style={rect2}></div>
            <div className='octagonWrap' style={octo1}>
                <div className='octagon'></div>
            </div>
            <div className="triangleRight" style={tri1}></div>
            <div className="triangleUp" style={tri2}></div>
            <div className="triangleDown" style={tri3}></div>
            <div className="triangleLeft" style={tri4}></div>
        </div>
    )

}

export default Background