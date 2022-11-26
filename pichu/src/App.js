import React, { useState } from "react";
import "./App.css";

const arr = [
  [GetRandomColor(), GetRandomColor(), GetRandomColor()],
  [GetRandomColor(), GetRandomColor(), GetRandomColor()],
  [GetRandomColor(), GetRandomColor(), GetRandomColor()],
];
const newArr = [];
for (let i = 0; i <3; i++) {
  const innerArr = [];
  for (let j = 0; j <3; j++) {
    const randomColor = GetRandomColor();
    innerArr.push(randomColor);
  }
  newArr.push(innerArr);
}

const newArr1 = [];
for (let i = 0; i <5; i++) {
  const innerArr1 = [];
  for (let j = 0; j <5; j++) {
    const randomColor = GetRandomColor();
    innerArr1.push(randomColor);
  }
  newArr1.push(innerArr1);
}

const newArr2 = [];
for (let i = 0; i <10; i++) {
  const innerArr2 = [];
  for (let j = 0; j <10; j++) {
    const randomColor = GetRandomColor();
    innerArr2.push(randomColor);
  }
  newArr2.push(innerArr2);
}
var newArr3 = [];
function Sussu(input_value){
 newArr3=[];
for (let i = 0; i <input_value; i++) {
  const innerArr3 = [];
  
  for (let j = 0; j <input_value; j++) {
    const randomColor = GetRandomColor();
    innerArr3.push(randomColor);
  }
  newArr3.push(innerArr3);
}
console.log(newArr3);
return newArr3;
}

function Renderkeys() {
  const [state, setState] = useState(arr);
  const [number, setNumber] = useState(arr);

  return (
    <center>
      <div>
        <h1>Change The Colours</h1>
        {state.map((val) => (
          <div>
            {val.map((item) => (
              <button style={{ background: item, width: 50 }}></button>
            ))}
          </div>
        ))}
        <button onClick={() => {setState(newArr)}}>Easy</button>

        <button 
          onClick={() => {setState(newArr1)}}
          variant="contained"
          disableElevation
        >
          Medium
        </button>

        <button 
          onClick={() =>
            {setState(newArr2)}}
        >
          Hard
        </button>
        <div >
          <input
            placeholder="Set your Number"
            type="number"
            name="numb"
            id="hellop"
           
            
            //onChange={(e) => {var input_value=document.querySelector('input').value;Sussu(input_value);setState(newArr3)}}
          ></input>
          
          <div>
            <button onClick={()=>{var input_value=document.querySelector('input').value;Sussu(input_value);setState(newArr3)}}>Click me</button>
          </div>
        </div>
      </div>
    </center>
  );
}

function GetRandomColor() {
  var color = Math.floor(0x1000000 * Math.random()).toString(16);
  return "#" + ("000000" + color).slice(-6);
}

export default Renderkeys;