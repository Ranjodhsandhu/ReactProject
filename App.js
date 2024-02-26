import React from "react";
import ReactDOM from "react-dom/client";

// React.createElemet is basically a javascript object but become HTML element after rendering
const heading = React.createElement("h1",{id: "heading1"},"Heading using core react");
console.log(heading);

// JSX - It is not HTML but its like HTML syntax. This following statement is a javascript object.
const jsxHeading = <h1 id="heading">React using JSX</h1>;
console.log(jsxHeading); // printing jsxHeading will print in console as an object

// Above heading and jsxHeading is one and same thing

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);
