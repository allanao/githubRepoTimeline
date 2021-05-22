import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

// child components
import Search from './components/Search.jsx';
import Info from './components/Info.jsx';
// import Timeline from './Timeline';

// For using async await on this component
import regeneratorRuntime from "regenerator-runtime";
// import Timeline from './components/Timeline.jsx';


// const API_KEY = 'SHA256:/V+HDj6Uwl/9DEfHjUc91eZSCudrPXQVhKJQMRoAi/I=';
const client_id = 'Iv1.60275089b6a5eee8';
const client_secret = 'c68f5a1691565c1374fca0e04b9793b0f3c3ed17';

class App extends Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.state = {
            showUserData: false,
            showTimeline: false,
            username: undefined,
            avatar_url: undefined,
            name: undefined,
            repoNum: undefined,
            followers: undefined,
            following: undefined,
            repoUrl: undefined,
        }
    }

    // handleClick function
    handleClick = async (e) => {
        // HANDLES USER INPUT EVENT
        // prevents app from refreshing upon clicking button
        e.preventDefault();
        // this.state.username = e.target.elements.username.value;
        const username = e.target.elements.username.value;
        console.log(e.target.elements);
        // console.log('search user:', this.state.username);


        // FETCHES DATA FROM API
        const api_call = await fetch(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`);

        const data = await api_call.json();
        console.log('fetched data', data);

        // FETCH REPO DATA
        const repo_call = await fetch(data.repos_url);
        const repoData = await repo_call.json();
        console.log('repoList', repoData);

        // SETS THE STATE
        this.setState({
            showUserData: true,
            username: data.login,
            avatar_url: data.avatar_url,
            name: data.name,
            repoNum: data.public_repos,
            followers: data.followers,
            following: data.following,
            // repoUrl: data.repos_url,
        });
        // console.log('search user:', this.state.username);
    }

    render() {
        // handle state

        // variables to store text; should only appear after user hits Search button
        // let test = 'GOOD DAY SUNSHINE';

        return (
            <div>
                <Search key='searchbar' handleClick={this.handleClick} />
                <div>
                    <Info key='userData' 
                        showUserData={this.state.showUserData}
                        username={this.state.username}
                        avatar_url={this.state.avatar_url}
                        name={this.state.name}
                        repoNum={this.state.repoNum}
                        followers={this.state.followers}
                        following={this.state.following}
                    />
                    {/* <Timeline /> */}
                </div>
            </div>

        );
    }
}

export default App;