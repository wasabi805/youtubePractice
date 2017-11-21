

//COMPONENTS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import _ from 'lodash';


//VARIABLES
const API_KEY = 'AIzaSyC5Yq9OaMfek6Oydozhcx88PL-JLGM4gps';


//Rendered Components go here:
class App extends Component {

    constructor(props){
        super(props)
        this.state ={
            videos:[],
            selectedVideo: null
        };

        this.videoSearch('marvel');
    };

    videoSearch(term){
        YTSearch({key: API_KEY, term: term},
            (videos) => {
                this.setState(
                    {videos: videos,
                    selectedVideo: videos[0]
                });
            }
        );
    };

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); // <-----1.) new throttled callback, can only render every 300 millisecs.

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail video={this.state.selectedVideo}/> {/*<-----2.) place new callback, videoSearch in eventListener */}
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.root'));




