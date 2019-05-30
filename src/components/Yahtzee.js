import React, { Component } from 'react';

class Yahtzee extends Component {
    render() {
        return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>YAHTZEE!</strong> Congratulations! You got Yahtzee. Place a '50' in the Yahtzee column, 
                or if this is your second one, you add the dice total and add to any other available field.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}

export default Yahtzee;