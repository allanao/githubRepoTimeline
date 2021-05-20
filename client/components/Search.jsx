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
            <div id="input">
                <input id="searchBar" type="text" name="username" placeholder="Enter a github username" />
            </div>
            <button id='searchbn'> Search User </button>
            </form>
        );
    }
};

export default Search;