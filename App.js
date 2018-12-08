import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/Todo/reducers';
import TodoList from './components/Todo';
import * as Expo from 'expo';
const store = createStore(reducer);

export default class App extends React.Component {
	state = {
		isReady: false
	}

	async componentWillMount() {
		await Expo.Font.loadAsync({
			'Roboto': require('native-base/Fonts/Roboto.ttf'),
			'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
		});
		this.setState({ isReady: true })
	}
	render() {
		if(!this.state.isReady){
			return <Expo.AppLoading/>;
		}
		return (
			<Provider store={store}>
				<TodoList />
			</Provider>
		);
	}
}