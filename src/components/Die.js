import React, { Component } from 'react';
import './Die.css';
import classNames from 'classnames';

class Die extends Component {

    static defaultProps = {
        holdLabel : 'HOLD'
    };

    render() {

        const {
            value,
            hold,
            isRolling,
            onClick,
            rollsRemaining,
            holdLabel
        } = this.props;

        const diceClasses = classNames({
            'btn' : true,
            'btn-link' : true,
            'die' : true,
            'die--hold' : hold,
            'die--rolling' : isRolling && !hold
        });

        const diceIconClasses = classNames({
            'fas' : true,
            'fa-dice-one' : value === 1,
            'fa-dice-two' : value === 2,
            'fa-dice-three' : value === 3,
            'fa-dice-four' : value === 4,
            'fa-dice-five' : value === 5,
            'fa-dice-six' : value === 6
        });

        return (
            <div className="die__wrapper">
                <button className={diceClasses} onClick={onClick} disabled={rollsRemaining === 0}>
                    <i className={[diceIconClasses]}></i>
                </button>
                <span className="die__subtitle">
                    { hold ? holdLabel : '\xa0' }
                </span>
            </div>
        );
    }
}

export default Die;