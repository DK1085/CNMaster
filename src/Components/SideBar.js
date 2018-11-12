import React, { Component } from 'react';
import classes from './SideBar.css';
import HomeContent from '../Components/Home/SideBarHome';
import ProfileContent from '../Components/Profile/SideBarProfile';
import HelpContent from '../Components/HelpSection/SideBarQuestions';
import FullWeekList from '../Components/Course/AllWeeks';
import SecondBar from '../Components/Course/SecondSideBar';

class SideBar extends Component {
    state = {
        courseButtons : [{title: "Coding Fundamentals & the Principles of Good Technical Design"},
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
                         {title: "Employer Sponsered Final Project"}, ],
    }

    
  

  render() {
    // this saves writing out this.props.{whateverYouArePassingIn} everytime inside the return.
    const {
      homecontent,
      profilecontent,
      helpcontent,
      weeklist
    } = this.props;

    const cssClasses = [`${classes.secondLeft}`, this.props.expand ? `${classes.secondLeftProfile}` : `${classes.secondLeft}`]

    const index = 1;


    return (
        <div className={classes.popout}>
        
        <div className={cssClasses.join(' ')}>
        <div className={classes.headingBox}>
        <p className={classes.headings}>{this.props.headers}</p>
        </div>
        <div className={classes.mainContainer}>
         {homecontent ? <HomeContent /> : null}
         {profilecontent ? <ProfileContent /> : null}
         {helpcontent ? <HelpContent /> : null}
         {weeklist ? <FullWeekList courseButtons = {this.state.courseButtons} clicked = {this.props.clicker}/> : null}
        </div>
        
        </div>
       
       
       
        </div>
    )
  }
}

export default SideBar;