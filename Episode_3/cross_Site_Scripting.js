import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    
    <h1 className="head" tabIndex="5">
        
        Namaste React using the JSX
        
    </h1> 
);

// const data = api.getData();

// if we are passing any thing which is given by APIs or from any source
// then before running that piece code, JSX will sanitise it for the safety purpose.

// or whenever any data is wrapped inside this {}, then JSX will sanitise it first. then pass it.
// and by this it prevent the cross site scripting.
const HeadingComponent = () => (
    <div id="container">
        {/* {data} */}
         
        
        <Title /> 
        <Title />
        <Title />
         
        <Title></Title>
        <h1 className="heading"> Namaste react functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);