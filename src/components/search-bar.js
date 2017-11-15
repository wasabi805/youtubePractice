import React, { Component} from 'react';

class SearchBar extends Component {
    render() {
        // return <input />;     <==previous return prior to setting up event handler.
        //
        return <input onChange={this.onInputChange} />; //onChange is a reserved word delegated for watching changes
    }   // C.) TRANSLATION: the line above states: " create a new input element and, pass it as a prop (ie property) on change, with a value of this.onInputChange (the user input/change of the state's property)"

    //below is our event handler:
    // A.) whenever the input changes, run the code in here
    // B.) Pass it to element we want to monitor [ in this case, its the <input> ]


    //notice we pass a variable called event into the event handler below
    onInputChange(event){
        console.log(event);

    }
};

export default SearchBar;


