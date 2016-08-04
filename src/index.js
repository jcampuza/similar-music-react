import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, /*Link,*/ browserHistory } from 'react-router'
import App from './App';
import About from './About.js';

const url = "jcampuza.com/similar-music";

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}/>
		<Route path="/about" component={About}/>
		<Route path="*" component={App}/>
	</Router>,
  document.getElementById('root')
);
