import React, { Component } from 'react';
import $ from 'jquery';
import Simditor from 'simditor';
import Richtext from './RichText';

class Press extends Component {
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
      <div className="Press">
       <div className="content">        
        	<div className="container-fluid">
            	<div id="pad-wrapper" className="new-user">
            	<div className="row-fluid header">
	                <h3>From</h3>
	            </div>
            	<div className="row-fluid form-wrapper">
	                    {/*left column*/}
	                    <div className="span9 with-sidebar">
	                        <form>
	                            <div className="field-box textarea">
	                                <label>Contact</label>
	                                <input className="span9 title" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>Press title</label>
	                                <input className="span9 contact" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>Press subtitle</label>
	                                <input className="span9 press_title" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>Press con</label>
	                                <input className="span9 title_sub" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>Time</label>
	                                <input className="span9 time" type="text" />
	                            </div>
	                            <div className="field-box" style={{minHeight:'320px',maxHeight:'1000px'}}>
	                                <label>press detail</label>
	                                <span style={{marginLeft: 0}} className="span9 press_con">
	                                	<Richtext></Richtext>
	                                </span>
	                            </div>
	                            <div className="field-box actions">
		                            <input onClick={this.richtext.bind(this)} type="button" className="btn-glow primary" value="Create poster" />
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
