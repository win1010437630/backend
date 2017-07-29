import React, { Component } from 'react';
import $ from 'jquery';
import gallery_img from './img/no-img-gallery.png';

class Team extends Component {
  render() {
    return (
      <div className="Team">
     	<div className="content">        
        	<div className="container-fluid">
            	<div id="pad-wrapper" className="gallery">
            	<div className="row-fluid header">
	                <h3>From</h3>
	            </div>
            	<div className="row-fluid form-wrapper">
	                    {/*left column*/}
	                    <div className="span7 column">
	                        <form>
	                            <div className="field-box textarea">
	                                <label>Name</label>
	                                <input className="span9 name" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>First work</label>
	                                <input className="span9 first-work" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>Second work</label>
	                                <input className="span9 second_work" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>people pic</label>
	                                <input className="span8 people_pic" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>
	                            <div className="field-box textarea">
	                                <label>people intro</label>
	                                <textarea className="span9 people_intro"></textarea>
	                            </div>	                            
	                            <div className="field-box actions">
		                            <input type="button" className="btn-glow primary" value="Create poster" />
		                            <span>OR</span>
		                            <input type="reset" value="Cancel" className="reset" />
		                        </div>
	                        </form>
	                    </div>
	                </div>
            		<div className="no-gallery">
	                    <div className="row-fluid header">
	                        <h3>Gallery Blank State</h3>
	                    </div>
	                    <div className="center">
	                        <img src={gallery_img} />
	                        <h6>You don`t have any images</h6>
	                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
	                        <a className="btn-glow primary click">Add new image</a>
	                    </div>
	                </div>
            	</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Team;
