import React,{Component} from 'react';
import $ from 'jquery';
import './simditor.css';
class Richtext extends Component{
	render(){
		return (
			<textarea id="editor" placeholder="请输入需要加工的富文本"></textarea>
		)
	}
}

export default Richtext;