var css = require("../../styles/styles.scss");
import React, { Component } from 'react';


import { connect } from 'react-redux';


class Box extends Component {
	render() {
		return (
			<div>{this.props.children}</div> 
		)	
	}
}



export default Box;