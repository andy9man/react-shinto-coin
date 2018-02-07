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
    
    switch(action.type){
        case ADD_COIN:
            return{
                
            }
        case SELL_COIN:
            return{

            }
        case MINE_COIN:
            console.log(state.coinPrice)
            const newCoinPrice = state.coinPrice + 1
            const newAcctBal = state.acctBal + 1
            let ledger = new Ledger('Mined', 1, state.coinPrice)
            return{
                ...state, coinPrice: newCoinPrice, acctBal: newAcctBal, ledger: state.ledger.concat([ledger]) 
            }
        default: 
            return state
    }

}