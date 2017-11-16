//Section 1 Lesson 19: ##### CONTROLLED COMPONENTS #####

import React, { Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term: 'California'};
    }

    render() {
        return (
                <div>
                     <input
                         value={this.state.term}
                         onChange={event => this.setState({term: event.target.value})} />
                    Value of the input: {this.state.term}
                </div>
        );
    }
    //function handler above
};

export default SearchBar;




