import React from 'react';
import classes from './SideNav.css';
import logo from '../Assets/icons/Code-Nation-Short-White.png';





const sidenav = (props) => {
    return <div className={classes.farleft}>
    <img className={classes.logo} src={logo}></img>
    <div className={classes.up}>
        {props.children}
    </div>

    </div>

};
    
    

export default sidenav;