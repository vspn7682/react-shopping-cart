import "./App.css";
import { useEffect, useContext } from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Order__Success from './Components/Order__Success'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './Configurations/Config'
import { Context } from './Context/Context'

firebase.initializeApp(firebaseConfig)

function App() {

  const [{ user }, dispatch] = useContext(Context)

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged((authUser) => {
        if (authUser) {
          //user is logged in 
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          //user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])

  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>

        <Route exact path="/cart" component={Cart}>
          <Cart />
        </Route>
        <Route exact path="/login" component={Login}>
          <Login />
        </Route>
        <Route exact path="/register" component={Register}>
          <Register />
        </Route>
        <Route exact path='/order' component={Order__Success}>
          <Order__Success />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
