import React from 'react';
import WeekList from './Weekly';
import classes from './coursecontent.css';

/**
 * For moving around like a pro hackerman on vscode
 * 
 * Option + left/right arrow = jumping from word to word
 * 
 * Option + Shift + left/right arrow = Jumping from word to word whilst selecting
 * 
 * Option + Up/down arrow = moving current line up or down respectively
 * 
 * Option + Shift + Up/down arrow = copying current line up or down respectively
 * 
 * fn + left/right arrow = jump to start||end of line
 * 
 */

let allweeks = [{id: "1", title: "Coding Fundamentals"},
                {id: "2", title: "Front-End Development"},
                {id: "3", title: "Front-End Development"},
                {id: "4", title: "Front-End Development"},
                {id: "5", title: "Back-End Development"},
                {id: "6", title: "Back-End Development"},
                {id: "7", title: "Back-End Development"},
                {id: "8", title: "Mobile Development"},
                {id: "9", title: "Mobile Development"},
                {id: "10", title: "Employer Project"},
                {id: "11", title: "Employer Project"},
                {id: "12", title: "Cyber"} ];
                
                
    const fullweeks = (props) => props.courseButtons.map((myArray, index) => {
        return <WeekList weekNumber = {allweeks[index].id} click={() => props.clicked(index)}>{props.children}</WeekList>
})
                
                
export default fullweeks;