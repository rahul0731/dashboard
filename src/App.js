import React from 'react';
import Alarm from './Dashboard/alarm';
import Home from './Dashboard/home';
import Logout from './Dashboard/logout'
import { Route, BrowserRouter,Switch} from 'react-router-dom';
import Display from './mode-component/display'


const App= () =>{
    return (<BrowserRouter>
         <Switch>
         <Route  exact path="/" component={Home}/>
            
            <Route  path="/alarmingvent" component ={Alarm}/>
            <Route  path="/mode" component = {Display}/>
            <Route  path="/logout" component = {Logout}/>
         </Switch>
           
           
          
    </BrowserRouter>
    );
}

export default App;