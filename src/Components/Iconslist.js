import React from 'react';
import classes from './Iconslist.css';

const listOfIcons = (props) => {

    


    return <div className={classes.iconz}>
    <div className={classes.box} style={props.style} onClick={props.click}>
        <img onClick={props.click} src={props.src} alt="navicons" ></img>
    </div>
  
    
    </div>
};

export default listOfIcons;