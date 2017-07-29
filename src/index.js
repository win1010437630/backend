import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import $ from 'jquery';
import createHistory from 'history/createBrowserHistory';
import './common.css';
import Home from './Home';
import Works from './Works';
import Points from './Points';
import Services from './Services';
import Vision from './Vision';
import History from './History';
import Team from './Team';
import Press from './Press';
import Life from './Life';
import Contant from './Contant';
import Signin from './Signin';
import Signup from './Signup';
import logo from './img/logo.png';

class Better extends Component {
  constructor(){
    super();
    this.state={
      
    }
  }  
  componentDidMount(){
    /*$.ajax({
      url:'http://localhost:8005/text',
      type:'get',
      success:function(opt){
        console.log(opt)
        this.setState({arr:opt});
      }.bind(this)
   })*/
	var location=window.location.href;

	if(location.lastIndexOf('works')!=-1){
		this.refs.works.classList.add('active');		
		this.refs.ul_works.classList.add('active'); 
		this.refs.li_works.className='active';
	}else if(location.lastIndexOf('points')!=-1){
        this.refs.works.classList.add('active');        
        this.refs.ul_works.classList.add('active'); 
        this.refs.li_points.className='active';
    }else if(location.lastIndexOf('services')!=-1){
        this.refs.services.classList.add('active');        
    }else if(location.lastIndexOf('vision')!=-1){
        this.refs.about.classList.add('active');        
        this.refs.ul_about.classList.add('active'); 
        this.refs.li_vision.className='active';
    }else if(location.lastIndexOf('history')!=-1){
        this.refs.about.classList.add('active');        
        this.refs.ul_about.classList.add('active'); 
        this.refs.li_history.className='active';
    }else if(location.lastIndexOf('team')!=-1){
        this.refs.about.classList.add('active');        
        this.refs.ul_about.classList.add('active'); 
        this.refs.li_team.className='active';
    }else if(location.lastIndexOf('life')!=-1){
        this.refs.press.classList.add('active');        
        this.refs.ul_press.classList.add('active'); 
        this.refs.li_life.className='active';
    }else if(location.lastIndexOf('press')!=-1){
        this.refs.press.classList.add('active');        
        this.refs.ul_press.classList.add('active'); 
        this.refs.li_press.className='active';
    }
    else if(location.lastIndexOf('contant')!=-1){
        this.refs.contant.classList.add('active');        
    }else if(location.lastIndexOf('signin')!=-1){
        this.refs.extras.classList.add('active');        
        this.refs.ul_sign.classList.add('active'); 
        this.refs.li_signin.className='active';
    }else if(location.lastIndexOf('signup')!=-1){
        this.refs.extras.classList.add('active');        
        this.refs.ul_sign.classList.add('active'); 
        this.refs.li_signup.className='active';
    }else{
		this.refs.home.classList.add('active');
	}

  }
  render(){
    return (<Router>
    <div className='Container'>
      <div className="navbar navbar-inverse">
        <div className="navbar-inner">
            <button type="button" className="btn btn-navbar visible-phone" id="menu-toggler">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>            
            <a className="brand" href="index.html"><img src={logo} /></a>
            <ul className="nav pull-right">                
                <li className="hidden-phone">
                    <input className="search" type="text" />
                </li>
                <li className="notification-dropdown hidden-phone">
                    <a href="#" className="trigger">
                        <i className="icon-warning-sign"></i>
                        <span className="count">8</span>
                    </a>
                    <div className="pop-dialog">
                        <div className="pointer right">
                            <div className="arrow"></div>
                            <div className="arrow_border"></div>
                        </div>
                        <div className="body">
                            <a href="#" className="close-icon"><i className="icon-remove-sign"></i></a>
                            <div className="notifications">
                                <h3>You have 6 new notifications</h3>
                                <a href="#" className="item">
                                    <i className="icon-signin"></i> New user registration
                                    <span className="time"><i className="icon-time"></i> 13 min.</span>
                                </a>
                                <a href="#" className="item">
                                    <i className="icon-signin"></i> New user registration
                                    <span className="time"><i className="icon-time"></i> 18 min.</span>
                                </a>
                                <a href="#" className="item">
                                    <i className="icon-envelope-alt"></i> New message from Alejandra
                                    <span className="time"><i className="icon-time"></i> 28 min.</span>
                                </a>
                                <a href="#" className="item">
                                    <i className="icon-signin"></i> New user registration
                                    <span className="time"><i className="icon-time"></i> 49 min.</span>
                                </a>
                                <a href="#" className="item">
                                    <i className="icon-download-alt"></i> New order placed
                                    <span className="time"><i className="icon-time"></i> 1 day.</span>
                                </a>
                                <div className="footer">
                                    <a href="#" className="logout">View all notifications</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="notification-dropdown hidden-phone">
                    <a href="#" className="trigger">
                        <i className="icon-envelope-alt"></i>
                    </a>
                    <div className="pop-dialog">
                        <div className="pointer right">
                            <div className="arrow"></div>
                            <div className="arrow_border"></div>
                        </div>
                        <div className="body">
                            <a href="#" className="close-icon"><i className="icon-remove-sign"></i></a>
                            <div className="messages">
                                <a href="#" className="item">
                                    <img src="img/contact-img.png" className="display" />
                                    <div className="name">Alejandra Galván</div>

                                    <div className="msg">
                                        There are many variations of available, but the majority have suffered alterations.
                                    </div>
                                    <span className="time"><i className="icon-time"></i> 13 min.</span>
                                </a>
                                <a href="#" className="item">
                                    <img src="img/contact-img2.png" className="display" />
                                    <div className="name">Alejandra Galván</div>
                                    <div className="msg">
                                        There are many variations of available, have suffered alterations.
                                    </div>
                                    <span className="time"><i className="icon-time"></i> 26 min.</span>
                                </a>
                                <a href="#" className="item last">
                                    <img src="img/contact-img.png" className="display" />
                                    <div className="name">Alejandra Galván</div>
                                    <div className="msg">
                                        There are many variations of available, but the majority have suffered alterations.
                                    </div>
                                    <span className="time"><i className="icon-time"></i> 48 min.</span>
                                </a>
                                <div className="footer">
                                    <a href="#" className="logout">View all messages</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle hidden-phone" data-toggle="dropdown">
                        Your account
                        <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="personal-info.html">Personal info</a></li>
                        <li><a href="#">Account settings</a></li>
                        <li><a href="#">Billing</a></li>
                        <li><a href="#">Export your data</a></li>
                        <li><a href="#">Send feedback</a></li>
                    </ul>
                </li>
                <li className="settings hidden-phone">
                    <a href="personal-info.html" role="button">
                        <i className="icon-cog"></i>
                    </a>
                </li>
                <li className="settings hidden-phone">
                    <a href="signin.html" role="button">
                        <i className="icon-share-alt"></i>
                    </a>
                </li>
            </ul>            
        </div>
      </div>
      {/*start sidebar*/}
      <div id="sidebar-nav">
        <ul id="dashboard-menu">
            <li ref='home'>
                <Link to="/">
                    <i className="icon-home"></i>
                    <span>Home</span>
                </Link>
            </li> 
            <li ref='works'>
                <a className="dropdown-toggle" href="#">
                    <i className="icon-folder-open"></i>
                    <span>Works</span>
                    <i className="icon-chevron-down"></i>
                </a>
                <ul className="submenu" ref="ul_works">
                    <li><Link to="/works" ><a ref="li_works">user works</a></Link></li>
                    <li><Link to="/points"><a ref="li_points">points</a></Link></li>
                </ul>
            </li>
            <li ref='services'>
                <Link to="/services">
                    <i className="icon-edit"></i>
                    <span>Services</span>
                </Link>
            </li>
            <li ref='about'>
                <a className="dropdown-toggle ui-elements" href="#">
                    <i className="icon-bookmark"></i> 
                    <span>About</span>
                    <i className="icon-chevron-down"></i>
                </a>
                <ul className="submenu" ref="ul_about">
                    <li><Link to="/vision"><a ref='li_vision'>Vision</a></Link></li>
                    <li><Link to="/history"><a ref='li_history'>History</a></Link></li>
                    <li><Link to="/team"><a ref='li_team'>Team</a></Link></li>
                </ul>
            </li>
            <li ref='press'>
                <a className="dropdown-toggle ui-elements" href="#">
                    <i className="icon-code-fork"></i>
                    <span>Press</span>
                    <i className="icon-chevron-down"></i>
                </a>
                <ul className="submenu" ref='ul_press'>
                    <li><Link to="/press"><a ref='li_press'>press release</a></Link></li>
                    <li><Link to="/life"><a ref='li_life'>life</a></Link></li>
                </ul>
            </li>
            <li ref='contant'>
                <Link to="/contant">
                    <i className="icon-cog"></i>
                    <span>Contant</span>
                </Link>
            </li>
            <li ref='extras'>
                <a className="dropdown-toggle" href="#">
                    <i className="icon-share-alt"></i>
                    <span>Extras</span>
                    <i className="icon-chevron-down"></i>
                </a>
                <ul className="submenu" ref="ul_sign">
                    <li><Link to="/signin"><a ref='li_signin'>Sign in</a></Link></li>
                    <li><Link to="/signup"><a ref='li_signup'>Sign up</a></Link></li>
                </ul>
            </li>
        </ul>
      </div>
      {/*end sidebar*/}
	  {/* main container*/}
	  <Route exact path="/" component={Home}/>
	  <Route path="/works" component={Works}/>
      <Route path="/points" component={Points}/>
      <Route path="/services" component={Services}/>
      <Route path="/vision" component={Vision}/>
      <Route path="/history" component={History}/>
      <Route path="/team" component={Team}/>
      <Route path="/press" component={Press}/>
      <Route path="/life" component={Life}/>
      <Route path="/contant" component={Contant}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
    </div>
  </Router>);
  }
}

export default Better;
ReactDOM.render(<Better/>, document.getElementById('root'));