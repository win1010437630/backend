import React, { Component } from 'react';
import $ from 'jquery';
import Simditor from 'simditor';
import gallery_img from './img/no-img-gallery.png';
import Richtext from './RichText';
import config from './config';
class Works extends Component {
  constructor(){
    super()
    this.state={
        arr:[]
    }
  }
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
                            <option value='poster_bg'>poster_bg</option>
                            <option value='work_img'>work img</option>
                            <option value='prize_img'>prize img</option>
                            <option value='detail_img'>sanya img</option>
                        </select>
                        <input type="submit" value="Save" class="btn-glow primary submit" />
                    </div>
            </div>`;  
    $.ajax({
        url:ip+port+"/work/text",
        type:'get',
        success:function(a){
          console.log(a)
          this.setState({arr:a});
        }.bind(this)
    }) 
    $('.pic').click(function(){{
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
                if(select=='poster_bg'){
                  $.ajax({
                    type:"post",
                    url:ip+port+"/work/img/poster",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                  });
                }else if(select=='work_img'){
                  $.ajax({
                    type:"post",
                    url:ip+port+"/work/img/work",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                  });
                }else if(select=='prize_img'){
                  $.ajax({
                    type:"post",
                    url:ip+port+"/work/img/prize",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                  });
                }else if(select=='detail_img'){
                  $.ajax({
                    type:"post",
                    url:ip+port+"/work/img/detail",
                    async:true,
                    data:fd,
                    contentType:false,
                    processData:false,
                    success:function(e){console.log(e)}
                  });
                }
            })
        }
    });
  }
  replace(num,name){
    var ip=config.url;
    var port=config.port;  
    var id=num;
    var word=`<div class="mask"><div class='alert'><i class='icon-remove-sign right'></i><input type='text' class='text'><button class='btn save'>保存</button></div></div>`;
    $('body').append(word);
    $('.icon-remove-sign').click(function(){
      $(this).parent().parent().remove();
    })
    $('.save').click(function(){   
      if($('.text').val()==''){
        alert('输入错误');
        return false;
      }else{
        if(name=='poster_company'){
          $.ajax({
            url:ip+port+"/work/company_replace",
            type:'post',
            data:{
              id:id,
              'poster_company':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }else if(name=='poster_name'){
          $.ajax({
            url:ip+port+"/work/name_replace",
            type:'post',
            data:{
              id:id,
              'poster_name':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }else if(name=='year'){
          $.ajax({
            url:ip+port+"/work/year_replace",
            type:'post',
            data:{
              id:id,
              'year':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }else if(name=='detail'){
          $.ajax({
            url:ip+port+"/work/detail_replace",
            type:'post',
            data:{
              id:id,
              'detail':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }else if(name=='work_say'){
          $.ajax({
            url:ip+port+"/work/work_say_replace",
            type:'post',
            data:{
              id:id,
              'work_say':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }else if(name=='work_about'){
          $.ajax({
            url:ip+port+"/work/work_about_replace",
            type:'post',
            data:{
              id:id,
              'work_about':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }else if(name=='prize_text'){
          $.ajax({
            url:ip+port+"/work/prize_text_replace",
            type:'post',
            data:{
              id:id,
              'prize_text':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }else if(name=='prize_text_two'){
          $.ajax({
            url:ip+port+"/work/prize_text_two_replace",
            type:'post',
            data:{
              id:id,
              'prize_text_two':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }
      }      
      $(this).parent().parent().remove();
    });
  }
  remove(num,name){
    var ip=config.url;
    var port=config.port;  
    var id=num;
    if(name=='poster_company'){
      $.ajax({
        url:ip+port+"/work/company_delete",
        type:'post',
        data:{
          id:id,
          'poster_company':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='poster_name'){
      $.ajax({
        url:ip+port+"/work/name_delete",
        type:'post',
        data:{
          id:id,
          'poster_name':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='year'){
      $.ajax({
        url:ip+port+"/work/year_delete",
        type:'post',
        data:{
          id:id,
          'year':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='detail'){
      $.ajax({
        url:ip+port+"/work/detail_delete",
        type:'post',
        data:{
          id:id,
          'detail':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='work_say'){
      $.ajax({
        url:ip+port+"/work/work_say_delete",
        type:'post',
        data:{
          id:id,
          'work_say':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='work_about'){
      $.ajax({
        url:ip+port+"/work/work_about_delete",
        type:'post',
        data:{
          id:id,
          'work_about':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='prize_text'){
      $.ajax({
        url:ip+port+"/work/prize_text_delete",
        type:'post',
        data:{
          id:id,
          'prize_text':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='prize_text_two'){
      $.ajax({
        url:ip+port+"/work/prize_text_two_delete",
        type:'post',
        data:{
          id:id,
          'prize_text_two':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='prize_time'){
      $.ajax({
        url:ip+port+"/work/prize_time_delete",
        type:'post',
        data:{
          id:id,
          'prize_time':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }    
  }
  add(){
    var ip=config.url;
    var port=config.port; 
    var word=`<div class="mask"><div class='alert'><i class='icon-remove-sign right'></i>
    <label>poster_company:</label><input type='text' class='poster_company'><br>
    <label>poster_name:</label><input type='text' class='poster_name'>
    <label>year:</label><input type='text' class='year'>
    <label>detail:</label><input type='text' class='detail'>
    <label>work_say:</label><input type='text' class='work_say'>
    <label>work_about:</label><input type='text' class='work_about'>
    <label>prize_text:</label><input type='text' class='prize_text'>
    <label>prize_text_two:</label><input type='text' class='prize_text_two'>
    <label>prize_time:</label><input type='text' class='prize_time'><br>
    <button class='btn save'>保存</button></div></div>`;            
    $('body').append(word);
    $('.icon-remove-sign').click(function(){
      $(this).parent().parent().remove();
    })
    $('.save').click(function(){
      $.ajax({
        type:"post",
        url:ip+port+"/work",
        async:true,
        data:{
            'poster_company':$('.poster_company').val(),
            'poster_name':$('.poster_name').val(),
            'year':$('.year').val(),
            'detail':$('.detail').val(),
            'work_say':$('.work_say').val(),
            'work_about':$('.work_about').val(),
            'prize_text':$('.prize_text').val(),
            'prize_text_two':$('.prize_text_two').val(),
            'prize_time':$('.prize_time').val()
        },
        success:function(e){console.log(e)}
      }); 
      $(this).parent().parent().remove();
    })
  }
  render() {
    return (
      <div className="Works">
        <div className="content">       
          <div className="container-fluid">
              <div id="pad-wrapper" className="new-user">
                  <div className="row-fluid header">
                      <h3>Create a new message</h3>
                  </div>
                  <div className="row-fluid form-wrapper">                      
                      <div className="container">
                          <input type='button' className='btn right' onClick={this.add.bind(this)} value='添加'/>
                          <table className='table'>
                            <tbody>
                              <tr>
                                <td>公司项目</td>
                                <td>{this.state.arr.map(function(i,n){
                                  return <div key={n}>{i.poster_company}<button className='btn' onClick={this.remove.bind(this,(i.id),'poster_company')} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'poster_company')}>修改</button></div>
                                },this)}</td>                                   
                              </tr> 
                              <tr>
                                <td>广告名字</td>
                                <td>{this.state.arr.map(function(i,n){
                                  return <div key={n}>{i.poster_name}<button className='btn' onClick={this.remove} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'poster_name')}>修改</button></div>
                                },this)}</td>                                   
                              </tr> 
                              <tr>
                                <td>广告时间</td>
                                <td>{this.state.arr.map(function(i,n){
                                  return <div key={n}>{i.year}<button className='btn' onClick={this.remove} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'year')}>修改</button></div>
                                },this)}</td>                                   
                              </tr> 
                              <tr>
                                <td>广告内容</td>
                                <td>{this.state.arr.map(function(i,n){
                                  return <div key={n}><div className='word left' dangerouslySetInnerHTML={{__html:`${i.detail}`}}></div><button className='btn' onClick={this.remove} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'detail')}>修改</button></div>
                                },this)}</td>                                   
                              </tr>
                              <tr>
                                <td>广告话语</td>
                                <td>{this.state.arr.map(function(i,n){
                                  return <div key={n}><div className='word left'>{i.work_say}</div><button className='btn' onClick={this.remove} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'work_say')}>修改</button></div>
                                },this)}</td>                                   
                              </tr>
                              <tr>
                                <td>关于广告</td>
                                <td>{this.state.arr.map(function(i,n){
                                  return <div key={n}>{i.work_about}<button className='btn' onClick={this.remove} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'work_about')}>修改</button></div>
                                },this)}</td>                                   
                              </tr>
                              <tr>
                                <td>奖品名称</td>
                                <td>{this.state.arr.map(function(i,n){
                                  return <div key={n}>{i.prize_text}<button className='btn' onClick={this.remove} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'prize_text')}>修改</button></div>
                                },this)}</td>                                   
                              </tr>
                              <tr>
                                <td>奖品名称</td>
                                <td>{this.state.arr.map(function(i,n){
                                  return <div key={n}>{i.prize_text_two}<button className='btn' onClick={this.remove} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'prize_text_two')}>修改</button></div>
                                },this)}</td>                                   
                              </tr>
                              <tr>
                                <td>获奖时间</td>
                                <td>{this.state.arr.map(function(i,n){
                                  return <div key={n}>{i.prize_time}<button className='btn' onClick={this.remove} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'prize_time')}>修改</button></div>
                                },this)}</td>
                              </tr>                              
                              {/*<tr>
                                <td>广告图片</td>
                                <td>{this.state.arr.map(function(i,n){
                                  return <div key={n} className='pic'><img src={i.poster_bg}/><button className='btn' onClick={this.remove} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'poster_bg')}>修改</button></div>
                                },this)}</td>                                   
                              </tr>   
                              <tr>
                                <td>详情图片</td>
                                <td>{this.state.arr.map(function(i,n){
                                  return <div key={n} className='pic'><img src={i.detail_img}/><button className='btn' onClick={this.remove} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'detail_img')}>修改</button></div>
                                },this)}</td>                                   
                              </tr>*/}                              
                            </tbody>
                          </table>
                      </div>
                  </div>
                  <Richtext></Richtext>
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

export default Works;
