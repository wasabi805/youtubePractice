
//THE PARENT COMPONENT - index.js

//COMPONENTS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

//VARIABLES
const API_KEY = 'AIzaSyC5Yq9OaMfek6Oydozhcx88PL-JLGM4gps';


//Rendered Components go here:
class App extends Component {

    constructor(props){
        super(props)
        this.state ={videos:[]}

        YTSearch({key: API_KEY, term: 'cats'},
            (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>Youtube components
                <SearchBar />
                <VideoList videos={this.state.videos}/>
                <VideoDetail video={this.state.videos[0]}/>
            </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.root'));




