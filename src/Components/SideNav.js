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

            }

            
            toggleHighlightHandler = () => {
                if (this.state.icons.background === "#1F374A"){
                    this.setState({background: "#FFFFFF"})
                }
                else {
                    this.setState({background: "#1F374A"})
                }
            }

    render(){

        let icons = (
            <div>
              {this.state.icons.map((myArray, index) => {
                  
                return<IconsList
                click={() => this.toggleHighlightHandler()} 
                backgroundType={myArray.background}
                src={myArray.src}/>
                
              })}
              </div>
        )

        return (
            <div className={classes.farleft}>
                {icons}
        

            </div>



        )

    }

}


export default sidenav;