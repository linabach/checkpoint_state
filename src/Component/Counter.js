import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };}
    componentDidMount() {
        setInterval(() => {this.setState({count: this.state.count +1});}, 500);
          }
    
  render() {
    return (
      <div>
        <h1 style={{marginLeft:"740px", marginTop:"80px", color:"rgb(91, 54, 58)"}}> {this.state.count} </h1>

      </div>
    )
  }
}
