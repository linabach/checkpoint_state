import React, { Component } from 'react'
import Counter from './Counter'
import './Profile.css'


export default class Profile extends Component {
    constructor(props){
        super(props)
        this.Person ={
         fullName: "Lina",
         age: 19,
         imgSrc: "profile12.png",
         profession: " student"
        }
    }
    render() {
        return (
            <div>
                <div className="box">
                    <div className="card">
                        <div className="imgBx">
                           <img src= {this.Person.imgSrc}  alt="profile"/>
                        </div>
                        <div className="details">
                            <h2> <span style = {{fontWeight: "600", fontSize: "14px"}} >{this.Person.fullName}</span> <span style = {{fontWeight: "600", fontSize: "14px"}}>{this.Person.age}</span><span style = {{fontWeight: "600", fontSize: "14px"}}>{this.Person.profession}</span></h2>
                        </div>
                    </div>
                </div>
                <div>
                    <Counter/>
                </div>
            </div>
            )
              }
                 }
