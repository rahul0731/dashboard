import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsOffOutlinedIcon from '@material-ui/icons/NotificationsOffOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
// import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { Nav} from 'react-bootstrap';
import './css/style.css';
import '../App.css';       
// import App from '../App';


const navigation = () =>{
    return(<Nav class="nav  nav-tabs nav-fill  p-sm-2 " id="nav">
        <Link className="nav-item nav-link text-light "  href="#home"  >VENT001</Link>
		<Link class="nav-item nav-link text-light "  to="/"><HomeIcon/></Link>
		<Link class="nav-item nav-link text-light "  to="#home" ><NotificationsOffOutlinedIcon/></Link>
		<Link class="nav-item nav-link text-light "  to="#home" >NOALARM</Link>
		<Link class="nav-item nav-link text-sm-danger  "  id="setting" href="#home" ><SettingsIcon/></Link>
		<Link class="nav-item nav-link text-light "   to="#home" >MONITORING</Link>
      </Nav>
	);
     

}

export default navigation;