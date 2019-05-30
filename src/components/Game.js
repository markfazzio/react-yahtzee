import React, { Component } from 'react';
import Header from './Header';
import Instructions from './Instructions';
import DiceRoll from './DiceRoll';
import Yahtzee from './Yahtzee';
import Scoreboard from './Scoreboard';
import { GameProvider } from "./GameContext";

import './Game.css';

const DEFAULT_ROLLS_INT = 3;
const DICE_SIDES = [1, 2, 3, 4, 5, 6];
const ROLL_DURATION = 750;

class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            turnsRemaining    : 13,
            isRolling         : false,
            rollsRemaining    : DEFAULT_ROLLS_INT,
            ones              : '',
            twos              : '',
            threes            : '',
            fours             : '',
            fives             : '',
            sixes             : '',
            three_of_a_kind   : '',
            four_of_a_kind    : '',
            full_house        : '',
            small_straight    : '',
            large_straight    : '',
            yahtzee           : '',
            chance            : '',
            rollDice          : this.rollDice,
            onDieClick        : this.onDieClick,
            submitScoreColumn : this.submitScoreColumn,
            getUpperTotal     : this.getUpperTotal,
            getLowerTotal     : this.getLowerTotal,
            getDiceTotal      : this.getDiceTotal,
            getTotalScore     : this.getTotalScore,
            lastMove          : null,
            dice: [
                {
                    held: false,
                    value: 1
                },
                {
                    held: false,
                    value: 2
                },
                {
                    held: false,
                    value: 3
                },
                {
                    held: false,
                    value: 4
                },
                {
                    held: false,
                    value: 5
                }
            ]
        }
    }

    // validating score
    // has all of the logic for validating the column submissions
    // SO DONT TRY TO CHEAT! >__<
    validateColumn = (column, score) => {
        
        let validValues = [];
        let i;
        const scoreNum = parseInt(score);

        switch(column) {
            case 'ones':
                validValues.push(1,2,3,4,5);
                break;
            case 'twos':
                validValues.push(2,4,6,8,10);
                break;
            case 'threes':
                validValues.push(3,6,9,12,15);
                break;
            case 'fours':
                validValues.push(4,8,12,16,20);
                break;
            case 'fives':
                validValues.push(5,10,15,20,25);
                break;
            case 'sixes':
                validValues.push(6,12,18,24,30);
                break;
            case 'full_house':
                validValues.push(25);
                break;
            case 'small_straight':
                validValues.push(30);
                break;
            case 'large_straight':
                validValues.push(40);
                break;
            case 'yahtzee':
                validValues.push(50);
                break;
            default:
                // for CHANCE, 3-OF-A-KIND, 4-OF-A-KIND
                for (i = 0; i <= 30; i++) {
                    validValues.push(parseInt(i));
                }
        }

        // first we make sure the value is valid for the column
        const isValidValue = validValues.includes(scoreNum);

        // next we make sure the user is not lying
        // we check the dice to see if they match what is being put in the column
        const valueAlignsWithDice = this.checkValueAgainstDice(column, scoreNum);

        // allow 0, but also make sure its an accepted value for that category
        if ((scoreNum === 0 || isValidValue) && valueAlignsWithDice)
            return true;
        else
            return false;
    }

    // TODO: implement.
    checkValueAgainstDice = (column, scoreVal) => {
        const { dice } = this.state;
        
        console.log(column);
        console.log(scoreVal);
        console.log(dice);

        return true;
    }

    generateDice = () => {
        let diceArr = [];
        let i;

        for (i = 0; i < DICE_SIDES.length; i++) {
            const newDie = DICE_SIDES[Math.floor(Math.random() * DICE_SIDES.length)];
            diceArr.push(newDie);
        }

        return diceArr;
    }

    rollDice = () => {

        const { rollsRemaining } = this.state;
        const roll = this.generateDice();

        // if new roll, generate a fresh dice roll
        if (rollsRemaining === 3) {

            // make sure we pass previous held dice
            this.setState((prevState, props) => ({
                dice: [
                    { held: false, value: roll[0] },
                    { held: false, value: roll[1] },
                    { held: false, value: roll[2] },
                    { held: false, value: roll[3] },
                    { held: false, value: roll[4] }
                ],
                isRolling: true,
                rollsRemaining: prevState.rollsRemaining - 1
            }));

        } else {

            // pass in previous hold state
            this.setState((prevState, props) => ({
                dice: [
                    {
                        held: prevState.dice[0].held,
                        value: prevState.dice[0].held ? prevState.dice[0].value : roll[0]
                    },
                    {
                        held: prevState.dice[1].held,
                        value: prevState.dice[1].held ? prevState.dice[1].value : roll[1]
                    },
                    {
                        held: prevState.dice[2].held,
                        value: prevState.dice[2].held ? prevState.dice[2].value : roll[2]
                    },
                    {
                        held: prevState.dice[3].held,
                        value: prevState.dice[3].held ? prevState.dice[3].value : roll[3]
                    },
                    {
                        held: prevState.dice[4].held,
                        value: prevState.dice[4].held ? prevState.dice[4].value : roll[4]
                    }
                ],
                isRolling: true,
                rollsRemaining: prevState.rollsRemaining - 1
            }));

        }

        setTimeout(() => {
            this.setState({
                isRolling: false
            })
        }, ROLL_DURATION);
    };

    onDieClick = (index) => {

        const dice = [...this.state.dice];
        dice[index].held = !dice[index].held;

        this.setState({
            dice
        });
    };

    submitScoreColumn = (column, score) => {
        const isValid = this.validateColumn(column, score);

        if (isValid) {
            this.setState(prevState => ({
                turnsRemaining : prevState.turnsRemaining - 1,
                rollsRemaining : DEFAULT_ROLLS_INT,
                lastMove: score + ' on ' + column,
                [column]: score
            }));
        }   
    }

    checkForYahtzee = () => {
        const {
            dice
        } = this.state;

        let newDiceArr = [];

        dice.map((d, index) => {
            return newDiceArr.push(parseInt(d.value));
        });

        return newDiceArr.every( ( val, i, arr ) => val === arr[0] );        
    }

    getDiceTotal = () => {
        const {
            dice
        } = this.state;

        let diceTotal = 0;

        dice.map((d, index) => {
            return diceTotal += parseInt(d.value);
        });

        return diceTotal;
    }

    getUpperTotal = () => {
        const {
            ones,
            twos,
            threes,
            fours,
            fives,
            sixes
        } = this.state;

        let upperTotal = 0;

        if (ones !== '')
            upperTotal += parseInt(ones);

        if (twos !== '')
            upperTotal += parseInt(twos);

        if (threes !== '')
            upperTotal += parseInt(threes);

        if (fours !== '')
            upperTotal += parseInt(fours);

        if (fives !== '')
            upperTotal += parseInt(fives);

        if (sixes !== '')
            upperTotal += parseInt(sixes);

        return upperTotal;
    }

    getLowerTotal = () => {
        const {
            three_of_a_kind,
            four_of_a_kind,
            full_house,
            small_straight,
            large_straight,
            yahtzee
        } = this.state;

        let lowerTotal = 0;

        if (three_of_a_kind !== '')
            lowerTotal += parseInt(three_of_a_kind);

        if (four_of_a_kind !== '')
            lowerTotal += parseInt(four_of_a_kind);

        if (full_house !== '')
            lowerTotal += parseInt(full_house);

        if (small_straight !== '')
            lowerTotal += parseInt(small_straight);

        if (large_straight !== '')
            lowerTotal += parseInt(large_straight);

        if (yahtzee !== '')
            lowerTotal += parseInt(yahtzee);

        return lowerTotal;
    }

    getTotalScore = () => {
        const upperTotal = this.getUpperTotal();
        const lowerTotal = this.getLowerTotal();
        let scoreTotal = parseInt(upperTotal) + parseInt(lowerTotal);
        if (upperTotal >= 63) {
            scoreTotal += 35;
        }

        return scoreTotal;
    }

    render() {

        const { 
            turnsRemaining,
            rollsRemaining,
            isRolling,
            lastMove
        } = this.state;
        const totalScore = this.getTotalScore();

        return (
            <div className="game">
                <GameProvider value={this.state}>
                    <Header 
                        turnsRemaining={turnsRemaining}
                        score={totalScore}
                        lastMove={lastMove}    
                    />
                    <div className="game__container container">
                        <div className="row">
                            <div className="col-sm-12">
                                <Instructions />
                                { this.checkForYahtzee() ? <Yahtzee /> : undefined }
                                <DiceRoll 
                                    turnsRemaining={turnsRemaining}
                                    rollsRemaining={rollsRemaining} 
                                    isRolling={isRolling}
                                />
                                <Scoreboard />
                            </div>
                        </div>
                    </div>
                </GameProvider>
            </div>
        );
    }

}

export default Game;