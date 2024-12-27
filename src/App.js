import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



export default class App extends Component {
  state={
    progress: 0
  }
  setProgress= (progress)=>{
    this.setState({progress: progress})

  }
  render() {
    return (
      <div className='bg-dark'>
        <Navbar/>
        
        color='#f11946'
        progress={this.state.progress}
  
        <News setProgress={this.setProgress} pageSize={6} country="in" category="sports"/>
      </div> 
    )
  }
}
