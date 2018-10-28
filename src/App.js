import React, { Component } from 'react';

import classes from './App.css';
import SideNav from './Components/SideNav';
import SideBar from './Components/SideBar';
import TopBar from './Components/TopBar';
import Foot from './Components/Foot';
import Mainblock from './Components/Mainblock';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
      <TopBar />
      <div className={classes.content}>
      <SideNav />
      <SideBar />
      <Mainblock />
     </div>
     <Foot />
      </div>
    );
  }
}

export default App;
