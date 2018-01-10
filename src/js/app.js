import {render} from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Box from './components/box';
import UsersList from './components/list';
import UserSettings from './components/settings';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'



const store = configureStore();

render(
	(
		<Provider store={store}>
			<Box>
				<Router>
					<div>
						<Route exact path="/" component={UsersList} />
						<Route exact path="/user/:id/" component={UserSettings} />
					</div>	
				</Router>
			</Box>
		</Provider>
	),document.getElementById('content')
);

