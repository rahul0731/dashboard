import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';


const sidebar = () =>{
    return( <div class="sidebar " data-color="danger" data-background-color="black" >
      {/* <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    --> */}
      <div class="logo">
        <a href="/" class="simple-text logo-normal">
          ABM
        </a>
      </div>
      <div class="logo">
        <p></p>
      <img src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png" width="35" height="35" alt="img" class="rounded-circle "/>  
        <a href="/" class=" text-left ml-3 ">
        
        Vinay Joshi
        </a>
      </div>

      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item  ">
            <NavLink   exact activeClassName="selected" className="nav-link" to="/">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink  activeClassName="selected"className="nav-link" to="/alarmingvent">
              <i class="material-icons">report_problem</i>
              <p>Alarming Vent</p>
            </NavLink>
          </li>


          <li class="nav-item">
            <NavLink  to="/mode"className="nav-link" >
              <i class="material-icons">video_label</i>
              <p>Mode</p>
              
            </NavLink>
          </li>



          <li class="nav-item ">
            <NavLink activeClassName="selected" className="nav-link" to="/logout">
              <i class="material-icons">exit_to_app</i>
              <p>Logout</p>
            </NavLink>
          </li>
         
        </ul>
      </div>
    </div>

    
   
        
    );
}

export default sidebar;