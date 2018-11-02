import React from 'react';
import classes from './Help.css';
import minipic from '../../Assets/icons/profile-placeholder.png';

const questionblock = () => {
    return (
        <div className={classes.blockBox}>
            <img className={classes.minipic} src={minipic}></img>
            <div className={classes.questiontitlebox}>
            <p className={classes.title}>This is an example question?</p>
            <p>Once the user has clicked on this it will...</p>
            </div>
        </div>
    )
}

export default questionblock;