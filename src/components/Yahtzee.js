import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

import './Yahtzee.css';

class Yahtzee extends Component {
    render() {
        return (
            <div className="yahtzee-alert">
                <Alert variant="success">
                    <strong>YAHTZEE!</strong> Congratulations! You got Yahtzee. Place a '50' in the Yahtzee column, 
                    or if this is your second one, you add the dice total and add to any other available field.
                </Alert>
            </div>
        )
    }
}

export default Yahtzee;