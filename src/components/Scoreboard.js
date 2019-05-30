import React, { Component } from "react";
import { GameConsumer } from "./GameContext";

import "./Scoreboard.css";

class Scoreboard extends Component {
  
  constructor(props) {
    super(props);

    this.form = React.createRef();
  }

  onScoreSubmit = (e) => {
    e.preventDefault();
  };

  validate() {
    return this.form.current.reportValidity();
  }

  render() {

    return (
      <GameConsumer>
        { context => (
          <form ref={this.form} onSubmit={this.onScoreSubmit}>
            <div className="scorecard container">
              <div className="row">
                <div className="col-sm-6">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>
                          Ones
                          <br />
                          <small>Dice Total</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={0}
                            max={5}
                            step={1}
                            defaultValue={ context.ones }
                            disabled={ context.ones || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('ones', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Twos
                          <br />
                          <small>Dice Total</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={0}
                            max={10}
                            step={2}
                            defaultValue={ context.twos }
                            disabled={ context.twos || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('twos', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Threes
                          <br />
                          <small>Dice Total</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={0}
                            max={15}
                            step={3}
                            defaultValue={ context.threes }
                            disabled={ context.threes || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('threes', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Fours
                          <br />
                          <small>Dice Total</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={0}
                            max={20}
                            step={4}
                            defaultValue={ context.fours }
                            disabled={ context.fours || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('fours', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Fives
                          <br />
                          <small>Dice Total</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={0}
                            max={25}
                            step={5}
                            defaultValue={ context.fives }
                            disabled={ context.fives || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('fives', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Sixes
                          <br />
                          <small>Dice Total</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={0}
                            max={30}
                            step={6}
                            defaultValue={ context.sixes }
                            disabled={ context.sixes || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('sixes', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Upper Bonus
                          <br />
                          <small>35</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={35}
                            max={35}
                            value={ context.getUpperTotal() >= 63 ? 35 : 0 }
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Upper Total</td>
                        <td>
                          <input
                            required 
                            className="form-control" 
                            type="number"
                            max={105}
                            value={context.getUpperTotal()}                            
                            readOnly
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-6">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>
                          3-of-a-kind
                          <br />
                          <small>Dice Total</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={0}
                            max={30}
                            defaultValue={ context.three_of_a_kind }
                            disabled={ context.three_of_a_kind || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('three_of_a_kind', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          4-of-a-kind
                          <br />
                          <small>Dice Total</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={0}
                            max={30}
                            defaultValue={ context.four_of_a_kind }
                            disabled={ context.four_of_a_kind || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('four_of_a_kind', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Full House
                          <br />
                          <small>25</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={25}
                            max={25}
                            defaultValue={ context.full_house }
                            disabled={ context.full_house || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('full_house', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Small Straight
                          <br />
                          <small>30</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={30}
                            max={30}
                            defaultValue={ context.small_straight }
                            disabled={ context.small_straight || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('small_straight', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Large Straight
                          <br />
                          <small>40</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={40}
                            max={40}
                            defaultValue={ context.large_straight }
                            disabled={ context.large_straight || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('large_straight', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Yahtzee
                          <br />
                          <small>50</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={50}
                            max={50}
                            defaultValue={ context.yahtzee }
                            disabled={ context.yahtzee || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('yahtzee', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Chance
                          <br />
                          <small>Dice Total</small>
                        </td>
                        <td>
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={0}
                            max={30}
                            defaultValue={ context.chance }
                            disabled={ context.chance || context.rollsRemaining > 0 }
                            onBlur={ (e) => { context.submitScoreColumn('chance', e.target.value) } }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Lower Total</td>
                        <td>
                          <input
                            required 
                            className="form-control" 
                            type="number" 
                            readOnly
                            value={context.getLowerTotal()}                            
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
        )
      }
      </GameConsumer>        
    );
  }
}

export default Scoreboard;
