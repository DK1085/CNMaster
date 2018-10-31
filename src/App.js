import React, { Component } from 'react';
import classes from './App.css';
import Main from './Main';
import Login from './Components/Login';



class App extends Component {
state = {isLoggedIn: false}


  render() {

    let main = (
      <div>
        <Main />
      </div>
    )

    return (
      <div className={classes.App}>
      {main}
      
      </div>
      
    );
  }
}

export default App;
