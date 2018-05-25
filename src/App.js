import React, { Component } from 'react';
import MaterialIcon from 'react-google-material-icons';

import Pages from './pages';

import 'typeface-work-sans';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      pageNumber: 0,
      totalPages: 30,
    }; 
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  componentDidMount() {
    // console.log('mounted')
    this.setState({
      pageNumber: 0,
      totalPages: 30
    });
  }

  advance = () => {
    // console.log('clicked', this.state.pageNumber)
    this.setState({
      pageNumber: this.state.pageNumber+1
    });
  }

  return = () => {
    // console.log('clicked', this.state.pageNumber)
    this.setState({
      pageNumber: this.state.pageNumber-1
    });
  }

  handleKeyDown = (e) => {
    // console.log('keypres', e.which)
    if (e.which === 39) // right
      this.advance();
    else if (e.which === 37) //left
      this.return();
  }

  render() {
    return (
        <div className="App">
          <div className='advance-bar' onClick={this.advance}>
            <MaterialIcon icon="play_arrow" id="advance-arrow" size={24}/>
          </div>
          <Pages page={this.state.pageNumber}/>
          <Progress width={this.state.pageNumber/this.state.totalPages*window.innerWidth}/>
        </div>
    );
  }
}

class Progress extends Component {
  render(){
    return(
      <div className="progressBar" style={{width:this.props.width}}></div>
    );
  }
}

export default App;