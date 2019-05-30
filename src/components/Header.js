import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {

        const { 
            turnsRemaining,
            score,
            lastMove
        } = this.props;

        return (
            <div className="game__nav container-fluid">
                <div className="row">
                    <div className="col-md-5 text-left game__turn-info">
                        <p><strong>{ turnsRemaining }</strong> turns remaining</p>
                        {
                            lastMove &&
                                <p><small>Last move: {lastMove}</small></p>
                        }
                    </div>
                    <div className="col-md-2 text-center">
                        Score: <strong>{score}</strong>
                    </div>
                    <div className="col-md-5 text-right">
                        <button className="btn btn-success" disabled={turnsRemaining > 0}>
                            Submit Score
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;