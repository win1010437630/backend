import React, { Component } from 'react';
import $ from 'jquery';
import gallery_img from './img/no-img-gallery.png';
import config from './config';
class Team extends Component {
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
                            <option value='img'>img</option>                       
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
            if(select=='img'){
                $.ajax({
                    type:"post",
                    url:ip+port+"/team/img",
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
            url:ip+port+"/team",
            async:true,
            data:{
                'name':$('.Name').val(),
                'job_one':$('.job_one').val(),
                'job_two':$('.job_two').val(),
                'intro':$('.intro').val()
            },
            success:function(e){console.log(e)}
        }); 
    }
    this.refs.replace.onclick=function(){
      $.ajax({
          type:"post",
          url:ip+port+"/team/team_replace",
          async:true,
          data:{
                'id':$('.id').val(),
                'name':$('.Name').val(),
                'job_one':$('.job_one').val(),
                'job_two':$('.job_two').val(),
                'intro':$('.intro').val()
          },
          success:function(e){console.log(e)}
      });
    }
    this.refs.remove.onclick=function(){       
        $.ajax({
          type:"post",
          url:ip+port+"/team/team_delete",
          async:true,
          data:{'id':$('.id').val()},
          success:function(e){console.log(e)}
        });
    }    
  }
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
	                        	<div className="field-box">
                                    <label>id</label>                                
                                    <input className="span9 id" type="text" />
                                </div>
	                            <div className="field-box">
	                                <label>Name</label>
	                                <input className="span9 Name" type="text"/>
	                            </div>
	                            <div className="field-box">
	                                <label>First work</label>
	                                <input className="span9 job_one" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>Second work</label>
	                                <input className="span9 job_two" type="text" />
	                            </div>
	                            <div className="field-box textarea">
	                                <label>intro</label>
	                                <textarea className="span9 intro"></textarea>
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

export default Team;
