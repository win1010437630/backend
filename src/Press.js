import React, { Component } from 'react';
import $ from 'jquery';
import Simditor from 'simditor';
import Richtext from './RichText';
import config from './config';
class Press extends Component {
  componentDidMount(){
    var editor=new Simditor({
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
    var ip=config.url;
    var port=config.port;         
    this.refs.save.onclick=function(){
      $.ajax({
          type:"post",
          url:ip+port+"/press",
          async:true,
          data:{
            'contact':$('.contact').val(),
            'title':$('.title').val(),
            'sub_title':$('.sub_title').val(),
            'con':$('.con').val(),
            'time':$('.time').val(),
            'detail':editor.getValue()
          },
          success:function(e){console.log(e)}
      }); 
      $.ajax({
        type:"post",
        url:ip+port+"/press/popular",
        async:true,
        data:{
            'popular_title':$('.popular_title').val(),
            'popular_detail':$('.popular_detail').val()
        },
        success:function(e){console.log(e)}
      });    
    }
    this.refs.replace.onclick=function(){
      $.ajax({
          type:"post",
          url:ip+port+"/press/replace",
          async:true,
          data:{
            'id':$('.id').val(),
            'contact':$('.contact').val(),
            'title':$('.title').val(),
            'sub_title':$('.sub_title').val(),
            'con':$('.con').val(),
            'time':$('.time').val(),
            'detail':editor.getValue()
          },
          success:function(e){console.log(e)}
      });
      $.ajax({
        type:"post",
        url:ip+port+"/press/popular_replace",
        async:true,
        data:{
          'id':$('.id').val(),
          'popular_title':$('.popular_title').val(),
          'popular_detail':$('.popular_detail').val()
        },
        success:function(e){console.log(e)}
      });
    }
    this.refs.remove.onclick=function(){       
      $.ajax({
        type:"post",
        url:ip+port+"/press/delete",
        async:true,
        data:{'id':$('.id').val()},
        success:function(e){console.log(e)}
      });
      $.ajax({
        type:"post",
        url:ip+port+"/press/popular_delete",
        async:true,
        data:{'id':$('.id').val()},
        success:function(e){console.log(e)}
      });
    }
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
                              <div className="field-box">
                                  <label>id</label>                                
                                  <input className="span9 id" type="text" />
                              </div>
	                            <div className="field-box">
                                  <label>Contact</label>
                                  <input className="span9 contact" type="text" />
                              </div>
                              <div className="field-box">
                                  <label>Title</label>
                                  <input className="span9 title" type="text" />
                              </div>    
	                            <div className="field-box">
                                  <label>sub title</label>
                                  <input className="span9 sub_title" type="text" />
                              </div>
                              <div className="field-box">
                                  <label>con</label>
                                  <input className="span9 con" type="text" />
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
                              <div className="span12 field-box">
                                <label>popular title</label>
                                <input className="span9 popular_title" type="text" />
                              </div>
                              <div className="span12 field-box">
                                  <label>popular detail</label>
                                  <input className="span9 popular_detail" type="text" />
                              </div>
	                            <div className="span11 field-box actions"><br/>
                                  <a id="save" ref='save' className='btn btn-success'>add</a>
                                  <a id="replace" ref='replace' className='btn btn-info'>replace</a>
                                  <a id="remove" ref='remove' className='btn btn-primary'>remove</a>
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
