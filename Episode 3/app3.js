// Props Concept

import React from "react";
import ReactDOM from "react-dom/client";


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


/* here we are making the Data of cart as dynamic 
So we are passing the Props in Component, and props is a JS object, 
so when we will use this props, then wrap it inside {}.

if passing props, then use this : 
<h3> {props.resName}</h3>
<h4>{props.cuisine} </h4>


Here we can do the Destructuring of the props. MEans React will wrap up all these props in a object and then u can destructuring them
const RestaurantCard = ({resName, cuisine}) =>{ like this. and it is done by JS not by React.


 another way of Destructuring of props : const {resName, cuisine} = props;
 in Destructuring use this :  
 <h3> {resName}</h3>
 <h4>{cuisine} </h4>
*/







// Suppose we want to pass these information about cart and want to make the cart
// as Dynamic, then we have to use the concept of 'Props'.(properties.)
// It is just like passing the arguments to function. Passing props to the components.
/* Right will take all these properties or props and it will wrap
it inside an object and it will pass in cart as Props.

Props : PAssing props to a function
<RestaurantCard 
    resName="Meghana Food" 
    cuisine="Biryani, North Indian, Asian"
/>

*/


// 
/* Config Driven UI : When UI changes according to location. */

const RestaurantCard = (props) =>{
  const {resName, cuisine} = props;
  return (
      <div className="res-card" style={{ backgroundColor : "#f0f0f0" }}>
          <img 
          className="res-logo"
          alt="res-logo" 
          width="30px" src="https://imgs.search.brave.com/1qo0fZptaYZQK-qmcT7tEyKnaWnVp4GmAi2d_cObzRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjUtMDIvY21qa3F0/cThfdmlyYWwtdmlk/ZW8tc2hvd3Mtd29y/bXMtaW4tdGhlLWdv/b2QtYm93bC1tZWFs/XzYyNXgzMDBfMTRf/RmVicnVhcnlfMjUu/anBlZz9pbT1GYWNl/Q3JvcCxhbGdvcml0/aG09ZG5uLHdpZHRo/PTc3MyxoZWlnaHQ9/NDM1"/>
          
          
          <h3> {resName}</h3>

          <h4>{cuisine} </h4>
          <h4>4.4 stars</h4>
          <h4>38 minutes </h4>
      </div>   
  );
};

const resArray = [
  { id: "750579", resName: "Pizzeria Delight", cuisine: "Pizza" },
  { id: "750589", resName: "Burger King", cuisine: "Burgers" },
  { id: "750228", resName: "Samosa Junction", cuisine: "Samosa" },
  { id: "750591", resName: "Biryani House", cuisine: "Biryani" },
  { id: "745861", resName: "Shake Factory", cuisine: "Shakes" },
  { id: "749768", resName: "Momos Point", cuisine: "Momos" },
  {id: "434343", resName: "Rewa ke Smose", cuisine: "Desi Nasta"},

  { id: "7505gg79", resName: "Pizzeria Delight", cuisine: "Pizza" },
  { id: "7503589", resName: "Burger King", cuisine: "Burgers" },
  { id: "7502228", resName: "Samosa Junction", cuisine: "Samosa" },
  { id: "7504591", resName: "Biryani House", cuisine: "Biryani" },
  { id: "7452861", resName: "Shake Factory", cuisine: "Shakes" },
  { id: "7497468", resName: "Momos Point", cuisine: "Momos" },
  {id: "4342343", resName: "Rewa ke Smose", cuisine: "Desi Nasta"},

  { id: "75320579", resName: "Pizzeria Delight", cuisine: "Pizza" },
  { id: "75054389", resName: "Burger King", cuisine: "Burgers" },
  { id: "7502323228", resName: "Samosa Junction", cuisine: "Samosa" },
  { id: "750243591", resName: "Biryani House", cuisine: "Biryani" },
  { id: "74534861", resName: "Shake Factory", cuisine: "Shakes" },
  { id: "74923768", resName: "Momos Point", cuisine: "Momos" },
  {id: "434332343", resName: "Rewa ke Smose", cuisine: "Desi Nasta"}
];

const Body = () => {
  return (
    <div className="body">

      <div className="search">Search</div>
      <div className="res-container">
        {resArray.map((restaurant) => (
          <RestaurantCard  
            key={restaurant.id} 
            resName={restaurant.resName} 
            cuisine={restaurant.cuisine} 
          />
        ))}
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