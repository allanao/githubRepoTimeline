import React from 'react';
import PropTypes from 'prop-types';

const Info = (props) => {
    // for conditional rendering
    const showUserData = props.showUserData;
    console.log('infoprops', props)
    // for updating inner HTML tags
    let test = '<insert fetched user data here>';

    // if button is clicked, showUserData should be true 
    if (props.showUserData) {
        return (
            <div id="info">
                <h2 id="username"><b>username:</b>   {props.username}</h2>
                <img src={props.avatar_url}></img>
                <div className="userdata">
                    <p id="repoNum"><b>public repos:</b>   {props.repoNum}</p>
                    <p id="followers"><b>followers:</b>   {props.followers}</p>
                    <p id="following"><b>following:</b>   {props.following}</p>
                </div>
            </div>
        );
    }
    // if button isn't clicked, don't render this component
    return null;
}

export default Info;