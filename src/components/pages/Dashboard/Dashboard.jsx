import React, { Fragment } from 'react';
import './Dashboard.scss';
import Cart from './components/Cart/Cart';

export default function Dashboard() {
	return (
		<Fragment>
			<h2>Upcoming event</h2>
			<Cart />
			<Cart />
		</Fragment>
	);
}
