import React, { Component } from 'react';
import Button from 'material-ui/Button';
import List, {ListItem, ListItemText, ListSubheader} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import ArrowBack from 'material-ui-icons/ArrowBack';
import ArrowForward from 'material-ui-icons/ArrowForward';
import {fetchUsers} from '../actions'
import Gravatar from 'react-gravatar';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';


class UsersList extends Component {

	componentDidMount() {
		this.props.dispatch(fetchUsers())
	}
	render() {
		let usersList = this.props.usersList.map((user)=>{
			return (
				<Link to={`/user/${user.id}`} key={user.id}>
				  	<ListItem button>
				  		<Avatar src={user.avatarUrl} />
				  		<ListItemText primary={user.name} />
				  	</ListItem>
				</Link>
			)
		})
		let pagination = (
			<div>
				{ this.props.pagination.prevPageUrl ? <Button onClick={()=>this.getMore('prev')}><ArrowBack/></Button> : '' }
				{ this.props.pagination.nextPageUrl ? <Button onClick={()=>this.getMore('next')}><ArrowForward/></Button> : '' }
			</div>
		)

		return(
			<Paper zdepth={3}>
				<List>
					<ListSubheader>Users List</ListSubheader>
				  	{usersList}
				</List>
				{pagination}
			</Paper>
		)
	}
	getMore(direction){
		const {dispatch, pagination } = this.props;
		switch (direction) {
			case 'prev':
				dispatch(fetchUsers(pagination.prevPageUrl));
				break;
			case 'next':
				dispatch(fetchUsers(pagination.nextPageUrl));
				break;
		}
	}
}
	

function mapStateToProps(state, ownProps) {
	return {
		usersList: state.usersList,
		pagination: state.pagination
	}
}

export default withRouter(connect(mapStateToProps)(UsersList));
