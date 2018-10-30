import React, { Component } from 'react';
import classes from './App.css';
import SideNav from './Components/SideNav';
import SideBar from './Components/SideBar';
import TopBar from './Components/TopBar';
import Foot from './Components/Foot';
import Mainblock from './Components/Mainblock';
import IconsList from './Components/Iconslist';
import sideclasses from './Components/SideBar.css';


class App extends Component {

  state = {
    icons: [ {id: "HOME", background: "#1F374A", src: require('./Assets/icons/house.png')},
             {id: "PROFILE & NETWORK", background: "#182C3A", src: require('./Assets/icons/user.png')},
             {id: "COURSE CONTENT", background: "#182C3A", src: require('./Assets/icons/language.png')},
             {id: "RESOURCES", background: "#182C3A", src: require('./Assets/icons/folder.png')},
             {id: "PROJECTS", background: "#182C3A", src: require('./Assets/icons/portfolio.png')},
             {id: "CHALLENGES", background: "#182C3A", src: require('./Assets/icons/podium.png')},
             {id: "PLACES TO EAT NEARBY", background: "#182C3A", src: require('./Assets/icons/hamburger.png')} ],

    headings: "HOME",
    styles: {sideclasses}

        };

        
        
        toggleHighlightHandler = (iconIndex) => {

        
          //copy array from initial state
          let imgBack = [...this.state.icons];
          let headingIndex = this.state.headings;
          
          
          
          //handles the item being clicked
         if (imgBack[iconIndex].background === "#182C3A"){
             imgBack[iconIndex].background = "#1F374A";
             headingIndex = imgBack[iconIndex].id;
          
             this.setState({headings: headingIndex})
         }
      /* handles the items not being clicked - changes the background back to default by comparing the index of the item
      clicked to all the other indexes in the array. if they are different to the one clicked it sets the background
      back */

         imgBack.map((arra, index) => {
              if (index !== iconIndex){
                  imgBack[index].background = "#182C3A";
              
              }
            
      })

              //set copied state array as new state
             this.setState({icons: imgBack})
             
             


         };
         
     

         
      
    
      
  
  render() {

    let headingIndex = this.state.headings;
    let steezy = sideclasses.secondLeft;
    




    let icons = (
      <div>
        {this.state.icons.map((myArray, index) => {
            let style = {
              backgroundColor: myArray.background,   
          }

          return<IconsList
          click={() => this.toggleHighlightHandler(index)} 
          src={myArray.src}
          style={style}
          />
          
          
          
        })}
        </div>
  )

    return (
      <div className={classes.App}>
      <TopBar/>
      <div className={classes.content}>
      <SideNav>
        {icons}
      </SideNav>
      <SideBar 
      
      headers={this.state.headings}
      />
      <Mainblock />
     </div>
     <Foot />
      </div>
    );
  }
}

export default App;
