import React, { Component } from 'react';

class Instructions extends Component {

    render() {
        return (
            <div className="game__instructions">
                <h1>React Yahtzee</h1>
                <p>
                    A simple Yahtzee game using React 16 Context API, Bootstrap, FontAwesome, HTML5 form validation &amp; CSS flexbox.<br />
                    <strong>Instructions: Click a dice to hold it. Three rolls per turn, normal Yahtzee rules.</strong>
                </p>
            </div>
        );
    }
}

export default Instructions;