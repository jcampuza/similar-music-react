import React, { Component } from 'react';
import ArtistList from './ArtistList.js';
import $ from 'jquery';

class Search extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			artistID : null,
			artists : [],
			searchString : 'Hello'
		}
		this.submit = this.submit.bind(this);
		this.artistChange = this.artistChange.bind(this);
		this.findRelatedArtists = this.findRelatedArtists.bind(this);
	}

	artistChange(e) {
		this.setState({searchString : e.target.value});
		//console.log(this.searchString);
	}

	submit(e) {
		e.preventDefault();
		$.get('https://api.spotify.com/v1/search?q=' + this.state.searchString + '&type=artist&limit=5').then((response) => {
				//console.log(response);
				if (response.artists.items[0] === undefined) {
					console.log('No artists found');
				} else {
					this.setState({artistID : response.artists.items[0].id});
					this.findRelatedArtists(this.state.artistID);
				}
			});
	} 

	findRelatedArtists(id) {
		$.get('https://api.spotify.com/v1/artists/' + id + '/related-artists').then((response) => {
			this.setState({artists: response.artists});
			console.log(this.state.artists);
		});
	}

	render() {
		return (
			<div className="Search">
				<div className="container">
					<h1 className="text-center title">Similar Music</h1>
					<form className="search-form" onSubmit={this.submit}> 
						<input onChange={this.artistChange} className="search-input" type="text" name="artistSearch" placeholder="Search for an artist/band"/>
						<button type="button" className="submit-button" onClick={this.submit}><i className="fa fa-search"></i></button>
					</form>
					<ArtistList artists={this.state.artists}></ArtistList>
				</div>
			</div>
		)
	}
}

export default Search;