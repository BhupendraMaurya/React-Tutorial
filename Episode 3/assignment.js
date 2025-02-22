// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)
import React from "react";
import ReactDOM from "react-dom/client";

const hello = React.createElement("div", {className : "title"},
    React.createElement("h1",{},"h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
    React.createElement("h3",{}, "H3 tag")
    
);

// Create the same element using JSX
const heading = (
    <div className="title">
        <h1 id="123">
            you are h1 tag+ 
        </h1>

        <h2 id="332">
             hello h2 tag, how is the josh   
        </h2>

        <h3 id="333">
            Hello bhupendra, how are you doing inside JSX.
        </h3>
    </div>
)

// Create a functional component of the same with JSX

const FunctionalComponent = () => (
    <div className="title">
        <h1 id="121">
            hello h1 inside functional component.
        </h1>

        <h2 id="121">
            hello h2 inside functional component.
        </h2>

        <h3 id="121">
            hello h3 inside functional component.
        </h3>
    </div>
)

// Composition of Component(Add a component inside another)
const Component1 = () => (
    <div className="Hello">
        <h1 id="22"> HEllo first component</h1>
    </div>
)

const Component2 = () => (
    <div className="hello2">
        <h1 id="12121">Hellow second component, how are you</h1>
        { Component1 }
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component2 />);