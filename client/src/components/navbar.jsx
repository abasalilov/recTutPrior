import React, { Component } from 'react';
import { Link } from 'react-router';
      //<li className="menu-item"><Link to="/signup">Sign Up</Link></li>
      //<li className="menu-item"><Link to="/signin">Sign In</Link></li>

export default class NavBar extends React.Component {

  componentDidMount() {
  }

  render() {

    return (
      <div className="nav">
      <ul>
      <li>Recruiter Tutor</li>
      <li> </li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/demo">Demo</Link></li>
      <li><Link to="/home">App</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Sign-Up</Link></li>
      <li><Link to="/contactUs">Contact</Link></li>
      </ul>
      </div>

    );
  }
}
