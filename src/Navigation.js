import React, {Component} from "react";
import './Navigation.css';

//import files to this js file
export default class Navigation extends Component{
  render() {
    return (
        <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">Login</a>
            <a href="#">Contact</a>

        </nav>
    )
  }
}
// format for the nav