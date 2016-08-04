import React, { Component } from 'react';
import Artist from './Artist.js';

class ArtistList extends Component {


	render() {

		const artists = this.props.artists.map((artist) => {
			return <Artist key={artist.id} artist={artist}/>;
		})

		return (
			<div className="grid">{artists}</div>
		)
	}
}

export default ArtistList;