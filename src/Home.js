import React, { Component } from 'react';
import $ from 'jquery';
import logo_ogilvy_sm from './img/logo_ogilvy_sm.png';
class Home extends Component {
  componentDidMount(){
        var files;
        var add='192.168.119.127';
        this.setFiles=function(element){ files=element.files[0];}
        
        $(function(){          
            $('.Submit').click(function(){
                var banner_text=$('.banner_text').val();
                var services_text=$('.services_text').val();
                var china_text=$('.china_text').val();
                console.log(banner_text,services_text,china_text)
                $.ajax({
                    type:"post",
                    url:"http://"+add+":8005/home",
                    async:true,
                    data:{
                        'banner':$('.banner_text').val(),
                        'services':$('.services_text').val(),
                        'china':$('.china_text').val()
                    },
                    success:function(e){console.log(e)}
                });
            });  
            $('.one').click(function(){
                var fd=new FormData();
                fd.append('uploadedFile',files);
                $.ajax({
                    type:"post",
                    url:"http://"+add+":8005/home/one",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            })
            $('.two').click(function(){
                var fd=new FormData();
                fd.append('uploadedFile',files);
                $.ajax({
                    type:"post",
                    url:"http://"+add+":8005/home/two",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            })
            $('.three').click(function(){
                var fd=new FormData();
                fd.append('uploadedFile',files);
                $.ajax({
                    type:"post",
                    url:"http://"+add+":8005/home/three",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            })
            $('.four').click(function(){
                var fd=new FormData();
                fd.append('uploadedFile',files);
                $.ajax({
                    type:"post",
                    url:"http://"+add+":8005/home/four",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                });
            })
            $.ajax({
                url: "http://"+add+":8005/datas",
                asyna: true,
                type: 'GET',
                success:function(e){
                    console.log(e)
                    for(var i=0;i<e.length;i++){
                        $('.table').append(`<tr>
                            <td>${e[i].banner_text}</td>
                            <td>${e[i].services_text}</td>
                            <td>${e[i].china_text}</td>
                            <td><input type="button" class="btn del" value="delete"></td>
                        </tr>`);
                   }
                }
            })            
        });
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
	                    <div className="span7 column">
	                        <form>
	                            <div className="field-box">
	                                <label>Banner text</label>
	                                <input className="span9 banner_text" type="text" data-toggle="tooltip" data-trigger="focus" title="Please enter a banner text" data-placement="right"/>
	                            </div>
	                            <div className="field-box">
	                                <label>Banner bg</label>
	                                <input className="span8 banner_bg" type="file" onChange={this.setFiles}/><input type="button" className="one btn" value="上传"/>
	                            </div>
	                            <div className="field-box">
	                                <label>Banner video</label>
	                                <input className="span8 banner_video" type="file" onChange={this.setFiles}/><input type="button" className="btn" value="上传"/>
	                            </div>
	                            <div className="field-box">
	                                <label>Banner gif</label>
	                                <input className="span8 banner_gif" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>
	                            <div className="field-box">
	                                <label>Services bg</label>
	                                <input className="span8 services_bg" type="file" onChange={this.setFiles}/><input type="button" className="three btn" value="上传"/>
	                            </div>
                                <div className="field-box">
                                    <label>Services title</label>
                                    <input className="span9 services_title" type="text" />
                                </div>
                                <div className="field-box">
                                    <label>Services text</label>
                                    <input className="span9 services_text" type="text" />
                                </div>
                                <div className="field-box">
                                    <label>China bg</label>
                                    <input className="span8 china_bg" type="file" onChange={this.setFiles}/><input type="button" className="four btn" value="上传"/>
                                </div> 
                                <div className="field-box">
                                    <label>China title</label>
                                    <input className="span9 china_title" type="text"/>
                                </div>
                                <div className="field-box">
                                    <label>China text</label>
                                    <input className="span9 china_text" type="text"/>
                                </div> 
                                <div className="field-box">
                                    <label>sanya bg</label>
                                    <input className="span8 sanya_bg" type="file" onChange={this.setFiles}/><input type="button" className="four btn" value="上传"/>
                                </div> 
                                <div className="field-box">
                                    <label>sanya title</label>
                                    <input className="span9 sanya_title" type="text"/>
                                </div>
                                <div className="field-box">
                                    <label>sanya img</label>
                                    <input className="span9 sanya_img" type="text"/>
                                </div><br />                
	                            <div className="field-box actions">
	                                <input type="button" className="btn-glow primary Submit" value="Create poster"/>
	                                <span> OR </span>
	                                <input type="reset" value="Cancel" className="reset"/>
	                            </div>
	                        </form>
	                    </div>
	                    <div className="span5 column">
	                        <table className="table">
	                            <tr>
	                                <td>Banner text</td>
	                                <td>Services text</td>
	                                <td>China text</td>
	                                <td>删除</td>
	                            </tr>                                                      
	                        </table>
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