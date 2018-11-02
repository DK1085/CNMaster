import React from 'react';
import classes from '../Profile/Profile.css'
import profilepic from '../../Assets/icons/profile-placeholder.png';

const profileContent = () => {
    return (
        <div>
            <div className={classes.profilePicBox}>
                <img className={classes.profilepicPH} src={profilepic}></img>
            </div>
            <div className={classes.nameInfoBox}>
            <div className={classes.nameInfo}>
            <p className={classes.name}>Firstname Lastname</p>
            </div>
            <div className={classes.buttons}>
            <button className={classes.editButton}>Edit Profile</button>
            <button className={classes.moreActions}>...</button>
            </div>
        
            </div>
            <div className={classes.info}>
            <div className={classes.infolist}>
                <p>Email:</p>
                <p>Github URL:</p>
                <p>Something:</p>
            </div>
            <div className={classes.infoAnswers}>
                <p>firstname@wearecodenation.com</p>
                <p>https://github.com/DK1085</p>
            </div>
            </div>
        </div>
    )
}


export default profileContent;