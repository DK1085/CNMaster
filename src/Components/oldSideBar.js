import React from 'react';
import classes from './SideBar.css';
import HomeContent from '../Components/Home/SideBarHome';
import ProfileContent from '../Components/Profile/SideBarProfile';
import HelpContent from '../Components/HelpSection/SideBarQuestions';
import FullWeekList from '../Components/Course/AllWeeks';
import SecondBar from '../Components/Course/SecondSideBar';


let courseButtons = [{title: "Coding Fundamentals & the Principles of Good Technical Design"},
                    {title: "Front-End Development"},
                    {title: "Front-End Development"},
                    {title: "Front-End Development"},
                    {title: "Front-End Development"},
                    {title: "Back-End Development"},
                    {title: "Back-End Development"},
                    {title: "Back-End Development"},
                    {title: "Mobile Apps with Swift"},
                    {title: "Employer Sponsered Final Project"},
                    {title: "Employer Sponsered Final Project"},
                    {title: "Employer Sponsered Final Project"}, ];

let showcourse = false;
let titles = courseButtons[0].title;

const toggleCourseHandler = (courseIndex) => {
    
    showcourse = true;
    console.log(showcourse);

}

const sidebar = (props) => {
    const cssClasses = [`${classes.secondLeft}`, props.expand ? `${classes.secondLeftProfile}` : `${classes.secondLeft}`]


    return <div className={classes.popout}>
    <div className={cssClasses.join(' ')}>
    <div className={classes.headingBox}>
    <p className={classes.headings}>{props.headers}</p>
    </div>
    <div className={classes.mainContainer}>
     {props.homecontent ? <HomeContent /> : null}
     {props.profilecontent ? <ProfileContent /> : null}
     {props.helpcontent ? <HelpContent /> : null}
     {props.weeklist ? <FullWeekList clicked = {toggleCourseHandler} /> : null}
    </div>
    
    </div>
   {showcourse ? 
   <SecondBar 
   weektitles={titles}
   

   /> : null}
   
   
    </div>
};

export default sidebar;