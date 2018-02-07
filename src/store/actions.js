export const ADD_COIN = 'ADD_COIN';
export const SELL_COIN = 'SELL_COIN';
export const MINE_COIN = 'MINE_COIN';

export const addCoin = coins => ({type: ADD_COIN, payload: coins})
export const sellCoin = coins => ({type: SELL_COIN, payload: coins})
export const mineCoin = coins => ({type: MINE_COIN, payload: coins})
