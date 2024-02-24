import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child", key:"A"},[
                React.createElement("h1",{key:"1"},"I'm Ranjodh tag"),
                React.createElement("h2",{key:"2"},"I'm H2 tag")
            ]
        ),
        React.createElement("div",{id:"child2",key:"B"},[
            React.createElement("h1",{key:"3"},"I'm H1 tag"),
            React.createElement("h2",{key:"4"},"I'm H2 tag")
        ])
    ]
);

// JSX

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);