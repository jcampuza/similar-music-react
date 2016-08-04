import React, {Component} from 'react';

class Header extends Component {
	render() {
		return (
			<nav className="header-nav">
				<a href="/">Home</a>
				<a href="about">About</a>
			</nav>
		);
	}
}

export default Header;