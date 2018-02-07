import { ADD_COIN, SELL_COIN, MINE_COIN } from './actions'

const initialState = {
    coinPrice: 0,
    ledger: [],
    acctBal: 0,
}

const CreateUid = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 15);
 };

class Ledger {
    constructor(action, amount, value){
        this.action = action
        this.amount = amount
        this.value = value
        this.id = CreateUid()
    }
}

export const reducer = (state = initialState, action) => {
    let newCoinPrice, newAcctBal, ledger;
    switch(action.type){
        case ADD_COIN:
            console.log("Purchasing some coins...");
            newCoinPrice = state.coinPrice + 1;
            newAcctBal = state.acctBal + parseInt(action.payload, 10);
            ledger = new Ledger('Bought', action.payload, state.coinPrice);
            return{
                ...state, coinPrice: newCoinPrice, acctBal: newAcctBal, ledger: state.ledger.concat([ledger])
            }
        case SELL_COIN:
            console.log("Selling some coins...");
            newCoinPrice = state.coinPrice === 0 ? 0 : state.coinPrice - 1;
            newAcctBal = state.acctBal - parseInt(action.payload, 10);
            ledger = new Ledger('Sold', action.payload, state.coinPrice);
            return{
                ...state, coinPrice: newCoinPrice, acctBal: newAcctBal, ledger: state.ledger.concat([ledger])
            }
        case MINE_COIN:
            console.log("Mining some coins...")
            newCoinPrice = state.coinPrice + 1
            newAcctBal = state.acctBal + 1
            ledger = new Ledger('Mined', 1, state.coinPrice)
            return{
                ...state, coinPrice: newCoinPrice, acctBal: newAcctBal, ledger: state.ledger.concat([ledger])
            }
        default:
            return state
    }

}