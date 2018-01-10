import constants from './constants';
import { combineReducers } from 'redux';

const initialState = {
	usersList: [
	    { id: 1, name: "Kirill Kalchenko", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2016/08/Carhartt-Winter-Coats-100x100.jpg' },
		{ id: 2, name: "Egorov Borya", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2016/10/Trench-Leather-Coat-100x100.jpg' },
		{ id: 3, name: "Nikolay Olyunin", avatarUrl: undefined },
    	{ id: 4, name: "Max Brauder", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2016/08/Befikre-Poster-100x100.jpg' },
    	{ id: 5, name: "John Locke", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2016/08/Biker-Jackets-100x100.jpg' },
    	{ id: 7, name: "Jack Shepard", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2016/08/Bridal-Salwar-Kameez-9-100x100.jpg' },
    	{ id: 8, name: "James Ford", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2016/08/Befikre-Poster-100x100.jpg' },
    	{ id: 9, name: "Kate Austin", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2016/08/Biker-Jackets-100x100.jpg' },
    	{ id: 10, name: "Clear Widha", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2016/08/Bridal-Salwar-Kameez-9-100x100.jpg' }
	],
	pagination:{
		nextPageUrl: undefined,
		prevPageUrl: undefined
	}
};


function usersList(state = initialState.usersList, action={}) {
	switch (action.type) {
		case constants.UPDATE_SETTINGS:
			let newList = Array.from(state);
			let editedUser = newList.find((u)=> u.id==action.userId);
			editedUser.name = action.settings.name;
			editedUser.avatarUrl = action.settings.avatarUrl;
			return newList;
		default:
			return state;
	}
}
function pagination(state = initialState.pagination, action={}) {
	switch (action.type) {
		case constants.FETCH_USERS_SUCCESS:
			return {
				nextPage: action.results.nextPageUrl,
				prevPage: action.results.prevPageUrl,
			}
		default:
			return state;
	}
}


const reducer = combineReducers({
	usersList,
	pagination
});

export default reducer;