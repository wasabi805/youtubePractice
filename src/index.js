//Section 2 Lesson 02: ##### REFACTOR FUNCTIONAL COMPONENTS #####



//THE PARENT COMPONENT - index.js

//COMPONENTS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';



//VARIABLES
const API_KEY = 'AIzaSyB3lwz55zUHvylyF80AEV6hhYBDSLZj9xo';


//Rendered Components go here:
class App extends Component {

    constructor(props){
        super(props)
        this.state ={videos:[]}

        //remember that YTSearch is a CALLBACK func()
        //YTSearch is passed {} containing API_KEY and term key-pair-val , func(youTubeVids) and, this.setState as args)

        //REMEMBER: since YTSearch is within the constructor, it is an instance of state at a given time(after the API call
        // returns with data)

        YTSearch({key: API_KEY, term: 'cats'},
            (videos) => {
            this.setState({ videos })
        });
    }

    render() {
        return (<div>Youtube components<SearchBar /></div>);
    }}

ReactDOM.render(<App />, document.querySelector('.root'));




