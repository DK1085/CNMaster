import React from 'react';
import classes from '../HelpSection/Help.css';
import QuestionBlock from './QuestionBlock';

const helpme = () => {
    return (
        <div className = {classes.wrapper}>
        <div className = {classes.one}>
                <div className={classes.infoBox}>
                    <p className={classes.asked}>x questions have been asked.</p>
                    <p className={classes.answered}> x questions have been answered.</p>
                    <p className={classes.help}>x questions still need some help.</p>
                </div>
                <div className={classes.helpButton}>
                    <button className={classes.addQ}>Ask a new question</button>
                
                </div>
                </div>
                <div className = {classes.two}>
                    <QuestionBlock />
                    <QuestionBlock />
                </div>
        </div>
    )
}

export default helpme;