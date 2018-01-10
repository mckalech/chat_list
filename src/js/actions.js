import constants from './constants';


function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}



function fetchUsersSuccess(result){
	return { type: constants.FETCH_USERS_SUCCESS, result}
}
export function fetchUsers(url) {
	let fetchUrl = url || '/api/users/'
	return function (dispatch) {
        return fetch(fetchUrl)
        .then(handleErrors)
        .then(result=>
		        dispatch(fetchUsersSuccess(result))
        )
        .catch(e=>{
        	console.log('Ошибка:', e)
        });
    };
}


function updateSettings(userId, settings){
 	return { type: constants.UPDATE_SETTINGS, userId, settings};
}

export function saveSettings(userId, settings) {
	return function (dispatch) {
        dispatch(updateSettings(userId, settings));
        return fetch(`/api/users/${userId}/`, {method:'POST', body:JSON.stringify(settings)})
        .then(handleErrors)
        .catch(e=>{
        	console.log('Ошибка:', e)
        });
  };
}



// history.replace('/');