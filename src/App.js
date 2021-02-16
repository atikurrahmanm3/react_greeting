import React from 'react';

function App(){
    let currTime = new Date();
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

return (
    <>
        <div className="greeting">
            <b><h1 className="gree">Hello sir, <span style={style}>{greeting}</span></h1></b>
        </div>
    </>
);

}


export default App;


