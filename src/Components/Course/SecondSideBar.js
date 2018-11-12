import React from 'react';
import classes from '../SideBar.css';
import DayBlock from '../Course/DayBlock';




const secondbar = (props) => {
    

    return (
        <div className={classes.secondLeftpopout}>
            <div className={classes.headingBox}>
                    {props.weektitles}
                <p className={classes.headings}>
                </p>
            </div>
            <div className={classes.mainContainerpopout}>
                {props.weekday.map(myArray => 
                    <DayBlock day={myArray.Name}/>
                )}
            </div>
        </div>
    )
}

export default secondbar;