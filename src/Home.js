import React, { Component } from 'react';
import $ from 'jquery';
import logo_ogilvy_sm from './img/logo_ogilvy_sm.png';
import gallery_img from './img/no-img-gallery.png';
import config from './config';
class Home extends Component {
  constructor(){
    super()
    this.state={
        arr:[]
    }
  }
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
                            <option value='banner_bg'>banner bg</option>
                            <option value='banner_video'>banner video</option>
                            <option value='banner_gif'>banner gif</option>
                            <option value='services_bg'>vision history</option>
                            <option value='sanya_img'>sanya img</option>
                            <option value='sanya_bg'>sanya bg</option>
                            <option value='china_bg'>china_bg</option>
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
            if(select=='banner_bg'){
                $.ajax({
                type:"post",
                    url:ip+port+"/home/one",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='banner_video'){
                $.ajax({
                type:"post",
                    url:ip+port+"/home/two",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='banner_gif'){
                $.ajax({
                type:"post",
                    url:ip+port+"/home/three",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='services_bg'){
                $.ajax({
                type:"post",
                    url:ip+port+"/home/four",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='sanya_img'){
                $.ajax({
                type:"post",
                    url:ip+port+"/home/five",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='sanya_bg'){
                $.ajax({
                type:"post",
                    url:ip+port+"/home/six",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }else if(select=='china_bg'){
                $.ajax({
                type:"post",
                    url:ip+port+"/home/seven",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            }
        })
    })
    $.ajax({
        url:ip+port+"/home_text",
        type:'get',
        success:function(a){
          console.log(a)
          this.setState({arr:a});
        }.bind(this)
    })              
    this.refs.save.onclick=function(){
        $('.field-box .move').css('display','none');
        $('.field-box .add').css('display','inline-block');
        $('.Submit').click(function(){
            $.ajax({
                type:"post",
                url:ip+port+"/home",
                async:true,
                data:{
                    'banner_text':$('.banner_text').val(),
                    'services_title':$('.services_title').val(),
                    'services_text':$('.services_text').val(),
                    'china_title':$('.services_title').val(),
                    'china_text':$('.services_text').val()
                },
                success:function(e){console.log(e)}
            });
        })
    }
    this.refs.replace.onclick=function(){
        console.log($('.move').attr('id'))
        $('.field-box .move').css('display','none');
        $('.field-box .add').css('display','inline-block');
        $('.Submit').click(function(){
            $.ajax({
                type:"post",
                url:ip+port+"/home_replace",
                async:true,
                data:{
                    'id':$('.move').attr('id'),
                    'banner_text':$('.banner_text').val(),
                    'services_title':$('.services_title').val(),
                    'services_text':$('.services_text').val(),
                    'china_title':$('.services_title').val(),
                    'china_text':$('.services_text').val()
                },
                success:function(e){console.log(e)}
            });
        })
    }
    this.refs.remove.onclick=function(){
        $('.Submit').click(function(){
            $.ajax({
                type:"post",
                url:ip+port+"/home_delete",
                async:true,
                data:{'id':$('.move').attr('id')},
                success:function(e){console.log(e)}
            });
        })
    }
    this.refs.cancel.onclick=function(){
        $('.field-box .move').css('display','inline-block');
        $('.field-box .add').css('display','none');
    }    
  }
  render() {
    return (
      <div className="Home">
        <div className="content">
	        <div className="container-fluid">
	        	{/*aomei*/}
	        	<div id="main_logo">
	        		<img src={logo_ogilvy_sm} alt=""/>
	        	</div>
	            <div id="pad-wrapper" style={{margin:0}}> 
	                <div className="row-fluid form-wrapper">
	                    {/*left column*/}
	                    <div className="span9 column">
	                        <form>
                                <div className='right'>
                                    <a ref="save" id="save" className='btn-success'>add</a>
                                    <a ref="replace" id="replace" className='btn-info'>replace</a>
                                    <a ref="remove" id="remove" className='btn-info'>remove</a>
                                    <a ref="cancel" id="cancel" className='btn-info'>cancel</a>
                                </div>
	                            <div className="field-box">
                                    <label>Banner text</label>
                                    {this.state.arr.map(function(i,n){
                                        return <span className='move' id={i.id} key={n}>{i.banner_text}</span> })}
                                    <input className="add banner_text" ref='put' type="text" style={{padding:"4px 0",height:"28px"}}/>
                                </div>
                                <div className="field-box">
                                    <label>services title</label>
                                    {this.state.arr.map(function(i,n){
                                        return <span className='move' id={i.id} key={n}>{i.services_title}</span> })}
                                    <input className="add services_title" ref='put' type="text" style={{padding:"4px 0",height:"28px"}}/>
                                </div>
                                <div className="field-box">
                                    <label>services text</label>
                                    {this.state.arr.map(function(i,n){
                                        return <span className='move' id={i.id} key={n}>{i.services_text}</span> })}
                                    <input className="add services_text" ref='put' type="text" style={{padding:"4px 0",height:"28px"}}/>
                                </div>
                                <div className="field-box">
                                    <label>china title</label>
                                    {this.state.arr.map(function(i,n){
                                        return <span className='move' id={i.id} key={n}>{i.china_title}</span> })}
                                    <input className="add china_title" ref='put' type="text" style={{padding:"4px 0",height:"28px"}}/>
                                </div>
                                <div className="field-box">
                                    <label>china text</label>
                                    {this.state.arr.map(function(i,n){
                                        return <span className='move' id={i.id} key={n}>{i.china_text}</span> })}
                                    <input className="add china_text" ref='put' type="text" style={{padding:"4px 0",height:"28px"}}/>
                                </div><br/>            
	                            <div className="field-box actions">
	                                <input type="button" className="btn-glow primary Submit" value="submit"/>
	                                <span> OR </span>
	                                <input type="reset" value="Cancel" className="reset"/>
	                            </div>
	                        </form>
                            {/*<div className="field-box">
                                <input type='button' className='btn banner_bg' value='add photos'/>
                            </div><br/>
                            <div className="field-box">
                                <input type='button' className='btn banner_bg' value='add video'/>
                            </div>*/}
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
      </div>
    );
  }
}
export default Home;