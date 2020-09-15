import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/saved" component={Saved}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;