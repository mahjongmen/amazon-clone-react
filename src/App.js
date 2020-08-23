import React ,{ useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

{/* Your app route should mainly be routeing and auth */ }
function App() {
  const [{user},dispatch]=useStateValue();

  //  Use Effect code
  //  Peice of code which runs based on a given condition 
  useEffect (()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // the user is logged in 
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else{
        //  User is logged out 
        dispatch({
          type:"SET_USER",
          user:null
        });
      }
    });
    return( )=>{
      // Any clean up operations go in here...
      unsubscribe();
    };
  },[]);
  console.log(user);

  return (
    <Router>  
      <div className="app">
        <Switch>
          <Route path ="/checkout">
            <Header/>
            <Checkout/>
          </Route>
         <Route path ="/login">
            <Login/>
          </Route>
          {/* This is the home page */}
          <Route path = "/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
{/* WE need react-ROUTER */}
    {/* local host.com/*/}
    {/* local host.com/checkout */}
    {/* local host.com/login */}