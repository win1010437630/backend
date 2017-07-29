import React, { Component } from 'react';
import $ from 'jquery';
import gallery_img from './img/no-img-gallery.png';
import Simditor from 'simditor';
import Richtext from './RichText';

class Vision extends Component { 
  componentDidMount(){
    this.editor=new Simditor({
      textarea:$('#editor'),
      toolbar:[
        'title',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'fontScale',
        'color',
        'ol',
        'ul',
        'blockquote',
        'code',
        'table',
        'link',
        'image',
        'hr',
        'indent',
        'outdent',
        'alignment'
      ]
    });
  }
  richtext(){
    alert(this.editor.getValue());
  }
  render() {
    return (
      <div className="Vision">
     	<div className="content">        
        	<div className="container-fluid">
            	<div id="pad-wrapper" className="new-user">
            	<div className="row-fluid header">
	                <h3>From</h3>
	            </div>
            	<div className="row-fluid form-wrapper">
	                    {/*left column*/}
	                    <div className="span7 column">
	                        <form>
	                            <div className="field-box textarea">
	                                <label>Vision title</label>
	                                <textarea className="span9 vision_text" title="Please enter a vision text"></textarea>
	                            </div>
	                            <div className="field-box">
	                                <label>Vision bg</label>
	                                <input className="span8 vision_bg" type="file" onChange={this.setFiles}/><input type="button" className="one btn" value="上传"/>
	                            </div>
	                            <div className="field-box textarea">
	                                <label>Vision text</label>
	                                <textarea className="span9 vision_text"></textarea>
	                            </div>
	                            <div className="field-box textarea">
	                                <label>Vision textarea</label>
	                                <span style={{marginLeft: 0}} className="span9 vision_textarea">
	                                	<Richtext></Richtext>
	                                </span>
	                            </div>
	                            <div className="field-box">
	                                <label>Vision img</label>
	                                <input className="span8 vision_img" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>
	                            <div className="field-box">
	                                <label>prize name</label>
	                                <input className="span9 prize_name" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>prize img</label>
	                                <input className="span8 prize_img" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>
	                            <div className="field-box">
	                                <label>prize time</label>
	                                <input className="span9 prize_time" type="text" />
	                            </div>
	                            <div className="field-box textarea">
	                                <label>About aomei</label>
	                                <textarea className="span9 about_text"></textarea>
	                            </div>
	                            <div className="field-box">
	                                <label>About bg</label>
	                                <input className="span8 about_bg" type="file" onChange={this.setFiles}/><input type="button" className="four btn" value="上传"/>
	                            </div>                    
	                            <div className="field-box actions">
	                                <input type="button" onClick={this.richtext.bind(this)} className="btn-glow primary Submit" value="Create poster"/>
	                                <span> OR </span>
	                                <input type="reset" value="Cancel" className="reset"/>
	                            </div>
	                        </form>
	                    </div>
	                    <div className="span5 column">
	                        <table className="table">
	                            <tbody>
	                            	<tr>
		                                <td>Banner text</td>
		                                <td>Services text</td>
		                                <td>China text</td>
		                                <td>删除</td>
		                            </tr>
	                            </tbody>                                                      
	                        </table>
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

export default Vision;
