import React, {Component} from "react";
import {Switch, Route, useLocation } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Promotions from "./pages/Promotions";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Finish from "./pages/Finish";


import Navbar from "./components/Navbar";
import Footer from './components/Footer';


class App extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };


    render() {

      //console.log("alma")

        const App = () => (
        <>
      <Navbar />
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hotels/" component={Rooms} />
        <Route exact path="/rooms/" component={Promotions} />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/finish" component={Finish}/>
        <Route component={Error} />
        <p className="App-intro">{this.state.data}</p> 
      </Switch>
      <Footer />
      </div>
    </> )
    
    return (
      <Switch>
        <App/>
      </Switch>
      );
    }
  }

  /*
  <p className="App-intro">{this.state.data}</p>
  nem tudom mit csinál pontosan ! */
  
  export default App;

/*

function-os megoldás, később kellhet még

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/promotions/" component={Promotions} />
        <Route exact path="/contact/" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;*/