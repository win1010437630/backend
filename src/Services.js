import React, { Component } from 'react';
import $ from 'jquery';

class Services extends Component {
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
	                    <div className="span7 column">
	                        <form>
	                            <div className="field-box">
	                                <label>Vision</label>
	                                <input className="span8" type="text" />
	                            </div>
	                            <div className="field-box">
	                                <label>Picture</label>
	                                <input className="span8" type="file" onChange={this.setFiles}/><input type="button" className="one btn" value="上传"/>
	                            </div>
	                            <div className="field-box">
	                                <label>Picture gif</label>
	                                <input className="span8" type="file" onChange={this.setFiles}/><input type="button" className="two btn" value="上传"/>
	                            </div>                                                       
	                            <div className="field-box">
	                                <label>Contacts:</label>
	                                <input className="span8" type="text"/>
	                            </div>
	                            <div className="field-box">
	                                <label>Work</label>
	                                <input className="span8" type="text" />
	                            </div>                           
	                            <div className="field-box textarea">
	                                <label>Text:</label>
	                                <textarea className="span8" rows="4"></textarea>
	                            </div>
	                            <div className="field-box textarea">
	                                <label>Related works</label>
	                                <textarea className="span8" rows="4"></textarea>
	                            </div>
	                            <div className="span11 field-box actions"  style={{textAlign: "centers"}}>
	                                <input type="button" className="btn-glow primary" value="Create poster" />
	                                <span> OR </span>
	                                <input type="reset" value="Cancel" className="reset" />
	                            </div>
	                        </form>
	                    </div>
	                    <div className="span5 column">
	                        <table className="table">
	                            <tbody>
	                            	<tr>
		                                <td>Vision</td>
		                                <td>Picture</td>
		                                <td>Picture gif</td>
		                                <td>Contacts</td>
		                                <td>Work</td>
		                                <td>Text</td>
		                            </tr>
	                            </tbody>
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

export default Services;
