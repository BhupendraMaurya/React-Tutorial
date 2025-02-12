// Since I have removed the CDN links from html file, so can I use that ?
// Since we have installed the react and react dom in Node Modules, so import that here.

import React from "react"; // Here "react" refers to that react which is in the node modules.
import ReactDOM from "react-dom/client";  



const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am h1 tag dost by nested "),
            React.createElement("h1",{},"I am h1 tag dost by nested ")
        ]
    ), 
    React.createElement("div",{id:"child2"},
        [React.createElement("h3",{},"I am h1 tag dost by nested "),
            React.createElement("h4",{},"I am h1 tag dost by nested ")
        ]
    )]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);