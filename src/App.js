import React, { Component } from 'react';
import Search from './Search.js';
import Layout from './Layout.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
        	<Search />
        </Layout>
      </div>
    );
  }
}

export default App;
