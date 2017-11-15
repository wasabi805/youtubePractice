
//Always create one component per file.
import React from 'react';
import ReactDOM from 'react-dom';

//since the child comp, searchBar is exporting the searchBar comp, we'll need to import it to index.js
//Also just as important, // if we make a component that doesn't come from node_modules, we'll need to create a FILE REFERENCE.
// this means we need to provide the relative path from the file we're importing from

import SearchBar from './components/search-bar';

//declare a variable for Youtube API key, use const since the API key will never change
const API_KEY = 'AIzaSyB3lwz55zUHvylyF80AEV6hhYBDSLZj9xo'

//install npm package to allow for capability to search youtube
// in terminal: npm install --save youtube-api-search
// final step to rendering component we've defined and EXPORTED in search-bar.js, imported into index.js, we need to render the <SearchBar /> component

const App = () => {
    return (
        <div>
            Youtube components
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));