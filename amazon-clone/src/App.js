import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51I5b35BQcPwezxqKJBuwGxLXY0LAzFibIngOgwV3sXWfvbKoiCEudyGTUMLfdVWBsgmC6b72EELoRMyYASu4jQOE00lJ0AcLIZ');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //runs only once the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS >>> ', authUser);

      if (authUser) {
        //the user just logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
        <div className="App">
          <Switch>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>           
          </Route>
          </Switch>
        </div> 
    </Router>
  
  );
}

export default App;
