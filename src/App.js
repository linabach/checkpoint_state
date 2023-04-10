import React, { Component } from 'react'
import Profile from './Component/Profile'
import './App.css'

export default class App extends Component {
 
  constructor(props) {
    super(props)
    this.state={ show:false}
    }
  toggle=() => {this.setState ( { show:  !this.state.show} )}
  render() {
    return (
      <div>
        <button className='buttstyle' onClick= {this.toggle}>show/hide</button>
        { this.state.show && <Profile/>}
      </div>
    )
  }
}


