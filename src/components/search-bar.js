//  CREATING EVENT HANDLERS

import React, { Component} from 'react';

class SearchBar extends Component {
    render() {
        //return <input />;     <==previous return prior to setting up event handler.
        //return <input onChange={this.onInputChange} />;   <==previous return used to define prop change on state of event handler.

                            //cleaned up code above used to return change on search-bar when user types data in search form.
        return <input onChange={
            (event) => console.log(event.target.value)
        } />;
    }

                            // CLEANING UP THE CODE
                            // Previously, we passed a variable called event into the event handler function below.

    // onInputChange(event){
    //     console.log(event.target.value);
    //
    // }

                            //Above, we can remove the event handler because of how we restructured the search-bar comp to define the event (onChange for input)
                            //as a function ( by using the => ) that takes var event and  returns a console.log containing the text input by the user within the search-bar (event.target.value).

};

export default SearchBar;


