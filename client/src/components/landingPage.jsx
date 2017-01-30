import React from 'react';
import {Link} from 'react-router';
import NavBar from './navbar.jsx';
// style={{backgroundColor: '#5163EF', width: 'auto', paddingTop: "2em", paddingLeft: "2em", color: 'white', fontFamily: 'Open Sans'}}


export default class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  componentDidMount() {
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {

    return (
      <div >
      <NavBar />
      <br/>
      <div>
      <div>
      <div style={{backgroundColor: '#5163EF', color: 'white', fontFamily: 'Open Sans', paddingLeft:"2em", paddingTop: "2em"}}>
        <span><h1>Recruiter Tutor</h1></span>
      <br/>
      <span><h4>This site is dedicated to those pursuing the difficult, yet rewarding, discipline of recruiting.</h4></span>
      <br/>
      <ul>
      <li><h5>Build teams</h5></li>
      <li><h5>Find talent</h5></li>
      <li><h5>Meet personnel demands</h5></li>
      <li><h5>Coach those seeking employment</h5></li>
      <li><h5>Guide employers to talent</h5></li>
      </ul>
      <br/>
      </div>
      </div>
      <br/>
      <div style={{paddingLeft:"2em"}}>
      <h4> Interested in learing more? Try a <Link to="/demo" style={{color: '#FF4500'}}>
      demo </Link>
      lesson! </h4>
      </div>
      <br/>
      <div>
      <div style={{backgroundColor: '#5163EF', color: 'white', fontFamily: 'Open Sans', paddingLeft:"2em", paddingTop: "2em", paddingBottom: "2em"}}>
      <h3> Why recruiter tutor?</h3>
      <br />
      <h4>Howdy! My name is Aleks Basalilov and throughout my years as a recruiter I went through many, many hours of formal, informal, impropmtu training at various stages of my career. My mentors were exemplarly professionals, each guiding me through different aspects of recruting and took their own personal, unpaid, time to help me become a productive member and leader within their teams.</h4>
      </div>
      </div>
      <div >
      <br/>
      <h4>Recruiting a co-founder? Checkout my blog: <a href="http://cube8apps.ghost.io/2016/01/19/alphabet-soup-recruiting-a-co-founder/" style={{color: '#FF4500'}}>Finding a co-founder</a></h4>
      </div>
      <div >
      <br />
      <h4>Questions about recruiter tutor? <Link to="/contactUs" style={{color: '#FF4500'}}>
      Reach out! </Link></h4>
      </div>
      <br/>
      <img src="https://avatars3.githubusercontent.com/u/15370140?v=3&s=400" />
      </div>
      </div>
      )
  }
}


// <Link to="/demo"><button>Try a demo lesson</button></Link>
// </div>
// <div className="app-info">
// <h1>Learn how to build teams and find talent</h1>
// <div className="app-info-box">
// <div className="screenshot1">
// </div>
// <div className="app-info-text">
// Those starting out: Start your recruiting career
// </div>
// </div>
// <div className="app-info-box">
// <div className="screenshot2">
// </div>
// <div className="app-info-text">
// Those founding a start-up: Build the team you need for your start-up
// </div>
// </div>
// <div className="app-info-box">
// </div>
// <div className="app-info-text" style={{textAlign: 'center'}}>
// Those in the field: Refresh your fundementals
// </div>
