import React, { Component } from 'react';
import $ from 'jquery';

class Press extends Component {
  render() {
    return (
      <div className="Press">
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
	                                <label>Title</label>
	                                <input className="span9 title" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>Contact</label>
	                                <input className="span9 contact" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>Press title</label>
	                                <input className="span9 press_title" type="text" />
	                            </div>
	                            <div className="field-box textarea">
	                                <label>Press titlesub</label>
	                                <textarea className="span9 title_sub"></textarea>
	                            </div>
	                            <div className="field-box">
	                                <label>Press titlesub</label>
	                                <input className="span9 title_sub" type="text" />
	                            </div>
	                            <div className="field-box textarea">
	                                <label>press con</label>
	                                <textarea className="span9 press_con"></textarea>
	                            </div>
	                            <div className="field-box">
	                                <label>Time</label>
	                                <input className="span9 time" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>Vision pic</label>
	                                <input className="span8 vision_pic" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>
	                            <div className="field-box actions">
		                            <input type="button" className="btn-glow primary" value="Create poster" />
		                            <span>OR</span>
		                            <input type="reset" value="Cancel" className="reset" />
		                        </div>
	                        </form>
	                    </div>
	                </div>
            	</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Press;
