import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
	render() {
		return (
			<nav className="header-nav">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</nav>
		);
	}
}

export default Header;