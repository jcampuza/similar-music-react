import React, {Component} from 'react';
import $ from 'jquery';

class ArtistPlayer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			tracks: [],
			tracksReady: false,
			currentTrack: 0
		}
		this.getTopTracks = this.getTopTracks.bind(this);
		this.setCurrentTrack = this.setCurrentTrack.bind(this);
	}

	getTopTracks(id) {
		$.get('https://api.spotify.com/v1/artists/' + id + '/top-tracks?country=US').then((response) => {
			this.setState({tracks: response.tracks.slice(0,3)});
			this.setState({tracksReady: true});
		})
	}

	setCurrentTrack(index, event) {
		if (this.state.currentTrack === index) return;
		this.setState({currentTrack : index});
		document.querySelectorAll('audio').forEach(function(audio) {
			audio.pause();
		});
	}

	componentDidMount() {
		this.getTopTracks(this.props.artist.id);
	}


	render() {

		var currentlyPlaying, images, audioSrc;

		if (!this.state.tracksReady) {
			currentlyPlaying = "Loading..."
		} else {
			currentlyPlaying = this.state.tracks[this.state.currentTrack].name + ' - ' + this.state.tracks[this.state.currentTrack].album.name; 
		}

		images = this.state.tracks.map((track, index) => {
			return <img key={index} src={track.album.images[1].url} onClick={()=>this.setCurrentTrack(index)}/>
		})

		audioSrc = this.state.tracksReady ? this.state.tracks[this.state.currentTrack].preview_url : '';

		return(
			<div className="artist-player">
				<div className="now-playing">
					<p>{currentlyPlaying}</p>
				</div>
				<audio controls src={audioSrc}></audio>
				<div className="track-images">
					{images}
				</div>
			</div>
		)
	}
}

export default ArtistPlayer;