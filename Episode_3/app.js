import React from "react";
import ReactDOM from "react-dom/client";

// ReactElement => JS Objects => ReactDOM converts it into HTML element using render() and then diplays it into the Browser 

// const heading = React.createElement(
//     "h1",
//     { id : "heading" },
//     "Namaste React ❤❤❤💔🧡💝🧡 "
// );

console.log(heading);

// JSX : is not html inside JS. It is tml like syntax. or XML like 

// JSX : Transpiled before it reaches the JS engine. It is done by PARCEL - Babel package
// Transpiled - This code has been converted to the code which browsers / react can understand

//JSX => Bake transpiles it to React.createelement ==> Ract element : JS object => HTML element(render)
const jsxHeading = ( // if JSX code is in multiple lines, then use parenthesis 
<h1 className="head" tabIndex="1">Namaste React inside JSX

</h1>);
console.log(jsxHeading); // here heading and jsxHeading are the same thing(object);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
