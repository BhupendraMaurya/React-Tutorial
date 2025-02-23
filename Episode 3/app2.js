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
   - IMG
   - Name of restaurant, star rating, quisins, etc., delivery time  

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

// const styleCard = {
//     backgroundColor : "#f0f0f0"
// }
const RestaurantCard = () =>{
    return (
        <div className="res-card" style={{ backgroundColor : "#f0f0f0" }}>
            <img 
            className="res-logo"
            alt="res-logo" 
            width="30px" src="https://imgs.search.brave.com/1qo0fZptaYZQK-qmcT7tEyKnaWnVp4GmAi2d_cObzRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjUtMDIvY21qa3F0/cThfdmlyYWwtdmlk/ZW8tc2hvd3Mtd29y/bXMtaW4tdGhlLWdv/b2QtYm93bC1tZWFs/XzYyNXgzMDBfMTRf/RmVicnVhcnlfMjUu/anBlZz9pbT1GYWNl/Q3JvcCxhbGdvcml0/aG09ZG5uLHdpZHRo/PTc3MyxoZWlnaHQ9/NDM1"/>
            <h3> Meghana Foods</h3>

            <h4>Biryano, North Indian, Asian </h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes </h4>
        </div>   
    );
};
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
              
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
              
            </div>
        </div>
    );
};
const AppLayout = () =>{
    return (
        <div className="app">
           <Header />

           <Body />
        </div>
    ); 
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)