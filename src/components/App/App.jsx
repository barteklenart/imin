import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

function App() {
	return (
		<Router>
			<Route exact path="/" component={Dashboard} />
		</Router>
	);
}

export default App;
