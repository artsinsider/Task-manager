import React           from 'react';
import {render}        from 'react-dom';
import {Provider}      from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import configureStore  from './store/configureStore';
import App	           from './container/App';
import AboutPage       from './components/AboutPage';
import TasksApp     from './container/TasksApp';
import './public/main.css';

const store = configureStore();

render (
	<Provider store={store}>
		<Router history={hashHistory} >
			<Route path='/' components={App} >
				<Route path='/about' components={AboutPage}/>
				<Route path='/tasks' components={TasksApp}/>
			</Route>
		</Router>
	</Provider>,

	document.getElementById('root')
)
