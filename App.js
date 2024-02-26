import React from "react";
import ReactDOM from "react-dom/client";

// React.createElemet is basically a javascript object but become HTML element after rendering

// React.createElemet ==> ReactElement - JS Object ==> HTML Element on rendering
const heading = React.createElement("h1",{id: "heading1"},"Heading using core react");
console.log(heading);

// JSX - It is not HTML but its like HTML syntax. 
// This following statement creates a javascript object.
// This statement is being transpiled to HTML by parcel so that the javascript engine can understand this code.
// Parcel actually gives this responsibility to BABEL to take care of this transpiling
// This code will be transpiled by BABEL to React Element which is a JS Object.
// JSX =(BABEL)=> React.createElemet ==> ReactElement - JS Object ==> HTML Element on rendering
const jsxHeading = <h1 id="heading">React using JSX</h1>;

console.log(jsxHeading); // printing jsxHeading will print in console as an object

// Above heading and jsxHeading is one and same thing

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);
