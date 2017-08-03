import React, { Component } from 'react';
import $ from 'jquery';
import gallery_img from './img/no-img-gallery.png';
import config from './config';
class Life extends Component {
  componentDidMount(){
	var ip=config.url;
    var port=config.port;
    var setFiles;
    var files;
    setFiles=function(element){ files=element.files[0];};    
    var html=`<div class="popup"><i class="icon-reply"></i><h5>Edit Image</h5>
                    <div><input type="file" onchange="setFiles(this)"></div>
                    <div class="description"><h6>Description</h6>
                        <select class='select'>
                            <option value='life_pic_one'>life_pic_one</option>
                            <option value='life_pic_two'>life_pic_two</option>
                            <option value='life_pic_three'>life_pic_three</option>
                            <option value='life_pic_four'>life_pic_four</option>
                            <option value='life_pic_five'>life_pic_five</option>
                            <option value='life_pic_six'>life_pic_six</option>
                            <option value='life_pic_seven'>life_pic_seven</option>
                            <option value='life_pic_eight'>life_pic_eight</option>
                            <option value='video'>video</option>
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
            if(select=='life_pic_one'){
                $.ajax({
                type:"post",
                    url:ip+port+"/life/one",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='life_pic_two'){
                $.ajax({
                type:"post",
                    url:ip+port+"/life/two",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='life_pic_three'){
                $.ajax({
                type:"post",
                    url:ip+port+"/life/three",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='life_pic_four'){
                $.ajax({
                type:"post",
                    url:ip+port+"/life/four",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='life_pic_five'){
                $.ajax({
                type:"post",
                    url:ip+port+"/life/five",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='life_pic_six'){
                $.ajax({
                type:"post",
                    url:ip+port+"/life/six",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='life_pic_seven'){
                $.ajax({
                type:"post",
                    url:ip+port+"/life/seven",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='life_pic_eight'){
                $.ajax({
                type:"post",
                    url:ip+port+"/life/eight",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='video'){
                $.ajax({
                type:"post",
                    url:ip+port+"/life/video",
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
            url:ip+port+"/life",
            async:true,
            data:{
                'title':$('.title').val(),
                'passage':$('.passage').val()
            },
            success:function(e){console.log(e)}
        }); 
    }
    this.refs.replace.onclick=function(){
      $.ajax({
          type:"post",
          url:ip+port+"/life/life_replace",
          async:true,
          data:{
                'id':$('.id').val(),
                'title':$('.title').val(),
                'passage':$('.passage').val()
          },
          success:function(e){console.log(e)}
      });
    }
    this.refs.remove.onclick=function(){       
        $.ajax({
          type:"post",
          url:ip+port+"/life/life_delete",
          async:true,
          data:{'id':$('.id').val()},
          success:function(e){console.log(e)}
        });
    }   	

  }
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
	                    <div className="span9 column">
	                        <form>
                                <div className="field-box">
                                    <label>id</label>                                
                                    <input className="span9 id" type="text" />
                                </div>
	                            <div className="field-box">
	                                <label>title</label>
	                                <input className="span9 title" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>passage</label>
	                                <input className="span9 passage" type="text" />
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
