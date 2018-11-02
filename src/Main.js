import React, { Component } from 'react';
import classes from './Main.css';
import SideNav from './Components/SideNav';
import SideBar from './Components/SideBar';
import TopBar from './Components/TopBar';
import Foot from './Components/Foot';
import Mainblock from './Components/Mainblock';
import CompiledIcons from './Components/IconsCompiled';


class Main extends Component {

  state = {
    icons: [ {id: "HOME", background: "#1F374A", src: require('./Assets/icons/home.png')},
             {id: "PROFILE & NETWORK", background: "#182C3A", src: require('./Assets/icons/user.png')},
             {id: "COURSE CONTENT", background: "#182C3A", src: require('./Assets/icons/language.png')},
             {id: "RESOURCES", background: "#182C3A", src: require('./Assets/icons/folder.png')},
             {id: "PROJECTS", background: "#182C3A", src: require('./Assets/icons/portfolio.png')},
             {id: "CHALLENGES", background: "#182C3A", src: require('./Assets/icons/podium.png')},
             {id: "NEED SOME HELP?", background: "#182C3A", src: require('./Assets/icons/question.png')},
             {id: "LIVE LEARN", background: "#182C3A", src: require('./Assets/icons/antenna.png')},
             {id: "PLACES TO EAT NEARBY", background: "#182C3A", src: require('./Assets/icons/hamburger.png')} ],

    headings: "HOME",
    secondLeftProfile: false,
    homeContent: true,
    profileContent: false,
    helpContent: false,
    weekList: false
        };

        expandSideBar = () => {
          this.setState({secondLeftProfile: true})
        }

        reduceSideBar = () => {
          this.setState({secondLeftProfile: false})
        }

        
        
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
      
         if (iconIndex === 1){
           this.expandSideBar();
         } else if (iconIndex === 6){
          this.expandSideBar();
        } else {
           this.reduceSideBar();
         }

         if (imgBack[iconIndex].id !== "HOME"){
          this.setState({homeContent: false})
        }else{
          this.setState({homeContent: true})};

        if (imgBack[iconIndex].id === "PROFILE & NETWORK"){
          this.setState({profileContent: true})
        } else  {
          this.setState({profileContent: false})
        };

        if (imgBack[iconIndex].id === "NEED SOME HELP?"){
          this.setState({helpContent: true})
        } else  {
          this.setState({helpContent: false})
        };

        if (imgBack[iconIndex].id === "COURSE CONTENT"){
          this.setState({weekList: true})
        } else {
          this.setState({weekList: false})
        };

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

    let icons = (
      <div>
        <CompiledIcons 
        clicked = {this.toggleHighlightHandler}
        icons = {this.state.icons}
        />
        </div>
  )

    return (
      <div className={classes.Main}>
         <TopBar/>
      <div className={classes.content}>
         <SideNav>
            {icons}
         </SideNav>
         <SideBar
            expand={this.state.secondLeftProfile}
            headers={this.state.headings}
            homecontent ={this.state.homeContent}
            profilecontent = {this.state.profileContent}
            helpcontent = {this.state.helpContent}
            weeklist = {this.state.weekList}
          />
         <Mainblock />
     </div>
         <Foot />
         
      </div>
    );
  }
}

export default Main;
