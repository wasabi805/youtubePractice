//Section 2 Lesson 01: ##### Youtube Search Response - DOWNWARD DATA FLOW - API - CALLBACKS #####

//THE PARENT COMPONENT - index.js

import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


//COMPONENTS
import SearchBar from './components/search-bar';

//VARIABLES
const API_KEY = 'AIzaSyB3lwz55zUHvylyF80AEV6hhYBDSLZj9xo';

YTSearch(
    {key: API_KEY, term: 'cats'},
    function (data) {
        console.log(data)
    });


//Rendered Components go here:
const App = () => {
    return (
        <div>
            Youtube components
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.root'));




