import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     username: null
        // }
    }
    
    render() {
        // handle state here

        return (
            <form id="searchContainer" onSubmit={this.props.handleClick}>
                <input type="text" name="username" placeholder="Enter a github username" />
                <button id='searchbn'> Search User </button>
            </form>
        );
    }
};

export default Search;