import React from "react";
import ReactDOM from "react-dom";

const flname = 'Sasidhar';

ReactDOM.render(
    <>
     <h1>my name is {flname}</h1>
     <p>my lucky number is {3+6+9}</p>
     <p>sasi {Math.random()}</p>
    </>,
    document.getElementById('root')
);
export default flname


import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Sasidhar'
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
    <>
    <h1>My Name is {name}</h1>
    <p>Today Date is = {currDate} </p>
    <p>Current Time is = {currTime} </p>
    </>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

const fName = 'Sasidhar';
const lName = 'sasi';

ReactDOM.render(
    <>
    <h4>{`my name is ${fName} ${lName}`}</h4>
    <h1>My first name is {fName +' '+ lName}</h1>
    </>,
    document.getElementById('root')
);
