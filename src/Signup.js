import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import $ from 'jquery';
import createHistory from 'history/createBrowserHistory';
import logo from './img/logo.png';
class Signup extends Component {
  render() {
    return (
      <div className="Signup">
       	
	    <div className="row-fluid login-wrapper">
	        <div className="box">
	            <div className="content-wrap">
	                <h6>Sign Up</h6>
	                <input className="span12" type="text" placeholder="E-mail address" />
	                <input className="span12" type="password" placeholder="Password" />
	                <input className="span12" type="password" placeholder="Confirm Password" />
	                <div className="action">
	                    <Link to="/signup"><a className="btn-glow primary signup">Sign up</a></Link>
	                </div>                
	            </div>
	        </div>

	        <div className="span4 already">
	            <p>Already have an account?</p>
	            <Link to="/signin"><a>Sign in</a></Link>
	        </div>
	    </div>
      </div>
    );
  }
}

export default Signup;
