/* <div id="parent">
        <div id="child">
            <h1>I am h1 tag dost</h1>
            <h2> I am h2 tag bro </h2>
        </div>

        <div id="child2">
            <h3>I am h1 tag dost</h3>
            <h4> I am h2 tag bro </h4>
        </div>
    </div> */

// if there are multiple child to any element,then put that in an array
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