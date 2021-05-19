import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null
        }
    }
    
    render() {
        // handle state here
        
        return (
            <input type="text" placeholder="Type a github username"></input>
        );
    }
};

export default Search;