
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
        this.state ={
            videos:[],
            selectedVideo: null
        }

        YTSearch({key: API_KEY, term: 'marvel'},
            (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }

    render() {
        return (
            <div>Youtube components
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.root'));




