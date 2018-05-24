import React, { Component } from 'react';
import './App.css';

class Day extends Component{
  render(){ 
    return(
      <div style={{'backgroundColor': this.props.color, width:'25%'}} className='day'/>
    );
  }
  
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Day color='yellow'/>
        <Day color='blue'/>
      </div>
    );
  }
}

export default App;