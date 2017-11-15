import React, { Component} from 'react';

// see last push to reference changes made:
// in this push, converted previous functional component into an ES6 CLASS COMP


// 1.) the line bellow can be read as: define a new class as SearchBar, give it access to all functionality that React.Component class inherently posses.
// 2.) We will also need to define a method within the class in order to render the return of the function. (Defined as: render() {}
class SearchBar extends Component {
    render() {
        return <input />;
    }
};

//to render the searchBar (child comp, index.js needs a REFERENCE to searchBar.js
export default SearchBar;

