import React, { Component } from 'react';
import $ from 'jquery';
class Works extends Component {
  componentDidMount(){
    $(function () {
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
    });
  }
  render() {
    return (
      <div className="Works">
        <div className="content">       
          <div className="container-fluid">
              <div id="pad-wrapper" className="new-user">
                  <div className="row-fluid header">
                      <h3>Create a new poster</h3>
                  </div>
                  <div className="row-fluid form-wrapper">
                      {/*left column*/}
                      <div className="span9 with-sidebar">
                          <div className="container">
                              <form className="new_user_form inline-input">
                                  <div className="span12 field-box">
                                      <label>Company:</label>
                                      <input className="span9" type="text" />
                                  </div>
                                  <div className="span12 field-box">
                                      <label>Poster name:</label>
                                      <input className="span9" type="text" />
                                  </div>
                                  <div className="span12 field-box">
                                      <label>Year:</label>
                                      <input className="span9" type="text" />
                                  </div>
                                  <div className="span12 field-box">
                                      <label>Poster titlie</label>
                                      <input className="span9" type="text" />
                                  </div>
                                  <div className="span12 field-box">
                                      <label>Poster detail</label>
                                      <input className="span9" type="text" />
                                  </div>
                                  <div className="span12 field-box textarea">
                                      <label>Poster picture</label>
                                      <textarea className="span9"></textarea>
                                  </div>
                                  <div className="span11 field-box actions">
                                      <input type="button" className="btn-glow primary" value="Create poster" />
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
                              Click above to see difference between inline and normal inputs on a form
                          </div>                        
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
