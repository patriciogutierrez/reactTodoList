import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './components/Todo/reducers';
import TodoList from './components/Todo';

const store = createStore(reducer);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<TodoList />
			</Provider>
		);
	}
}