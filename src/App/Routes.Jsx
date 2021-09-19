// This is router class for starting routes
import React, { Component } from 'react'
import { Redirect, Switch, Route } from "react-router-dom";
import { Layout } from "../_metronic/layout";
import { useState, useEffect } from "react";
import { shallowEqual, useSelector ,useDispatch} from "react-redux";
import {  useHistory } from "react-router-dom";

//import BasePage from "./BasePage";
//import {useAuth} from "./modules/FireAuth/AuthContext";


export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state = { authUser:false,isAuthenticated: false,userInfo:null};    
    }
    
    logout(){

    }

    render() {
        
        return (
            <Switch>
                
            </Switch>
        )
    }
}
