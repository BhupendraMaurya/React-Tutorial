import React from "react";
import ReactDOM from "react-dom/client";

/*
- Header
1. Logo
2. Nav Items

- Body
1. Search
2. RestaurantContainer
3. RestaurantCard

- Footer
1. Copyright
2. Links
3. Address
4. Contact

*/ 
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
              <img className="logo" src="https://imgs.search.brave.com/D8mQqCB1dEuYreOVddhdD0-uSrAGLBEcl-MZWPe8LhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9zbW9r/aW5nLWJ1cmdlci13/aXRoLWxldHR1Y2Ut/MzYyNGxkLnBuZz9u/d209MSZud3M9MSZp/bmR1c3RyeT1mb29k/JnNmPSZ0eHRfa2V5/d29yZD1BbGw"/> 
            
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const AppLayout = () =>{
    return (
        <div className="app">
           <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)