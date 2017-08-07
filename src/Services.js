import React, { Component } from 'react';
import $ from 'jquery';
import Simditor from 'simditor';
import Richtext from './RichText';
import gallery_img from './img/no-img-gallery.png';
import config from './config';
class Services extends Component {
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
      ]});
    var ip=config.url;
    var port=config.port;    
    var setFiles;
    var files;
    setFiles=function(element){ files=element.files[0];};    
    var html=`<div class="popup"><i class="icon-reply"></i><h5>Edit Image</h5>
                    <div><input type="file" onchange="setFiles(this)"></div>
                    <div class="description"><h6>Description</h6>
                        <select class='select'>
                            <option value='services_img'>services img</option>
                            <option value='services_gif'>services gif</option>
                            <option value='small_png'>small png</option>
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
            if(select=='services_gif'){
                $.ajax({
                    type:"post",
                    url:ip+port+"/services/gif",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='services_img'){
                $.ajax({
                    type:"post",
                    url:ip+port+"/services/img",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='small_png'){
                $.ajax({
                    type:"post",
                    url:ip+port+"/services/small",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }
        })
    })	
  }
  render() {
    return (
      <div className="Services">
      	<div className="content">
	        <div className="container-fluid">
	            <div id="pad-wrapper" className="form-page">
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
	                                <label>services vision</label>
	                                <input className="span9 services_vision" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>services text</label>
	                                <input className="span9 services_text" type="text"/>
	                            </div>
	                            <div className="field-box">
	                                <label>services admin</label>
	                                <input className="span9 services_admin" type="text" />
	                            </div>                           
	                            <div className="field-box textarea">
	                                <label>services work</label>
	                                <textarea className="span9 services_work" rows="4"></textarea>
	                            </div>
	                            <div className="field-box">
	                                <label>Related works</label>
	                                <span style={{marginLeft: 0}} className="span9 services_more">
	                                	<Richtext></Richtext>
	                                </span>
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
                <div className="no-gallery">
                    <div className="row-fluid header">
                      <h3>Media And Photos</h3>
                    </div>
                    <div className="center">
                      <img src={gallery_img} />
                      <h6>You don`t have any images</h6>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                      <a className="btn-glow primary pic">Add new file</a>
                    </div>
                </div>
	        </div>
	    </div>
      </div>
    );
  }
}

export default Services;
