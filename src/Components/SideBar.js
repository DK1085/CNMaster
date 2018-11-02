import React from 'react';
import classes from './SideBar.css';
import HomeContent from '../Components/Home/SideBarHome';
import ProfileContent from '../Components/Profile/SideBarProfile';
import HelpContent from '../Components/HelpSection/SideBarQuestions';

const sidebar = (props) => {
    const cssClasses = [`${classes.secondLeft}`, props.expand ? `${classes.secondLeftProfile}` : `${classes.secondLeft}`]


    return <div className={cssClasses.join(' ')}>
    <div className={classes.headingBox}>
    <p className={classes.headings}>{props.headers}</p>
    </div>
    <div className={classes.mainContainer}>
     {props.homecontent ? <HomeContent /> : null}
     {props.profilecontent ? <ProfileContent /> : null}
     {props.helpcontent ? <HelpContent /> : null}
     
    </div>
    </div>
};

export default sidebar;