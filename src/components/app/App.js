import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import './App.css';

const App = () => (
	<Switch>
		<Route
			path="/"
			component={HomePage}
			exact
		/>
		<Route
			path="/cart"
			component={CartPage}
		/>
	</Switch>
);

export default App;
