import React from "react";
import ReactDOM from "react-dom/client";

// React element
const heading = (
    <h1 className="head" tabIndex="5">
        NAmaste React using the JSX 
    </h1>
);

// React Component - Two ways to create

//Class Based Component - Old way
// Functional component - NEw way



// React Functional component => JS function which returns React Element
// and here JSX is the react element.

// const fn = () =>{
//     return true; 
// } 

// or

// const fn2 = () => true; // it also returns true, and no need to add return keyoword and this {}.

const HeadingComponent = () => (
 <div id="container">
    <h1 className="heading">Namaste react functional component</h1>
 </div>
);
// both above and below code are the same code. way of writting id fferent only.

// const HeadingComponent2 = () => { 
//     <h1 className="heading">Namaste react functional component</h1>;
// };


const root = ReactDOM.createRoot(document.getElementById("root"));

// to render the react component in the browser use this in render() [ <.../>]
root.render(<HeadingComponent />);