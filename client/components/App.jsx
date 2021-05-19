import React, { Component } from 'react';
import Search from './Search.jsx';
// import Timeline from './Timeline';

class App extends Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        // this.state = {}
    }

    // handleClick function

    render() {
        // handle state

        // variables to store text; should only appear after user hits Search button
        let test = 'GOOD DAY SUNSHINE';

        return (
            <div>
                <div id="searchContainer">
                    <Search key='searchbar' />
                    <button id='searchbn' onClick={null}>
                        Search User
                    </button>
                </div>

                <div id="info">
                    {test}
                </div>
            </div>
        );
    }
}

export default App;