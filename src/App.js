import React, { Component } from 'react';

import './App.css';
import SideNav from './Components/SideNav';
import SideBar from './Components/SideBar';
import TopBar from './Components/TopBar';
import Foot from './Components/Foot';
import Mainblock from './Components/Mainblock';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TopBar />
      <div className="content">
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
