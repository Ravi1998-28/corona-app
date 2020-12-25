import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Table from "./Table";
import Home from './Home'
import About from "./About";
import Navbar from "./Navbar";
import {Switch , Route , Redirect } from 'react-router-dom';

const App = () => {
    return(
        <>
            <Navbar />
            <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/about' component={About} />
                 <Route exact path='/covid-19' component={Table} />
                 <Redirect to='/' />
            </Switch>
        </>
    )
}

export default App;