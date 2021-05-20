import React from 'react';
import PropTypes from 'prop-types';

const Info = (props) => {
    // for conditional rendering
    const showUserData = props.showUserData;
    console.log('infoprops', props)
    // for updating inner HTML tags
    let test = '<insert fetched user data here>';

    // if button is clicked, showUserData should be true 
    if (showUserData) {
        return (
            <div id="info">
                <h2 id="username">username:   {props.username}</h2>
                <img href={props.avatar_url}></img>
                <div className="userdata">
                    <p id="repoNum">public repos:   {props.repoNum}</p>
                    <p id="followers">followers:   {props.followers}</p>
                    <p id="following">following:   {props.following}</p>
                </div>
            </div>
        );
    }
    // if button isn't clicked, don't render this component
    return null;
}

export default Info;