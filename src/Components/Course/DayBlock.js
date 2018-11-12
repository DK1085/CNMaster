import React from 'react';
import classes from '../Course/coursecontent.css';

/**
 * {} syntax when importing will only import what you specify inside the {braces}
 * saves importing things unneccessarily and wastefully
 * you can use 'standard' props call alongside 
 * see below :)
 */
const dayblock = ({day}) => {
    return (
        <div className = {classes.days}>
            <p className={classes.dayName}>{day}</p>
        </div>
    )
}

export default dayblock;