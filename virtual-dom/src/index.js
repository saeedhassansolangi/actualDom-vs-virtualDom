import React from 'react';
import ReactDOM from "react-dom";

const tick=()=>{
 ReactDOM.render([
    React.createElement("div",null,"Hello World"),
    React.createElement("input",null),
    React.createElement("p",null,(new Date().toLocaleTimeString())),
    React.createElement("h1",null,"With Virtual DOM")],document.getElementById("root"))
}
setInterval(tick, 1000)