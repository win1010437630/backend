import React, { Component } from 'react';
import $ from 'jquery';
import gallery_img from './img/no-img-gallery.png';

class Life extends Component {
  render() {
    return (
      <div className="Life">
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
	                                <label>Life title</label>
	                                <textarea className="span9 life_title" title="Please enter a vision text"></textarea>
	                            </div> 
	                            <div className="field-box textarea">
	                                <label>Life passage</label>
	                                <textarea className="span9 life_passage" title="Please enter a vision text"></textarea>
	                            </div> 
	                            <div className="field-box">
	                                <label>life_pic_one</label>
	                                <input className="span8 life_pic_one" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>   
	                            <div className="field-box">
	                                <label>life_pic_two</label>
	                                <input className="span8 life_pic_two" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>   
	                            <div className="field-box">
	                                <label>life_pic_three</label>
	                                <input className="span8 life_pic_three" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>   
	                            <div className="field-box">
	                                <label>life_pic_four</label>
	                                <input className="span8 life_pic_four" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>   
	                            <div className="field-box">
	                                <label>life_pic_five</label>
	                                <input className="span8 life_pic_five" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>   
	                            <div className="field-box">
	                                <label>life_pic_six</label>
	                                <input className="span8 life_pic_six" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>   
	                            <div className="field-box">
	                                <label>life_pic_seven</label>
	                                <input className="span8 life_pic_seven" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>   
	                            <div className="field-box">
	                                <label>life_pic_eight</label>
	                                <input className="span8 life_pic_eight" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>                  
	                            <div className="field-box actions">
	                                <input type="button" className="btn-glow primary Submit" value="Create poster"/>
	                                <span> OR </span>
	                                <input type="reset" value="Cancel" className="reset"/>
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

export default Life;
