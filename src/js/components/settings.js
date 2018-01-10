import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import ArrowBack from 'material-ui-icons/ArrowBack';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {saveSettings} from '../actions'


class UserSettings extends Component {
	constructor(props) {
		super(props);
		this.state={
			name: this.props.user.name,
			avatarUrl: this.props.user.avatarUrl
		}
	}

	render() {
		return(
			<Paper zdepth={3}>
				<Link to="/"><Button ><ArrowBack/>Back</Button></Link><br />
				<div className="b-settings">
					<TextField
						value={this.state.name}
	          			label="Name"
	          			onChange={(e)=>{this.handleChange('name', e)}}
	          			fullWidth={true}/>
	          		<br /><br />
	          		<TextField
	      				value={this.state.avatarUrl}
	          			label="Avatar URL"
	          			onChange={(e)=>{this.handleChange('avatarUrl', e)}}
	          			fullWidth={true}/>
	          	</div>
	          	<Button className="fullwidth" raised color="primary" onClick={()=>this.save()}>Save</Button>
			</Paper>
		)
	}

	save(){
		this.props.dispatch(saveSettings(this.props.user.id, this.state))
		this.props.history.push("/")
	}

	handleChange(name,e){
    	this.setState({
      		[name]: e.target.value,
    	});
  	}
}
	

function mapStateToProps(state, ownProps) {
	return {
		user: state.usersList.find((u)=> u.id==ownProps.match.params.id)
	}
}

export default withRouter(connect(mapStateToProps)(UserSettings));
