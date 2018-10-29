import React from 'react';
import classes from './TopBar.css';

const topbar = (props) => {
    return <div className={classes.topper}>
        <p className={classes.headings}>{props.header}</p>
    
    </div>
};

export default topbar;