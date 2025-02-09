/* <div id="parent">
        <div id="child">
            <h1>I am h1 tag dost</h1>
            <h2> I am h2 tag bro </h2>
        </div>
    </div> */

// if there are multiple child to any element,then put that in an array
const parent = React.createElement("div", {id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am h1 tag dost by nested "),
            React.createElement("h1",{},"I am h1 tag dost by nested ")
        ]
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);