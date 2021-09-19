//This is entry point for app. 

/////////////////////////////////////////////////////////////////////////////////////////
////  Index.js - Index File of the app.  Do not requried to change in this file.  ///////
/////////////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import App from "./App/App";


const { PUBLIC_URL } = process.env;
ReactDOM.render(<React.StrictMode><App  basename={PUBLIC_URL} /></React.StrictMode>,    document.getElementById("root"));
  // <App store={store} persistor={persistor} basename={PUBLIC_URL} />