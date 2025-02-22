import React from "react";
import ReactDOM from "react-dom/client";

// const Title = () =>{
//     <h1 className="head" tabIndex="5">
//         Namaste React using the JSX
//     </h1>
// };

// // WE can also write JS inside JSX, and it is a very powerfull thing

// // Component Composition =>Putting one React element / JSX code inside another.
// const HeadingComponent = () =>{
//     <div id="container">
//         <Title />
//         <h1 className="heading"> Namaste react functional Component</h1>
//     </div>
// };

const elem = <span>React Element</span>
// const title = (
//     <h1 className="head" tabIndex="5">
//         {elem}
//         Namaste React using the JSX
        
//     </h1>
// );

// // WE can also write JS inside JSX, and it is a very powerfull thing

// // Component Composition =>Putting one React element / JSX code inside another.
// const HeadingComponent = () => (
//     <div id="container">
         
//         <h2>{ 100 + 400 } </h2>

//         {title}
//         <h1 className="heading"> Namaste react functional Component</h1>
//     </div>
// );


const HeadingComponent = () => (
    <div id="container">
         
        <h1 className="heading"> Namaste react functional Component</h1>
    </div>
);

const title = (
    
    <h1 className="head" tabIndex="5">
        
        Namaste React using the JSX
        <HeadingComponent />
    </h1> 
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);