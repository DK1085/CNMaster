import React from 'react';
import classes from './SideBar.css';

const sidebar = (props) => {
    return <div className={classes.secondLeft}>
    <div className={classes.headingBox}>
    <p className={classes.headings}>{props.headers}</p>
    </div>
    </div>
};

export default sidebar;