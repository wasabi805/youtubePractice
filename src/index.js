//THE PARENT COMPONENT - index.js

import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import SearchBar from './components/search-bar';

//VARIABLES
const API_KEY = 'AIzaSyB3lwz55zUHvylyF80AEV6hhYBDSLZj9xo'


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