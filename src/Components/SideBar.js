import React from 'react';
import classes from './SideBar.css';

const sidebar = (props) => {
    const cssClasses = [`${classes.secondLeft}`, props.expand ? `${classes.secondLeftProfile}` : `${classes.secondLeft}`]


    return <div className={cssClasses.join(' ')}>
    <div className={classes.headingBox}>
    <p className={classes.headings}>{props.headers}</p>
    </div>
    <div className={classes.mainContainer}>
    <h3 className={classes.intro}> 
    Welcome, xxxx. 
    </h3>
        <p className={classes.intro}>
        
        This learning environment will contain all the curriculum notes, presentations, challenges, projects, and further resources.
        </p>
    </div>
    </div>
};

export default sidebar;