import React from "react";
import ReactDom from "react-dom";
import './index.css';

let currTime = new Date(2021,2,16,1);
currTime = currTime.getHours();
let greeting = "";
const style ={};


if(currTime >= 1 && currTime <12){
  greeting = "Good Morning";
  style.color="Green";
}
else if(currTime>=13 && currTime<16){
  greeting = "Good Afternoon";
  style.color="yellow";
}
else if(currTime>=16 && currTime<20){
  greeting = "Good Evening";
  style.color="orange";
}
else{
  greeting = "Good Night";
  style.color="black";
}



// const currdate = new Date(2021,2,16,15);

ReactDom.render(
  <>
  <div className="greeting">
    <b><h1 className="gree">Hello sir, <span style={style}>{greeting}</span></h1></b>
  </div>
  
  </>,
  document.getElementById("root")
);




