import React, {Component} from 'react';
import './SideNav.css';
import IconsList from './Iconslist';
import classes from './SideNav.css';




class sidenav extends Component {
    
    

    state = {
        icons: [ {id: "profile", background: "#1F374A", src: require('../Assets/icons/user.png')},
                 {id: "folder", background: "#28465E", src: require('../Assets/icons/folder.png')},
                 {id: "projects", background: "#28465E", src: require('../Assets/icons/portfolio.png')},
                 {id: "challenges", background: "#28465E", src: require('../Assets/icons/podium.png')} ],

            };

      
            toggleHighlightHandler = (iconIndex) => {

                //copy array from initial state
                let imgBack = [...this.state.icons];

                //handles the item being clicked
               if (imgBack[iconIndex].background === "#28465E"){
                   imgBack[iconIndex].background = "#1F374A"

               }
            /* handles the items not being clicked - changes the background back to default by comparing the index of the item
            clicked to all the other indexes in the array. if they are different to the one clicked it sets the background
            back */

            
               imgBack.map((arra, index) => {
                    if (index !== iconIndex){
                        imgBack[index].background = "#28465E";
                    }
                  
            })

                    //set copied state array as new state
                   this.setState({icons: imgBack})

                   
                   
               }
               
               
               
            
          
            

    render(){
        
        let icons = (
            <div>
              {this.state.icons.map((myArray, index) => {
                  let style = {
                    backgroundColor: myArray.background,
                    
                    
                }

                return<IconsList
                click={() => this.toggleHighlightHandler(index)} 
                backgroundType={myArray.background}
                src={myArray.src}
                style={style}
                />
                
                
                
              })}
              </div>
        )

        return (
            <div className={classes.farleft}>
            <div className={classes.up}>
                {icons}
            </div>

            </div>



        )

    }

}


export default sidenav;