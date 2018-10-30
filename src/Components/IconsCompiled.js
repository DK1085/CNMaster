import React from 'react';
import IconsList from './Iconslist';

const compiledicons = (props) => props.icons.map((myArray, index) => {
    let style = {
      backgroundColor: myArray.background,   
  }

  return<IconsList
  click={() => props.clicked(index)} 
  src={myArray.src}
  style={style}
  />
  
  
  
})







        
        
    
    

export default compiledicons;