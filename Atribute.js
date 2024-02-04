import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const name = 'Sasidhar';
const img = "https://picsum.photos/200/300"
const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/250/300"
const links = "https://www.w3schools.com/"

const heading = {
    color: "red",
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px orange',
    margin: '70px',
}
function Atribute(){
    return (
        <>
        <h1 style={heading}>My Name is {name}</h1>
        {/* <img src="https://picsum.photos/200/300" alt = "random images"/> */}
        <div className='img_div'>
        <img src={img1} alt = "random images"/>
        <img src={img2} alt = "random images"/>
        </div>
        <a href={links} target = "_blank">
            <h1>my name is</h1>
        </a>
        </>
    )
}

export default Atribute;
