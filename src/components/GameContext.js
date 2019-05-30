import React from 'react';

const GameContext = React.createContext({
    submitScoreColumn: () => {},
    rollDice: () => {},
    onDieClick: () => {},
    getTotalScore: () => {},
    getDiceTotal: () => {}
});

export const GameProvider = GameContext.Provider;
export const GameConsumer = GameContext.Consumer;