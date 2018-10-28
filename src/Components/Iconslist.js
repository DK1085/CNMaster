import React from 'react';
import './Iconslist.css';

const listOfIcons = (props) => {

    


    return <div className="iconz">
    <div className="imgBackground">
        <img onClick={props.click} src={props.src} alt="navicons"></img>
    </div>
  
    
    </div>
};

export default listOfIcons;