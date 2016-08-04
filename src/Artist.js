import React, {Component} from 'react';
import ArtistPlayer from './ArtistPlayer.js';
import $ from 'jquery';

class Artist extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			wikiIntro: ''
		})

		this.getWikiIntro = this.getWikiIntro.bind(this);
	}

	getWikiIntro() {
		$.ajax({
			url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=&explaintext=&titles=' + this.props.artist.name,
			dataType: 'jsonp',
			success: (response) => {
				var pageID = Object.keys(response.query.pages);
				var untrimmedString = response.query.pages[pageID].extract;
				var trimmedString = untrimmedString.length > 100 ? untrimmedString.substr(0, 100) + '...' : untrimmedString;
				this.setState({wikiIntro: trimmedString});
			}
		});
	}

	masonry() {
		var imgLoad = imagesLoaded(document.querySelector('.container'));
		imgLoad.on('done', function() {
  			//console.log('all images loaded');
  			new Masonry('.grid', {
        		itemSelector: '.artist'
      		})
		})
	}

	componentDidMount() {
		this.getWikiIntro();
	}

	componentDidUpdate() {
		this.masonry()
	}

	render() {

		const artist = this.props.artist;

		return (
			<div className="artist">
				<div className="artist-image"><img src={artist.images[0].url}/></div>
				<div className="artist-social">
					<a target="_blank" title="Search Youtube" href={'https://www.youtube.com/results?search_query='+artist.name}><i className="icon fa fa-youtube-square fa-2x"></i></a>
					<a target="_blank" title="Find on Wikipedia" href={'https://en.wikipedia.org/wiki/'+artist.name}><i className="icon fa fa-wikipedia-w fa-2x"></i></a>
					<a target="_blank" title="View their subreddit" href={'https://www.reddit.com/r/' + artist.name.split(' ').join('')}><i className="icon fa fa-reddit fa-2x"></i></a>
					<a target="_blank" title="Find on Spotify" href={'https://open.spotify.com/artist/' + artist.id}><i className="icon fa fa-spotify fa-2x"></i></a>
				</div>
				<div className="artist-info">
					<p className="artist-name"> { artist.name }
					<br/><span className="artist-genre">{artist.genres[0]}</span></p>
					<p className="artist-desc">{this.state.wikiIntro}</p>
				</div>
				<ArtistPlayer artist={artist} />
			</div>
		)
	}
}

export default Artist;