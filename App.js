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
// JSX attributes are camelCase
// JSX if written in multiple lines then wrap it with parentheses
const jsxHeading = (<h1 
                id="heading"
                className="root">
                    React using JSX
            </h1>);


console.log(jsxHeading); // printing jsxHeading will print in console as an object

// Above heading and jsxHeading is one and same thing


// React Component

// All following HeadingComponents are same thing
// const HeadingComponent1 = () => {
//     return <h1 id="heading" className="root">React using JSX</h1>
// }
// This is also known as Component Composition - We are including Title into container element
const HeadingComponent2 = () => (
    <div id="container">
        <Title />
        <h2 id="heading" className="root">React functional component</h2>
    </div>
);
// const HeadingComponent3 = () => <h1 id="heading" className="root">React using JSX</h1>;

const Title = () => (<h1>Another Title we have as component</h1>);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading); // this is how we render React Element

root.render(<HeadingComponent2 />); // this is how we render React Component
