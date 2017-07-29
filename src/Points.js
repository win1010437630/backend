import React, { Component } from 'react';
import $ from 'jquery';
import Simditor from 'simditor';
import Richtext from './RichText';

class Points extends Component {
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
	    $(function () {
	      var $buttons = $(".toggle-inputs button");
	      var $form = $("form.new_user_form");
	      $buttons.click(function () {
	          var mode = $(this).data("input");
	          $buttons.removeClass("active");
	          $(this).addClass("active");
	          if (mode === "inline") {
	              $form.addClass("inline-input");
	          } else {
	              $form.removeClass("inline-input");
	          }
	      });
	    });
  }
  richtext(){
    alert(this.editor.getValue());
  }
  render() {
    return (
      <div className="Points">
       	<div className="content">        
	        <div className="container-fluid">
	            <div id="pad-wrapper" className="new-user new">
	                <div className="row-fluid header">
	                    <h3>Create a new poster</h3>
	                </div>
	                <div className="row-fluid form-wrapper">
	                    {/*left column*/}
	                    <div className="span9 with-sidebar">
	                        <div className="container">
	                            <form className="new_user_form inline-input">
	                        <div className="span12 field-box">
	                            <label>Title:</label>
	                            <input className="span9" type="text" />
	                        </div>
	                        <div className="span12 field-box">
	                            <label>Name:</label>
	                            <input className="span9" type="text" />
	                        </div>
	                        <div className="span12 field-box">
	                            <label>Text:</label>
	                            <input className="span9" type="text" />
	                        </div>
	                        <div className="span12 field-box">
	                            <label>Time</label>
	                            <input className="span9" type="text" />
	                        </div>
	                        <div className="span12 field-box textarea">
	                            <label>Detail</label>
	                            <span style={{marginLeft: 0}} className="span9">
	                                 <Richtext></Richtext>
	                            </span>
	                        </div>
	                        <div className="span11 field-box actions">
	                            <input onClick={this.richtext.bind(this)} type="button" className="btn-glow primary" value="Create poster" />
	                            <span>OR</span>
	                            <input type="reset" value="Cancel" className="reset" />
	                        </div>
	                    </form> 
	                        </div>
	                    </div>
	                    {/*side right column*/}
	                    <div className="span3 form-sidebar pull-right">
	                        <div className="btn-group toggle-inputs hidden-tablet">
	                            <button className="glow left active" data-input="inline">INLINE INPUTS</button>
	                            <button className="glow right" data-input="normal">NORMAL INPUTS</button>
	                        </div>
	                        <div className="alert alert-info hidden-tablet">
	                            <i className="icon-lightbulb pull-left"></i>
	                            Click above to see difference between inline and normal inputs on a form
	                        </div>                        
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
      </div>
    );
  }
}

export default Points;
