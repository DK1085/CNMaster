import React from 'react';
import classes from './coursecontent.css';
import arrow from '../../Assets/icons/is-greater-than.png';

const courseCon = () => {

    return (
        <div className={classes.weekCon}>
            <div className={classes.weekblock}> <img src={arrow}></img> <p>  Week One</p></div>
            <div className={classes.weekblock}> <img src={arrow}></img> <p> Week Two</p></div>
            <div className={classes.weekblock}> <img src={arrow}></img> <p> Week Three</p></div>
            <div className={classes.weekblock}> <img src={arrow}></img> <p> Week Four</p></div>
            <div className={classes.weekblock}> <img src={arrow}></img> <p> Week Five</p></div>
            <div className={classes.weekblock}> <img src={arrow}></img> <p> Week Six</p></div>
            <div className={classes.weekblock}> <img src={arrow}></img> <p> Week Seven</p></div>
            <div className={classes.weekblock}> <img src={arrow}></img> <p> Week Eight</p></div>
            <div className={classes.weekblock}> <img src={arrow}></img> <p> Week Nine</p></div>
            <div className={classes.weekblock}> <img src={arrow}></img> <p> Week Ten</p></div>
            <div className={classes.weekblock}> <img src={arrow}></img> <p> Week Eleven</p></div>
            <div className={classes.weekblock}> <img src={arrow}></img> <p> Week Twelve</p></div>
          
        </div>
    )
}

export default courseCon;