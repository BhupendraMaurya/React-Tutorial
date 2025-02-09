/* <div id="parent">
        <div id="child">
            <h1>I am h1 tag dost</h1>
        </div>
    </div> */

const parent = React.createElement("div", {id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"I am h1 tag dost by nested ")
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);