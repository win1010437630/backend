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
    })
    this.refs.save.onclick=function(){
      $.ajax({
          type:"post",
          url:ip+port+"/work",
          async:true,
          data:{
              'poster_company':$('.poster_company').val(),
              'poster_name':$('.poster_name').val(),
              'year':$('.year').val(),
              'detail':editor.getValue(),
              'work_about':$('.work_about').val(),
              'work_say':$('.work_say').val(),
              'work_about':$('.work_about').val(),
              'prize_text':$('.prize_text').val(),
              'prize_time':$('.prize_time').val()
          },
          success:function(e){console.log(e)}
      });     
    }
    this.refs.replace.onclick=function(){
      $.ajax({
          type:"post",
          url:ip+port+"/work/text_replace",
          async:true,
          data:{
              'id':$('.id').val(),
              'poster_company':$('.poster_company').val(),
              'poster_name':$('.poster_name').val(),
              'year':$('.year').val(),
              'detail':editor.getValue(),
              'work_about':$('.work_about').val(),
              'work_say':$('.work_say').val(),
              'work_about':$('.work_about').val(),
              'prize_text':$('.prize_text').val(),
              'prize_time':$('.prize_time').val()
          },
          success:function(e){console.log(e)}
      });
    }
    this.refs.remove.onclick=function(){       
      $.ajax({
          type:"post",
          url:ip+port+"/work/text_delete",
          async:true,
          data:{'id':$('.id').val()},
          success:function(e){console.log(e)}
      });
    }
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
                      {/*left column*/}
                      <div className="span9 with-sidebar">
                          <div className="container">
                              <form className="new_user_form inline-input">
                                  <div className="field-box">
                                      <label>id</label>                                
                                      <input className="span9 id" type="text" />
                                  </div>
                                  <div className="field-box">
                                      <label>Company</label>                                
                                      <input className="span9 poster_company" type="text" />
                                  </div>
                                  <div className="span12 field-box">
                                      <label>Poster name:</label>
                                      <input className="span9 poster_name" type="text" />
                                  </div>
                                  <div className="span12 field-box">
                                      <label>Year:</label>
                                      <input className="span9 year" type="text" />
                                  </div>    

                                  <div className="span12 field-box">
                                      <label>Poster detail</label>
                                      <span className="span9 detail" style={{marginLeft: 0}}><Richtext></Richtext></span>
                                  </div>                                 
                                  <div className="span12 field-box">
                                      <label>Work about:</label>
                                      <input className="span9 work_about" type="text" />
                                  </div>
                                  <div className="span12 field-box textarea">
                                      <label>Work say:</label>
                                      <textarea className="span9 work_say"></textarea>
                                  </div>
                                  
                                  <div className="span12 field-box">
                                      <label>prize text:</label>
                                      <input className="span9 prize_text" type="text" />
                                  </div>
                                  <div className="span12 field-box">
                                      <label>prize time:</label>
                                      <input className="span9 prize_time" type="text" />
                                  </div>
                                  <div className="span11 field-box actions">
                                      <a id="save" ref='save' className='btn btn-success'>add</a>
                                      <a id="replace" ref='replace' className='btn btn-info'>replace</a>
                                      <a id="remove" ref='remove' className='btn btn-primary'>remove</a>
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
                              Click above to see difference between inline and normal input on a form
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
      </div>
    );
  }
}

export default Works;
