import React, { Component } from 'react';
import { GameConsumer } from "./GameContext";
import Die from './Die';
import './DiceRoll.css';

class DiceRoll extends Component {
    
    render() {
        const { 
            rollsRemaining, 
            isRolling,
            turnsRemaining
        } = this.props;

        let btnText = 'Roll Dice';

        if (isRolling) {
            btnText = 'Rolling...';
        }

        if (rollsRemaining === 0) {
            btnText = 'Place Score';
        }

        return (
            <GameConsumer>
                { context => (
                    <div className="dice-roll">
                        <div className="dice-roll__dice">
                            {
                                context.dice.map((d, index) => 
                                    <Die 
                                        value={d.value}
                                        onClick={(e) => {
                                            context.onDieClick(index);
                                        }}
                                        key={index}
                                        hold={context.dice[index].held}
                                        rollsRemaining={rollsRemaining}
                                        isRolling={isRolling}
                                    />
                                )
                            }
                        </div>
                        <button className='btn btn-primary' onClick={() => context.rollDice()} disabled={isRolling || rollsRemaining === 0 || turnsRemaining === 0}>
                            { btnText } ({rollsRemaining > 0 ? `${rollsRemaining} rolls remaining` : context.getDiceTotal()})
                        </button>
                    </div>
                )}
            </GameConsumer>
        );
    }
}

export default DiceRoll;