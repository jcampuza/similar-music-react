import React, {Component} from 'react';
import Layout from './Layout.js';


class About extends Component {
	render () {
		return (
			<Layout>
				<div className="container">
					<h1 className="text-center title">Similar Music</h1>
					<p className="about-header">Hi, I'm Joseph Campuzano!</p>
					<p className="about-text">I built this webapp in order to learn ReactJS. It is a clone of a similar site I wrote using VueJS. It utilizes both the spotify Web API as well as the Wikipedia Web API. It uses Bootstrap (mostly for prototyping, its useful default styles, and containers) as well as font-awesome for its awesome icons. It also uses the Masonry library and the imagesLoaded plugin in order to create the layout. The initial scaffolding for the app was provided by React's Starter Kit</p>
				</div>
			</Layout>
		);
	}
}

export default About;
