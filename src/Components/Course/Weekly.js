import React from 'react';
import classes from './coursecontent.css';
import arrow from '../../Assets/icons/add.png';


const courseCon = (props) => {

    

    return (
        <div className={classes.weekCon}>
            <button className={classes.weekblock} onClick={props.click}> <img src={arrow}></img> <p> / Week {props.weekNumber}</p></button>
           
          
        </div>
    )
};

export default courseCon;