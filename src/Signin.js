import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import $ from 'jquery';
import createHistory from 'history/createBrowserHistory';
import landscape from './img/bgs/landscape.jpg';
import blueish from './img/bgs/blueish.jpg';
import seven from './img/bgs/7.jpg';
import eight from './img/bgs/8.jpg';
import nine from './img/bgs/9.jpg';
import ten from './img/bgs/10.jpg';
import twenty from './img/bgs/11.jpg';
import logo_first from './img/logo-white.png';


class Signin extends Component {
  componentDidMount(){
  	var $btns = $(".bg-switch .bg");
    $btns.click(function (e) {
        e.preventDefault();
        $btns.removeClass("active");
        $(this).addClass("active");
        var bg = $(this).data("img");
        $("html").css("background-image", "url('./img/bgs/" + bg + "')");
    });
  }
  render() {
    return (
      <div className="Signin">
       {/*background switcher*/}
	    <div className="bg-switch visible-desktop">
	        <div className="bgs">
	            <a href="#" data-img="landscape.jpg" className="bg active">
	                <img src={landscape} />
	            </a>
	            <a href="#" data-img="blueish.jpg" className="bg">
	                <img src={blueish} />
	            </a>            
	            <a href="#" data-img="7.jpg" className="bg">
	                <img src={seven} />
	            </a>
	            <a href="#" data-img="8.jpg" className="bg">
	                <img src={eight} />
	            </a>
	            <a href="#" data-img="9.jpg" className="bg">
	                <img src={nine} />
	            </a>
	            <a href="#" data-img="10.jpg" className="bg">
	                <img src={ten} />
	            </a>
	            <a href="#" data-img="11.jpg" className="bg">
	                <img src={twenty} />
	            </a>
	        </div>
	    </div>
	    <div className="row-fluid login-wrapper">
	        <div className="span4 box">
	            <div className="content-wrap">
	                <h6>Log in</h6>
	                <input className="span12" type="text" placeholder="E-mail address" />
	                <input className="span12" type="password" placeholder="Your password" />
	                <a href="#" className="forgot">Forgot password?</a>
	                <div className="remember">
	                    <input id="remember-me" type="checkbox" />
	                    <label for="remember-me">Remember me</label>
	                </div>
	                <Link to="/"><a className="btn-glow primary login">Log in</a></Link>
	            </div>
	        </div>
	        <div className="span4 no-account">
	            <p>Don\'t have an account?</p>
	            <Link to="/signup"><a to="/signup">Sign up</a></Link>
	        </div>
	    </div>
      </div>
    );
  }
}

export default Signin;
