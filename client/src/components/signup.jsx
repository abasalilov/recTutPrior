import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from './navbar.jsx';
      //<li className="menu-item"><Link to="/signup">Sign Up</Link></li>
      //<li className="menu-item"><Link to="/signin">Sign In</Link></li>      

export default class Login extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log('e',e)
  }

  render() {

    return (
      <div>
      <NavBar />
        <div style={{width:'50%',padding: '0em 3em', height:'auto', display: 'block', textAlign:'left',overflow:'hidden', position:'absolute',marginLeft:'auto',marginRight:'auto'}} >
          <h3 style={{height: '1em', display:'block', marginLeft:'auto', marginRight:'auto', width:'15em', marginTop:'4em'}}> Recruiter Tutor</h3>
          <p style={{height:'auto', display:'block',fontSize:'1.4em',marginTop:'2em', marginBottom:'2em'}}>
            Sign into your Recruiter Tutor account</p>
          <div style={{border:'2px solid black', borderRadius:'2px', padding:'1em 1em', fontSize:'1.2em'}}>
          <form onSubmit={this.handleSubmit.bind(this)} style={{paddingTop:'2em', height:'auto'}}>
            <div style={{height:'3em', display:'inline-block'}}>
              <label style={{paddingRight:'11em'}}>Username</label>
              <div style={{height:'auto'}}>
                <input name="username" type="text" placeholder="Username" style={{borderBottom:'1px solid black', fontSize:'1.2em'}}/>
                <label style={{paddingRight:'11em'}}>Email</label>
                <input name="email" type="text" placeholder="Email" style={{borderBottom:'1px solid black', fontSize:'1.2em'}}/>
              </div>
            </div><br/><br/>
            <div style={{height:'auto'}}>
              <label style={{paddingRight:'11em'}}>Password</label>
              <div style={{height:'auto', marginBottom:'2em'}}>
                <input name="password" type="password" placeholder="Password" style={{borderBottom:'1px solid black', fontSize:'1.2em'}}/>
                 <label style={{paddingRight:'11em'}}>Confirm Password</label>
              <div style={{height:'auto', marginBottom:'2em'}}>
                <input name="confirm password" type="password" placeholder="Confirm Password" style={{borderBottom:'1px solid black', fontSize:'1.2em'}}/>
              </div>
            </div><br/>
          <div className="login-button" style={{textAlign:'center', marginBottom:'1.4em', height:'auto', backgroundColor: 'rgba(249,63,25,1)', width:'30%', borderRadius:'2px', border:'1px solid black', padding:'0.5em 1em'}}>
              <button type="submit" style={{textAlign:'center', fontSize:'1.4em', color:'white', fontWeight:'900'}}><Link to="/home">GO</Link></button>
            </div>
            </div>
          </form>
          </div>
            </div>
        </div>
      )
  }
}



      