import React from 'react';
import classes from './SideNav.css';





const sidenav = (props) => {
    return <div className={classes.farleft}>
    <div className={classes.up}>
        {props.children}
    </div>

    </div>

};
    
    

export default sidenav;