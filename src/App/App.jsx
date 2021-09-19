import React from "react";
import logo from "../logo.svg";
import "../App.css";
import Clock from "../Theme/Utils/Clock";
import Toggle from "../Theme/Utils/Tongle";
import LoginControl from "../Theme/Utils/LoginControl";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h3> Welcome to eStore : The Next Gen App! </h3>
        <Clock />
        <LoginControl className="danger"/>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Toggle className="text-white btn btn-success" />
        </header>
      </div>
    );
  }
}


export  class AppV2 extends React.Component {

  render() {
    return (
      <div> textInComponent </div>
    );
  }
}



