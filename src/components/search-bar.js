//  CREATING EVENT HANDLERS
// see repo push notes for explanation of changes

import React, { Component} from 'react';

class SearchBar extends Component {
    render() {

        return <input onChange={
            (event) => console.log(event.target.value)
        } />;
    }


};

export default SearchBar;


