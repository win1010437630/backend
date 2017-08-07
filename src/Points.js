import React, { Component } from 'react';
import $ from 'jquery';
import Simditor from 'simditor';
import Richtext from './RichText';
import config from './config';
class Points extends Component {
	constructor(props){
	    super(props)
	    this.state={
	        point:[]
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
	  	$.ajax({
	        url:ip+port+"/point/points",
	        type:'get',
	        success:function(a){
	          console.log(a)
	          this.setState({point:a});
	        }.bind(this)
	    }) 
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
        if(name=='title'){
          $.ajax({
            url:ip+port+"/point/title_replace",
            type:'post',
            data:{
              id:id,
              'title':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }else if(name=='name'){
          $.ajax({
            url:ip+port+"/point/name_replace",
            type:'post',
            data:{
              id:id,
              'name':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }else if(name=='text'){
          $.ajax({
            url:ip+port+"/point/text_replace",
            type:'post',
            data:{
              id:id,
              'text':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }else if(name=='time'){
          $.ajax({
            url:ip+port+"/point/time_replace",
            type:'post',
            data:{
              id:id,
              'time':$('.text').val()
            },
            success:function(a){console.log(a)}.bind(this)
          }) 
        }else if(name=='detail'){
          $.ajax({
            url:ip+port+"/point/detail_replace",
            type:'post',
            data:{
              id:id,
              'detail':$('.text').val()
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
    if(name=='title'){
      $.ajax({
        url:ip+port+"/point/title_delete",
        type:'post',
        data:{
          id:id,
          'title':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='name'){
      $.ajax({
        url:ip+port+"/point/name_delete",
        type:'post',
        data:{
          id:id,
          'name':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='text'){
      $.ajax({
        url:ip+port+"/point/text_delete",
        type:'post',
        data:{
          id:id,
          'text':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='time'){
      $.ajax({
        url:ip+port+"/point/time_delete",
        type:'post',
        data:{
          id:id,
          'time':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }else if(name=='detail'){
      $.ajax({
        url:ip+port+"/point/detail_delete",
        type:'post',
        data:{
          id:id,
          'detail':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
    }    
  }
  add(){
    var ip=config.url;
    var port=config.port; 
    var word=`<div class="mask clear"><div class='alert clear'><i class='icon-remove-sign right'></i>
    <label>title:</label><input type='text' class='title'><br>
    <label>name:</label><input type='text' class='name'>
    <label>text:</label><input type='text' class='text'>
    <label>time:</label><input type='text' class='time'>
    <label>detail:</label><input type='text' class='detail'><br>
    <button class='btn save'>保存</button></div></div>`;            
    $('body').append(word);
    $('.icon-remove-sign').click(function(){
      $(this).parent().parent().remove();
    })
    $('.save').click(function(){
      $.ajax({
        type:"post",
        url:ip+port+"/point",
        async:true,
        data:{
            'title':$('.title').val(),
            'name':$('.name').val(),
            'text':$('.text').val(),
            'time':$('.time').val(),
            'detail':$('.detail').val()
        },
        success:function(e){console.log(e)}
      }); 
      $(this).parent().parent().remove();
    })
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
	                    <div className="container">
	                        <input type='button' className='btn right' onClick={this.add.bind(this)} value='添加'/>
                          	<table className='table'> 
                      			<tbody>
                      			  <tr>
	                                <td>新闻标题</td>
	                                <td>{this.state.point.map(function(i,n){
	                                  return <div key={n}>{i.title}<button className='btn' onClick={this.remove.bind(this,(i.id),'title')} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'title')}>修改</button></div>
	                                },this)}</td>                                   
	                              </tr>
	                              <tr>
	                                <td>新闻作者</td>
	                                <td>{this.state.point.map(function(i,n){
	                                  return <div key={n}>{i.name}<button className='btn' onClick={this.remove.bind(this,(i.id),'name')} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'name')}>修改</button></div>
	                                },this)}</td>                                   
	                              </tr>
	                              <tr>
	                                <td>新闻内容</td>
	                                <td>{this.state.point.map(function(i,n){
	                                  return <div key={n}><div className='word left' dangerouslySetInnerHTML={{__html:`${i.text}`}}></div><button className='btn' onClick={this.remove.bind(this,(i.id),'text')} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'text')}>修改</button></div>
	                                },this)}</td>                                   
	                              </tr>
	                              <tr>
	                                <td>新闻时间</td>
	                                <td>{this.state.point.map(function(i,n){
	                                  return <div key={n}>{i.time}<button className='btn' onClick={this.remove.bind(this,(i.id),'time')} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'time')}>修改</button></div>
	                                },this)}</td>                                   
	                              </tr>
	                              <tr>
	                                <td>新闻详情</td>
	                                <td>{this.state.point.map(function(i,n){
	                                  return <div key={n}><div className='word left' dangerouslySetInnerHTML={{__html:`${i.detail}`}}></div><button className='btn' onClick={this.remove.bind(this,(i.id),'detail')} >删除</button><button className='btn' onClick={this.replace.bind(this,(i.id),'detail')}>修改</button></div>
	                                },this)}</td>                                   
	                              </tr>
                      			</tbody>
                      		</table>	  	                           
	                    </div>

	                </div>
	                <Richtext></Richtext> 
	            </div>
	        </div>
	    </div>
      </div>
    );
  }
}

export default Points;
