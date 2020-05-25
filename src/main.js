import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Display from './mode-component/display';
import App from './App'
import MainPanel from './Dashboard/mainPanel';
import { Switch } from '@material-ui/core';

class Main extends React.Component{
    render(){
        return(<Router >
            <Switch>
            <Route path="/" component ={App}></Route>
             <Route  path= "dashboard" component = {MainPanel}/>
                <Route  path="mode" component={Display}/>
            </Switch>
        </Router>

        );
    }
}
export default Main;