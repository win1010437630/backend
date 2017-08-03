import React, { Component } from 'react';
import $ from 'jquery';
import gallery_img from './img/no-img-gallery.png';
import Simditor from 'simditor';
import Richtext from './RichText';
import config from './config';
class Vision extends Component { 
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
    var setFiles;
    var files;
    setFiles=function(element){ files=element.files[0];};    
    var html=`<div class="popup"><i class="icon-reply"></i><h5>Edit Image</h5>
                    <div><input type="file" onchange="setFiles(this)"></div>
                    <div class="description"><h6>Description</h6>
                        <select class='select'>
                            <option value='vision_bg'>vision_bg</option>
                            <option value='vision_img'>vision_img</option>
                            <option value='prize_img'>prize_img</option>
                            <option value='vision_history_img'>vision_history_img</option>
                        </select>
                        <input type="submit" value="Save" class="btn-glow primary submit" />
                    </div>
            </div>`;   
    $('.pic').click(function(){
        $('.no-gallery').append(html);
        $('.icon-reply').on('click',function(){
            $('.popup').css('display','none');
        });
        var select=$('.select option:selected');
        $('.submit').click(function(){
            var select=$('.select option:selected').val();
            var fd=new FormData();
            fd.append('uploadedFile',files);
            console.log(fd)
            if(select=='vision_bg'){
                $.ajax({
                    type:"post",
                    url:ip+port+"/vision/bg",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='vision_img'){
                $.ajax({
                    type:"post",
                    url:ip+port+"/vision/img",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='prize_img'){
                $.ajax({
                    type:"post",
                    url:ip+port+"/prize/img",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='vision_history'){
                $.ajax({
                    type:"post",
                    url:ip+port+"/vision/vision_history",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }
        })
    })  
    this.refs.save.onclick=function(){
        $.ajax({
            type:"post",
            url:ip+port+"/vision",
            async:true,
            data:{
                'vision_title':$('.vision_title').val(),
                'vision_text':$('.vision_text').val(),
                'vision_textarea':$('.vision_textarea').val(),
                'prize_name':$('.prize_name').val(),
                'prize_time':$('.prize_time').val(),
                'vision_history_text':editor.getValue()
            },
            success:function(e){console.log(e)}
        }); 
    }
    this.refs.replace.onclick=function(){
      $.ajax({
          type:"post",
          url:ip+port+"/vision/vision_replace",
          async:true,
          data:{
                'id':$('.id').val(),
                'vision_title':$('.vision_title').val(),
                'vision_text':$('.vision_text').val(),
                'vision_textarea':$('.vision_textarea').val(),
                'prize_name':$('.prize_name').val(),
                'prize_time':$('.prize_time').val(),
                'vision_history_text':editor.getValue()
          },
          success:function(e){console.log(e)}
      });
    }
    this.refs.remove.onclick=function(){       
        $.ajax({
          type:"post",
          url:ip+port+"/vision/vision_delete",
          async:true,
          data:{'id':$('.id').val()},
          success:function(e){console.log(e)}
        });
    }       
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
	                    <div className="span9 column">
	                        <form>
                                <div className="field-box">
                                    <label>id</label>                                
                                    <input className="span9 id" type="text" />
                                </div>
	                            <div className="field-box">
	                                <label>Vision title</label>
	                                <input type='text' className="span9 vision_title" />
	                            </div>
	                            <div className="field-box">
	                                <label>Vision text</label>
	                                <input type='text' className="span9 vision_text" />
	                            </div>
	                            <div className="field-box textarea">
	                                <label>vision history text</label>
	                                <span style={{marginLeft: 0}} className="span9 vision_history_text">
	                                	<Richtext></Richtext>
	                                </span>
	                            </div>
	                            <div className="field-box textarea">
	                                <label>prize name</label>
	                                <input type='text' className="span9 prize_name" />
	                            </div>
	                            <div className="field-box textarea">
	                                <label>prize time</label>
	                                <input type='text' className="span9 prize_time" />
	                            </div>  
	                            <div className="field-box">
	                                <label>about vision</label>
	                                <input type='text' className="span9 about_vision" />
	                            </div>
                                <div className="field-box">
                                    <label>vision btn</label>
                                    <input type='text' className="span9 vision_btn" />
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
            		<div className="no-gallery">
                        <div className="row-fluid header">
                          <h3>Media And Photos</h3>
                        </div>
                        <div className="center">
                          <img src={gallery_img} />
                          <h6>You don`t have any images</h6>
                          <p>There are many variations of passages of Lorem Ipsum available,
                          but the majority have suffered alteration in some form</p>
                          <a className="btn-glow primary pic">Add new file</a>
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
