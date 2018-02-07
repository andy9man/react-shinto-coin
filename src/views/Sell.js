import React, {Component} from 'react';
import { connect } from 'react-redux'
import { sellCoin } from '../store/actions';

class Sell extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: ''
        }
    }
    render(){
        const {coinPrice, acctBal} = this.props;
        return(
            <div>
                <h1>Sell ShintoCoins</h1>
                <p>Current ShintoCoin Value: <strong>${coinPrice}</strong></p>
                <p>Number of ShintoCoins Owned: <strong>{acctBal}</strong></p>
                <form onSubmit={
                    (e) => {
                        e.preventDefault()
                        this.state.input < acctBal && this.props.appSellCoin(this.state.input)
                        this.setState({input: ''})
                    }}>
                    <div className='row'>
                        <div className='small-12 medium-6 columns'>
                            <div className='md-text-field with-floating-label'>
                                <input type='number' id='sellInput' value={this.state.input} onInput={(e) => (this.setState({ input: e.target.value }))} />
                                <label htmlFor='sellInput'>Number to Sell</label>
                                <button>Sell</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


const getStateFromReduxPassToAppComponentAsProps = (state) => {
    return {
        coinPrice: state.coinPrice,
        acctBal: state.acctBal
    }
}

const getDispatchFromReduxToAppComponentAsProps = (dispatch) => {
    return {
        appSellCoin(coins){
            dispatch(sellCoin(coins))
        }
    }
}

export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(Sell)
