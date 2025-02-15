import React from "react";
import ReactDOM from "react-dom/client";

const Title = () =>{
    <h1 className="head" tabIndex="5">
        Namaste React using the JSX
    </h1>
};

// Component Composition =>Putting one React element / JSX code inside another.
const HeadingComponent = () =>{
    <div id="container">
        <Title />
        <h1 className="heading"> Namaste react functional Component</h1>
    </div>
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);